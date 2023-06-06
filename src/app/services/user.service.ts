import { Service } from 'typedi'
import { db, redis } from '@/app/helpers'
import { Prisma } from '@prisma/client'

@Service()
export class UserService {
  async list (limit: number, offset: number) {
    const a = await redis.get('ddd')
    console.log(a)
    return await db.user.findMany({
      take: limit,
      skip: offset,
      select: {
        id: true,
        name: true,
        email: true,
        avatar: true,
        nick_name: true,
        phone: true,
      }
    })
  }

  async create (user: Prisma.userCreateInput) {
    return await db.user.create({
      data: user
    })
  }
}
