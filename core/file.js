
import { fileURLToPath } from 'node:url'

export function getDir(url) {
  return fileURLToPath(url)
}