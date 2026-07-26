import type { Discipline, Power } from './types'
import { DISCIPLINE_ICONS } from './icons'
import { levelDots } from './helpers'

export interface RenderStrings {
  cost:     string
  dicePool: string
  duration: string
  type:     string
  level:    string
  amalgam:  string
}

const WIDTH   = 1080
const PADDING = 60

const COLOR_VOID            = '#0d0b14'
const COLOR_CARD            = '#13101e'
const COLOR_BORDER          = '#2e2040'
const COLOR_PARCHMENT       = '#d4c9b8'
const COLOR_PARCHMENT_DIM   = '#8a7f70'
const COLOR_PARCHMENT_FAINT = '#504840'
const COLOR_GOLD            = '#c9a84c'
const COLOR_GOLD_DIM        = '#8a6a2a'
const COLOR_GOLD_TINT       = 'rgba(201,168,76,0.10)'

const FONT_TITLE = "'Cinzel Decorative', serif"
const FONT_BODY  = "'Cormorant Garamond', serif"

function loadIcon(svg: string, color: string): Promise<HTMLImageElement> {
  const themed = svg.replace(/currentColor/g, color)
  const blob   = new Blob([themed], { type: 'image/svg+xml' })
  const url    = URL.createObjectURL(blob)
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.onload  = () => { setTimeout(() => URL.revokeObjectURL(url), 0); resolve(img) }
    img.onerror = () => { URL.revokeObjectURL(url); reject(new Error('icon load failed')) }
    img.src = url
  })
}

function wrapText(ctx: CanvasRenderingContext2D, text: string, maxWidth: number): string[] {
  const paragraphs = text.split(/\n/)
  const lines: string[] = []
  for (const p of paragraphs) {
    const words = p.split(/\s+/).filter(Boolean)
    if (!words.length) { lines.push(''); continue }
    let line = words[0]!
    for (let i = 1; i < words.length; i++) {
      const w = words[i]!
      const test = line + ' ' + w
      if (ctx.measureText(test).width <= maxWidth) {
        line = test
      } else {
        lines.push(line)
        line = w
      }
    }
    lines.push(line)
  }
  return lines
}

async function ensureFonts() {
  const fonts = (document as unknown as { fonts?: FontFaceSet }).fonts
  if (!fonts) return
  try {
    await Promise.all([
      fonts.load("700 68px 'Cinzel Decorative'"),
      fonts.load("300 40px 'Cormorant Garamond'"),
      fonts.load("600 28px 'Cormorant Garamond'"),
      fonts.load("700 26px 'Cormorant Garamond'"),
      fonts.load("400 32px 'Cormorant Garamond'"),
    ])
  } catch {
    // If fonts fail to load, fall back to serif — image still renders.
  }
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number, y: number, w: number, h: number, r: number,
): void {
  const rr = Math.min(r, w / 2, h / 2)
  ctx.beginPath()
  ctx.moveTo(x + rr, y)
  ctx.arcTo(x + w, y,     x + w, y + h, rr)
  ctx.arcTo(x + w, y + h, x,     y + h, rr)
  ctx.arcTo(x,     y + h, x,     y,     rr)
  ctx.arcTo(x,     y,     x + w, y,     rr)
  ctx.closePath()
}

interface Row { key: string; val: string }

