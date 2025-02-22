import type { Theme } from './types'

export const themeLocalStorageKey = 'payload-theme'

export const defaultTheme = 'hm'

export const getImplicitPreference = (): Theme | null => {
  const mediaQuery = '(prefers-color-scheme: light)'
  const mql = window.matchMedia(mediaQuery)
  const hasImplicitPreference = typeof mql.matches === 'boolean'

  if (hasImplicitPreference) {
    return mql.matches ? 'light' : 'light'
  }

  return null
}
