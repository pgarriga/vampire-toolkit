import { createRequire } from 'module'

// TypeScript 7 is a native binary with no JavaScript API, and vue-tsc drives tsc
// through that API. So the check runs on TypeScript 6 from the official
// compatibility package, which vue-tsc recognises and resolves to its full tsc.
const require = createRequire(import.meta.url)

process.argv.push('--noEmit', '-p', 'tsconfig.json')
require('vue-tsc').run(require.resolve('@typescript/typescript6/lib/tsc'))