export async function renderPowerCard(
  discipline: Discipline,
  power: Power,
  strings: RenderStrings,
): Promise<Blob> {
  await ensureFonts()

  const icon = await loadIcon(DISCIPLINE_ICONS[discipline.iconType], discipline.color)

  const contentX = PADDING
  const contentW = WIDTH - PADDING * 2

  const headerH        = 640
  const gap            = 40
  const contentPadTop  = 60
  const contentPadBot  = 60
  const footerH        = 100
  const titleLineH     = 88
  const descLineH      = 56
  const rowValLineH    = 42
  const rowPadY        = 32
  const rowMinH        = 68
  const rowKeyPadX     = 32
  const rowKeyColW     = 240
  const rowValColX     = rowKeyPadX + rowKeyColW
  const ornamentH      = 80

  const measureCanvas = document.createElement('canvas')
  const mctx = measureCanvas.getContext('2d')!

  mctx.font = `700 68px ${FONT_TITLE}`
  const titleLines = wrapText(mctx, power.name, contentW - 40)
  const titleH = titleLines.length * titleLineH

  const rows: Row[] = []
  if (power.cost) rows.push({ key: strings.cost, val: power.cost })
  if (power.dicePool && power.dicePool !== 'N/A') rows.push({ key: strings.dicePool, val: power.dicePool })
  if (power.duration && power.duration !== 'N/A' && power.duration !== 'Pasiva') {
    rows.push({ key: strings.duration, val: power.duration })
  }
  if (discipline.tipo) rows.push({ key: strings.type, val: discipline.tipo })

  const valColW = contentW - rowValColX - rowKeyPadX
  mctx.font = `400 32px ${FONT_BODY}`
  const rowsMeta = rows.map(r => {
    const valLines = wrapText(mctx, r.val, valColW)
    const h = Math.max(rowMinH, valLines.length * rowValLineH + rowPadY)
    return { key: r.key, valLines, h }
  })
  const statsH = rowsMeta.reduce((s, r) => s + r.h, 0)

  mctx.font = `300 40px ${FONT_BODY}`
  const descLines = power.description ? wrapText(mctx, power.description, contentW - 40) : []
  const descH = descLines.length * descLineH

  let amalgamaLines: string[] = []
  let amalgamaH = 0
  if (power.amalgama) {
    mctx.font = `500 32px ${FONT_BODY}`
    amalgamaLines = wrapText(mctx, `${strings.amalgam}: ${power.amalgama}`, contentW - 100)
    amalgamaH = amalgamaLines.length * rowValLineH + 60
  }

  const bodyH =
    contentPadTop +
    titleH + gap +
    statsH + gap +
    ornamentH +
    descH +
    (amalgamaH ? gap + amalgamaH : 0) +
    contentPadBot

  const totalH = headerH + bodyH + footerH

  const canvas = document.createElement('canvas')
  canvas.width  = WIDTH
  canvas.height = totalH
  const ctx = canvas.getContext('2d')!
  ctx.textBaseline = 'top'

  ctx.fillStyle = COLOR_VOID
  ctx.fillRect(0, 0, WIDTH, totalH)

  const grad = ctx.createLinearGradient(0, 0, WIDTH, headerH)
  grad.addColorStop(0,   discipline.colorDark || '#1a0a2a')
  grad.addColorStop(0.5, discipline.color + '55')
  grad.addColorStop(1,   discipline.colorDark || '#1a0a2a')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, WIDTH, headerH)

  const fade = ctx.createLinearGradient(0, headerH * 0.55, 0, headerH)
  fade.addColorStop(0, 'rgba(19,16,30,0)')
  fade.addColorStop(1, COLOR_CARD)
  ctx.fillStyle = fade
  ctx.fillRect(0, headerH * 0.55, WIDTH, headerH * 0.45)

  const dotY = 60
  const dotR = 12
  const dotGap = 18
  const dotsFilled = levelDots(power.level)
  const dotsW = dotsFilled.length * (dotR * 2) + (dotsFilled.length - 1) * dotGap
  let dotX = (WIDTH - dotsW) / 2 + dotR
  ctx.lineWidth = 2
  for (const filled of dotsFilled) {
    ctx.beginPath()
    ctx.arc(dotX, dotY, dotR, 0, Math.PI * 2)
    if (filled) {
      ctx.fillStyle = discipline.color
      ctx.fill()
      ctx.strokeStyle = discipline.color
    } else {
      ctx.fillStyle = 'rgba(0,0,0,0.5)'
      ctx.fill()
      ctx.strokeStyle = COLOR_PARCHMENT_FAINT
    }
    ctx.stroke()
    dotX += dotR * 2 + dotGap
  }

  const iconSize = 320
  const iconX = (WIDTH - iconSize) / 2
  const iconY = (headerH - iconSize) / 2 - 30
  ctx.save()
  ctx.shadowColor = discipline.color
  ctx.shadowBlur = 60
  ctx.drawImage(icon, iconX, iconY, iconSize, iconSize)
  ctx.restore()

  const tagText = `${discipline.name.toUpperCase()}  ·  ${strings.level.toUpperCase()} ${power.level}`
  ctx.font = `600 28px ${FONT_BODY}`
  const tagPad = 30
  const tagW = ctx.measureText(tagText).width + tagPad * 2
  const tagH = 56
  const tagX = (WIDTH - tagW) / 2
  const tagY = headerH - tagH - 40
  ctx.fillStyle = 'rgba(0,0,0,0.75)'
  roundRect(ctx, tagX, tagY, tagW, tagH, 28)
  ctx.fill()
  ctx.strokeStyle = discipline.color
  ctx.lineWidth = 2
  ctx.stroke()
  ctx.fillStyle = COLOR_PARCHMENT
  ctx.textAlign = 'center'
  ctx.fillText(tagText, WIDTH / 2, tagY + 14)

  ctx.fillStyle = COLOR_CARD
  ctx.fillRect(0, headerH, WIDTH, bodyH + footerH)

  let y = headerH + contentPadTop

  ctx.textAlign = 'center'
  ctx.font = `700 68px ${FONT_TITLE}`
  ctx.save()
  ctx.shadowColor = discipline.colorGlow || 'rgba(255,255,255,0.3)'
  ctx.shadowBlur = 30
  ctx.fillStyle = '#ffffff'
  for (const line of titleLines) {
    ctx.fillText(line, WIDTH / 2, y)
    y += titleLineH
  }
  ctx.restore()
  y += gap

  const tblX = contentX
  const tblY = y
  const tblW = contentW
  let rowY = tblY
  ctx.strokeStyle = COLOR_BORDER
  ctx.lineWidth = 2
  rowsMeta.forEach((r, i) => {
    if (i % 2 === 1) {
      ctx.fillStyle = 'rgba(255,255,255,0.025)'
      ctx.fillRect(tblX, rowY, tblW, r.h)
    }
    ctx.font = `700 26px ${FONT_BODY}`
    ctx.fillStyle = COLOR_GOLD
    ctx.textAlign = 'left'
    ctx.fillText(r.key.toUpperCase(), tblX + rowKeyPadX, rowY + 22)
    ctx.font = `400 32px ${FONT_BODY}`
    ctx.fillStyle = COLOR_PARCHMENT
    let ly = rowY + 18
    for (const line of r.valLines) {
      ctx.fillText(line, tblX + rowValColX, ly)
      ly += rowValLineH
    }
    if (i < rowsMeta.length - 1) {
      ctx.beginPath()
      ctx.moveTo(tblX, rowY + r.h)
      ctx.lineTo(tblX + tblW, rowY + r.h)
      ctx.stroke()
    }
    rowY += r.h
  })
  ctx.strokeStyle = COLOR_BORDER
  ctx.lineWidth = 2
  ctx.strokeRect(tblX, tblY, tblW, statsH)
  y = tblY + statsH + gap

  ctx.font = `400 32px ${FONT_BODY}`
  ctx.fillStyle = COLOR_PARCHMENT_FAINT
  ctx.textAlign = 'center'
  ctx.fillText('✦     ✦     ✦', WIDTH / 2, y + 20)
  y += ornamentH

  ctx.font = `300 40px ${FONT_BODY}`
  ctx.fillStyle = COLOR_PARCHMENT
  ctx.textAlign = 'left'
  for (const line of descLines) {
    ctx.fillText(line, contentX + 20, y)
    y += descLineH
  }

  if (amalgamaLines.length) {
    y += gap
    const boxX = contentX
    const boxY = y
    const boxW = contentW
    const boxH = amalgamaH
    ctx.fillStyle = COLOR_GOLD_TINT
    roundRect(ctx, boxX, boxY, boxW, boxH, 10)
    ctx.fill()
    ctx.strokeStyle = COLOR_GOLD_DIM
    ctx.lineWidth = 1.5
    ctx.stroke()

    ctx.font = `500 32px ${FONT_BODY}`
    ctx.fillStyle = COLOR_GOLD_DIM
    ctx.textAlign = 'left'
    let ly = boxY + 30
    for (const line of amalgamaLines) {
      ctx.fillText(line, boxX + 30, ly)
      ly += rowValLineH
    }
  }

  ctx.font = `600 26px ${FONT_TITLE}`
  ctx.fillStyle = COLOR_PARCHMENT_DIM
  ctx.textAlign = 'center'
  ctx.fillText('VAMPIRE TOOLKIT', WIDTH / 2, totalH - footerH + 28)
  ctx.font = `400 22px ${FONT_BODY}`
  ctx.fillStyle = COLOR_PARCHMENT_FAINT
  ctx.fillText('Vampire: The Masquerade — 5th Edition', WIDTH / 2, totalH - footerH + 62)

  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob(
      (blob) => (blob ? resolve(blob) : reject(new Error('toBlob returned null'))),
      'image/png',
    )
  })
}
