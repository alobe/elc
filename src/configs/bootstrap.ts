import { join } from 'path'
import { print } from './utils'
import dotenv from 'dotenv'
import { ENVS } from './constants/envs'

// "before" will trigger before the app lift.
export const bootstrapBefore = (): object => {
  const isDev = (process.env?.NODE_ENV ?? '').toUpperCase() === ENVS.DEVELOPMENT
  // solve ncc path link.
  const result = dotenv.config({ path: join(process.cwd(), `./.env${isDev ? '.dev' : ''}`) })
  if (result.error) {
    print.danger('Environment variable not loaded: not found ".env" file.')
    return {}
  }
  print.log('.env loaded.')
  return result.parsed
}

// "after" will trigger after the "container" mounted..
export const bootstrapAfter = (): any => {}
