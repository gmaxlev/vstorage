export function warn (message: string): void {
  console.warn(`[valistorage]\n\n${message}`)
}

export const IS_DEV = process.env.NODE_ENV !== 'DEVELOPMENT'
