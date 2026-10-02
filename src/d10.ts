/**
 * The geometry of a d10 — a pentagonal trapezohedron — for drawing one in CSS 3D.
 *
 * The solid: two apexes on the vertical axis, and between them a zigzag ring of ten
 * vertices, five a little above the equator and five a little below, offset by 36°.
 * Each of the ten faces is a kite from one apex down to the far side of the zigzag.
 * The apex height is not free: it is what makes each kite *flat*,
 * `H = z0·(1 + cos 36°) / (1 − cos 36°)`.
 *
 * Every face becomes a `div` clipped to a kite, placed with a `matrix3d` that maps the
 * div's own plane onto the face. Each face also has a *rest* rotation that turns the
 * whole die so that face looks straight at the viewer, apex up — which is how a rolled
 * value is shown. Everything here is computed once, in CSS pixels, with CSS's axes:
 * x right, y **down**, z towards the viewer.
 */

type Vec = [number, number, number]

const sub   = (a: Vec, b: Vec): Vec => [a[0] - b[0], a[1] - b[1], a[2] - b[2]]
const add   = (a: Vec, b: Vec): Vec => [a[0] + b[0], a[1] + b[1], a[2] + b[2]]
const scale = (a: Vec, s: number): Vec => [a[0] * s, a[1] * s, a[2] * s]
const dot   = (a: Vec, b: Vec): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2]
const cross = (a: Vec, b: Vec): Vec => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
]
const unit  = (a: Vec): Vec => scale(a, 1 / Math.hypot(a[0], a[1], a[2]))

export interface D10Face {
  value: number
  /** The kite's bounding box, in px. */
  width: number
  height: number
  /** `clip-path` that cuts the box down to the kite. */
  clipPath: string
  /** Places the face on the solid (with `transform-origin: 0 0`). */
  transform: string
  /** Where the face's symbol is centred, as a % of the box height. */
  labelTop: string
  /** The rotation that shows this face to the viewer. */
  rest: string
  /** Brightness of every face (by index) when this face is the one at rest. */
  light: number[]
}

/**
 * The flat three-tone shading of the V5 dice cheat sheet the dice are drawn after:
 * relative to the front face, the face to its left is ~1.25× as bright, the one to its
 * right ~0.5×, and anything turned downwards darker still. `n` is a face normal in
 * screen space (x right, y down, z at the viewer).
 */
function sheetShade(n: Vec): number {
  const side = n[0] < 0 ? -0.36 * n[0] : -0.72 * n[0]
  const under = -0.55 * Math.max(0, n[1])
  return Math.max(0.3, 1 + side + under)
}

/**
 * Which value each face carries, laid out as a real d10 is (the net the user supplied):
 * round one apex the evens, **clockwise seen from outside** 10, 8, 2, 6, 4; round the
 * other the odds, clockwise 5, 9, 3, 1, 7; and the 5 sits against the 10's left-hand
 * lower edge (10 viewed apex up). Opposite faces then add up to 11 — which is checked,
 * since it is what proves the two rings were read the same way round.
 *
 * Worked out from the geometry rather than written as a table, so it cannot drift
 * from the solid if the vertex layout is ever changed.
 */
const RING_EVEN = [10, 8, 2, 6, 4]
const RING_ODD  = [5, 9, 3, 1, 7]

