import Redis from 'ioredis';
import Redlock from 'redlock';

const url = process.env.REDIS_URL
let connectCount = 0
const redis = url ? new Redis(url, {
  reconnectOnError: (err) => {
    console.error(err);
    if (connectCount < 3) {
      connectCount++
      return true
    }
    return false
  }
}) : null;

redis.on('connect', () => {
  console.log('>>>redis connected')
})

redis.on('error', (err) => {
  console.error('>>>>redis occur error: ', err)
})

redis.on('disconnect', () => {
  console.error('>>>redis disconnected')
})

const redlock = redis ? new Redlock([redis], {
  retryCount: 3,
  retryDelay: 2000
}) : null

export { redis, redlock }
