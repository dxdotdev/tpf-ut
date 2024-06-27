export type AppContext = { path: string }

export type Alert = {
  type: 'info' | 'warning' | 'error'
  message: string
}