function numberFaces(shapes: Array<{ apex: Vec; far: Vec; sides: [Vec, Vec] }>): number[] {
  const same = (a: Vec, b: Vec) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]) < 1e-6
  const centre = (f: (typeof shapes)[number]) =>
    scale(add(add(f.apex, f.far), add(f.sides[0], f.sides[1])), 0.25)

  /**
   * The faces round one apex, clockwise as seen from outside the die.
   *
   * With e1 × e2 = d (the apex's outward direction) the angle grows the way the
   * right-hand rule turns about d — but CSS's axes (x right, y *down*, z out of the
   * screen) are left-handed, so on screen that is **clockwise** seen from outside.
   * Hence the ascending sort. Getting this backwards shifts the odd ring by one face,
   * which the sum-to-11 check below catches.
   */
  function clockwise(apex: Vec): number[] {
    const d  = unit(apex)
    const e1 = unit(cross(d, Math.abs(d[0]) < 0.9 ? [1, 0, 0] : [0, 0, 1]))
    const e2 = cross(d, e1)
    return shapes
      .map((f, i) => ({ i, f }))
      .filter(({ f }) => same(f.apex, apex))
      .map(({ i, f }) => ({ i, a: Math.atan2(dot(centre(f), e2), dot(centre(f), e1)) }))
      .sort((p, q) => p.a - q.a)
      .map(({ i }) => i)
  }

  const evens = clockwise(shapes[0]!.apex)
  const odds  = clockwise(shapes[5]!.apex)
  const values = new Array<number>(shapes.length).fill(0)
  evens.forEach((face, k) => { values[face] = RING_EVEN[k]! })

  // The 10's left-hand lower edge: from its left side corner to its far point, where
  // "left" is as the face is seen from outside with its apex up.
  const ten = shapes[evens[0]!]!
  const ev = unit(sub(ten.far, ten.apex))
  let eu = unit(sub(ten.sides[1], ten.sides[0]))
  if (dot(cross(eu, ev), centre(ten)) < 0) eu = scale(eu, -1)
  const left = dot(sub(ten.sides[0], ten.apex), eu) < 0 ? ten.sides[0] : ten.sides[1]
  const five = odds.findIndex(i => {
    const f = shapes[i]!
    const has = (v: Vec) => [f.apex, f.far, ...f.sides].some(w => same(v, w))
    return has(ten.far) && has(left)
  })
  odds.forEach((face, k) => { values[face] = RING_ODD[(k - five + 5) % 5]! })

  // Opposite faces must add to 11. Their centres are mirror images through the middle.
  shapes.forEach((f, i) => {
    const j = shapes.findIndex(g => same(centre(g), scale(centre(f), -1)))
    if (values[i]! + values[j]! !== 11) throw new Error('d10: opposite faces do not add to 11')
  })
  return values
}

/**
 * The faces of a d10 whose zigzag ring has radius `r` px, numbered as a real die is
 * (see `numberFaces`).
 *
 * `tiltDeg` is how far the resting face leans back from facing the viewer. A d10 on a
 * table lies on one face with the opposite one flat on top, and is seen from above at
 * an angle — so the result face is foreshortened and the belt of faces below it shows.
 * The tilt is folded into each rest matrix (and into the shading) rather than applied
 * in CSS, so the light falls where the die actually ends up.
 */
