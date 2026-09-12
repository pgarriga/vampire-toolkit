import type { Discipline, Power } from './types'
import { DISCIPLINES_DATA } from './data'

export function levelDots(level: number, max = 5): boolean[] {
  return Array.from({ length: max }, (_, i) => i < level)
}

export function disciplineById(id: string): Discipline | undefined {
  return DISCIPLINES_DATA.disciplines.find(d => d.id === id)
}

export function powerById(disc: Discipline | undefined, powerId: string): Power | undefined {
  return disc?.powers.find(p => p.id === powerId)
}

export function shortCost(cost: string | undefined | null): string {
  if (!cost) return '—'
  const lo = cost.toLowerCase()
  // Spanish
  if (lo === 'ninguno' || lo.includes('ninguno')) return 'Ninguno'
  if (lo.includes('dos controles')) return '2× Enardecimiento'
  if (lo.includes('un control')) return '1× Enardecimiento'
  if (lo.includes('uno o más')) return '1+ Enardecimiento'
  // English
  if (lo === 'none' || lo.includes('no cost')) return 'None'
  if (lo.includes('two rouse')) return '2× Rouse'
  if (lo.includes('one rouse') || lo.includes('rouse check')) return '1× Rouse'
  if (lo.includes('one or more rouse')) return '1+ Rouse'
  return cost.length > 60 ? cost.substring(0, 58) + '…' : cost
}

export function shortDuration(dur: string | undefined | null): string | null {
  if (!dur || dur === 'N/A') return null
  const d = dur.toLowerCase()
  // Spanish
  if (d.startsWith('pasiva')) return 'Pasiva'
  if (d === 'indefinida') return 'Indefinida'
  if (d.startsWith('una escena') || d.startsWith('no más de una escena') || d.startsWith('una sola escena')) return 'Una escena'
  if (d.startsWith('el veneno')) return 'Una escena'
  if (d.startsWith('hasta que concluye la escena') || d.startsWith('hasta fin de')) return 'Hasta fin de escena'
  if (d.startsWith('un turno, a menos')) return 'Un turno (+sostenido)'
  if (d.startsWith('un turno')) return 'Un turno'
  if (d.startsWith('un uso')) return 'Un uso'
  if (d.startsWith('un solo ataque')) return 'Un ataque'
  if (d.startsWith('aproximadamente una acción')) return 'Una acción'
  if (d.startsWith('aproximadamente un minuto')) return '1 min / Enardecimiento'
  if (d.startsWith('una alimentación') || d.startsWith('una alimentacion')) return 'Una alimentación'
  if (d.startsWith('una hora')) return 'Una hora (+margen)'
  if (d.startsWith('una noche')) return 'Una noche'
  if (d.startsWith('unos minutos')) return 'Minutos / hasta una noche'
  if (d.startsWith('un día') || d.startsWith('un dia')) return 'Un día o más'
  if (d.includes('muerte')) return 'Hasta la muerte'
  if (d.startsWith('el tiempo')) return 'A voluntad'
  if (d.startsWith('como el poder')) return 'Como el poder base'
  if (d.startsWith('según') || d.startsWith('segun')) return 'Según el poder'
  if (d.startsWith('la duración') || d.startsWith('la duracion')) return 'Duración del Frenesí'
  if (d.startsWith('hasta que se desactive')) return 'Hasta que se desactive'
  if (d.startsWith('hasta que se resista')) return 'Hasta que se resista'
  if (d.startsWith('hasta que se ejecuta')) return 'Hasta ejecutarse'
  if (d.startsWith('hasta que termine')) return 'Hasta que termine'
  if (d.startsWith('permanente')) return 'Permanente (reversible)'
  // English
  if (d.startsWith('passive')) return 'Passive'
  if (d === 'indefinite') return 'Indefinite'
  if (d.startsWith('one scene') || d.startsWith('a single scene') || d.startsWith('no more than one scene')) return 'One scene'
  if (d.startsWith('until the end of the scene') || d.startsWith('until end of')) return 'Until end of scene'
  if (d.startsWith('one turn, unless')) return 'One turn (+sustained)'
  if (d.startsWith('one turn')) return 'One turn'
  if (d.startsWith('one use')) return 'One use'
  if (d.startsWith('one attack')) return 'One attack'
  if (d.startsWith('approximately one action') || d.startsWith('about one action')) return 'One action'
  if (d.startsWith('approximately one minute') || d.startsWith('about one minute')) return '1 min / Rouse'
  if (d.startsWith('one feeding')) return 'One feeding'
  if (d.startsWith('one hour')) return 'One hour (+margin)'
  if (d.startsWith('one night')) return 'One night'
  if (d.startsWith('a few minutes') || d.startsWith('minutes')) return 'Minutes / up to one night'
  if (d.startsWith('one day')) return 'One day or more'
  if (d.includes('death') || d.includes('until killed')) return 'Until death'
  if (d.startsWith('at will') || d.startsWith('as long as')) return 'At will'
  if (d.startsWith('as the base power') || d.startsWith('as the power')) return 'As the base power'
  if (d.startsWith('permanent')) return 'Permanent (reversible)'
  if (d.startsWith('until deactivated')) return 'Until deactivated'
  if (d.startsWith('until resisted')) return 'Until resisted'
  return dur.length > 28 ? dur.substring(0, 26) + '…' : dur
}

export function artGradient(discipline: Discipline): string {
  return colorGradient(discipline.color, discipline.colorDark)
}

/**
 * Card art backdrop. The mid stop is the accent at 33% alpha (`55`) on purpose:
 * at full strength it swallows the icon, which is painted in that same colour.
 */
export function colorGradient(color?: string, colorDark?: string): string {
  const c = color || '#4a2a6a'
  const cd = colorDark || '#1a0a2a'
  return `linear-gradient(145deg, ${cd} 0%, ${c}55 50%, ${cd} 100%)`
}

// ── Amalgam link parsing ──────────────────────────────────────────────────────

export interface AmalgamaSegment {
  text: string
  disciplineId?: string
}

export function parseAmalgama(
  text: string,
  disciplines: Array<{ id: string; name: string }>,
): AmalgamaSegment[] {
  if (!text) return []
  // Match longer names first to avoid partial matches
  const sorted = [...disciplines].sort((a, b) => b.name.length - a.name.length)
  let segments: AmalgamaSegment[] = [{ text }]

  for (const disc of sorted) {
    const next: AmalgamaSegment[] = []
    for (const seg of segments) {
      if (seg.disciplineId !== undefined) { next.push(seg); continue }
      const idx = seg.text.indexOf(disc.name)
      if (idx === -1) { next.push(seg); continue }
      if (idx > 0) next.push({ text: seg.text.slice(0, idx) })
      next.push({ text: disc.name, disciplineId: disc.id })
      const rest = seg.text.slice(idx + disc.name.length)
      if (rest) next.push({ text: rest })
    }
    segments = next
  }
  return segments
}
