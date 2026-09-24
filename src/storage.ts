/**
 * `localStorage` behind a guard. Every access can throw — storage disabled, a private
 * window, a full quota — and none of that should take the app down with it: a failed
 * read is treated as "nothing stored" and a failed write is dropped.
 */

export function storageGet(key: string): string | null {
  try { return localStorage.getItem(key) } catch { return null }
}

export function storageSet(key: string, value: string): void {
  try { localStorage.setItem(key, value) } catch { /* storage unavailable */ }
}

export function storageRemove(key: string): void {
  try { localStorage.removeItem(key) } catch { /* storage unavailable */ }
}

/** Every key currently in storage. Empty when storage is unavailable. */
export function storageKeys(): string[] {
  const keys: string[] = []
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i)
      if (key) keys.push(key)
    }
  } catch { /* storage unavailable */ }
  return keys
}

export function readJSON(key: string): unknown {
  const raw = storageGet(key)
  if (!raw) return null
  try { return JSON.parse(raw) } catch { return null }
}

export function writeJSON(key: string, value: unknown): void {
  storageSet(key, JSON.stringify(value))
}