export function buildD10(r: number, tiltDeg = 0): D10Face[] {
  // The zigzag's half-height, which also sets the apexes. 0.12 puts the front kite's
  // side corners and far point where the cheat sheet's are (73% and 90% down the
  // silhouette, against its 69% and 95%); `.d10-body` stretches the result to the
  // sheet's 1.12 height-to-width, which no true d10 reaches on its own.
  const z0  = 0.12 * r
  const cos = Math.cos(Math.PI / 5)
  const H   = z0 * (1 + cos) / (1 - cos)
  const rad = (deg: number) => (deg * Math.PI) / 180

  const upper = (k: number): Vec => { const t = rad((k % 5) * 72);      return [r * Math.sin(t), -z0, r * Math.cos(t)] }
  const lower = (k: number): Vec => { const t = rad((k % 5) * 72 + 36); return [r * Math.sin(t),  z0, r * Math.cos(t)] }
  const top: Vec = [0, -H, 0]
  const bot: Vec = [0,  H, 0]

  // Each kite as apex, far vertex (opposite the apex) and its two side vertices.
  const shapes: Array<{ apex: Vec; far: Vec; sides: [Vec, Vec] }> = []
  for (let k = 0; k < 5; k++) shapes.push({ apex: top, far: lower(k), sides: [upper(k), upper(k + 1)] })
  for (let k = 0; k < 5; k++) shapes.push({ apex: bot, far: upper(k + 1), sides: [lower(k), lower(k + 1)] })

  const values = numberFaces(shapes)
  const kites = shapes.map((f, i) => ({ ...f, value: values[i]! }))

  const geo = kites.map(({ value, apex, far, sides }) => {
    const centre = scale(add(add(apex, far), add(sides[0], sides[1])), 0.25)
    const ev = unit(sub(far, apex))
    let eu = unit(sub(sides[1], sides[0]))
    // Keep the frame right-handed with the normal pointing out of the solid, so the
    // face's front — the side the number is printed on — is the outside.
    if (dot(cross(eu, ev), centre) < 0) eu = scale(eu, -1)
    const n = cross(eu, ev)

    const width  = Math.abs(dot(sub(sides[1], sides[0]), eu))
    const height = dot(sub(far, apex), ev)
    const sideY  = dot(sub(sides[0], apex), ev)
    const origin = sub(apex, scale(eu, width / 2))
    return { value, eu, ev, n, width, height, sideY, origin }
  })

  // Rotation about the screen's x axis, y down: a positive angle turns the face's
  // normal upwards, which brings the faces below it round towards the viewer.
  const tc = Math.cos(rad(tiltDeg)), ts = Math.sin(rad(tiltDeg))
  const tilt = (v: Vec): Vec => [v[0], v[1] * tc - v[2] * ts, v[1] * ts + v[2] * tc]

  const fmt = (x: number) => +x.toFixed(4)
  const m3d = (cols: number[]) => `matrix3d(${cols.map(fmt).join(',')})`

  return geo.map((g, i) => {
    const sideTop = (g.sideY / g.height) * 100
    // The die turned so this face's normal points at the viewer and its apex up —
    // the rows of that rotation are the face's own axes — then leaned back by the tilt.
    // Its columns are where the solid's x, y and z axes end up.
    const toScreen = (v: Vec): Vec => tilt([dot(g.eu, v), dot(g.ev, v), dot(g.n, v)])
    const restCols = ([[1, 0, 0], [0, 1, 0], [0, 0, 1]] as Vec[])
      .flatMap(axis => [...toScreen(axis), 0]).concat([0, 0, 0, 1])
    const light = geo.map((o, j) => (j === i ? 1 : fmt(sheetShade(toScreen(o.n)))))
    return {
      value: g.value,
      width: fmt(g.width),
      height: fmt(g.height),
      clipPath: `polygon(50% 0, 100% ${fmt(sideTop)}%, 50% 100%, 0 ${fmt(sideTop)}%)`,
      transform: m3d([...g.eu, 0, ...g.ev, 0, ...g.n, 0, ...g.origin, 1]),
      // The symbol is centred a little above the kite's widest line, where a real
      // die's is — the kite is too narrow for it any nearer the apex.
      labelTop: `${fmt(sideTop * 0.74)}%`,
      rest: m3d(restCols),
      light,
    }
  })
}

/**
 * Faces are built at this multiple of their on-screen size and the solid is scaled back
 * down by its inverse (`--d10-ss` in main.css). Chrome rasterises each face at its own
 * 2D size before the 3D transform, so at 1:1 the traced symbols came out soft; twice
 * the pixels keep the ankh's ring and the critical's stars crisp.
 */
export const D10_SUPERSAMPLE = 2

/**
 * How far a resting die's result face leans back from the viewer. 0 is straight from
 * above — the face square-on and its neighbours round it, as the cheat sheet draws
 * them; 34–40° was tried to show the belt of faces below, as on a die seen across a
 * table, and set aside.
 */
export const D10_TILT_DEG = 0

/** The app's d10, built once and shared by every die on screen. The ring radius (24px
 *  on screen) leaves the stretched resting die a margin inside the 64px `.die` tile. */
export const D10_FACES = buildD10(24 * D10_SUPERSAMPLE, D10_TILT_DEG)
