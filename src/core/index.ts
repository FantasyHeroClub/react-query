export { Query } from './query'
export { QueryCache } from './queryCache'
export { QueryClient } from './queryClient'
export {
  getBatchUpdatesFn,
  getUpdateFn,
  setBatchUpdatesFn,
  setUpdateFn,
} from './notifyManager'
export { setLogger } from './logger'
export { setFocusHandler } from './focusHandler'
export { setOnlineHandler } from './onlineHandler'
export {
  CancelledError,
  hashQueryKey,
  isCancelledError,
  isError,
} from './utils'

// Types
export * from './types'
export type { Logger } from './logger'
