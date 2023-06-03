import {
  Post,
  JsonController,
  QueryParams,
  Get,
  Body,
  Res,
  BadRequestError,
} from 'routing-controllers'
import { Response } from 'express'
import { UserService } from '../services'
import { Service } from 'typedi'
import { MaxLength, MinLength, IsDefined, IsEmail } from 'class-validator'

class UserQuery {
  limit?: number
  offset?: number
}

class UserCreate {
  @IsEmail()
  email: string

  @IsDefined()
  @MinLength(8)
  @MaxLength(14)
  password: string
}

@JsonController()
@Service()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/user/list')
  async getUsers(@QueryParams() { limit = 50, offset = 0 }: UserQuery, @Res() res: Response) {
    const users = await this.userService.list(limit, offset)
    return {
      data: users,
      code: 0,
    }
  }

  @Post('/user/register')
  async createUser(@Body() user: UserCreate) {
    const _user = await this.userService.create(user)
    return {
      data: {
        user_id: _user.id
      },
      code: 0
    }
  }

  @Post('/user/edit')
  async editUser(/* @Body() user: UserCreate */) {
    throw new BadRequestError('Not implemented')
  }
}
