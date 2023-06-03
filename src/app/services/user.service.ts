import { Service } from 'typedi'
import prisma from '@/app/helpers/client'
import { Prisma } from '@prisma/client'

@Service()
export class UserService {
  async list (limit: number, offset: number) {
    return await prisma.user.findMany({
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
    return await prisma.user.create({
      data: user
    })
  }
}
