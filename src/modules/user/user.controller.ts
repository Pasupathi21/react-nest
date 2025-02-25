import { Controller, Get, Post, Put, Patch, Res, Req, Body, Param, Query, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express'
import { UserService } from './user.service'
import { CreateUserDto, UpdateUserDto } from './dto/user.dto'

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
  ) {}

  @Get('list')
  async get_all(@Req() req: Request, @Res() res: Response, @Query() query: string) {
    try {
        
        const data = await this.userService.get_all()
        return res.status(HttpStatus.OK).send({
            status: true,
            data
         })
    } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: error
        })
    }
  }

  @Get(':id')
  async get_one(@Req() req: Request, @Res() res: Response, @Param('id') id: string) {
    try {
        const data = await this.userService.get_one(id)
        return res.status(HttpStatus.OK).send({
            status: true,
            data
        })
    } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: error
        })
    }
  }

  @Post('create')
  async create(@Req() req: Request, @Res() res: Response, @Body() body: CreateUserDto) {
    try {
       const data = await this.userService.create(body)
       return res.status(HttpStatus.CREATED).send({
        status: true,
        data
       })
    } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: error
        })
    }
  }

  @Put('update/:id')
  async update(@Req() req: Request, @Res() res: Response, @Param('id') id: string, @Body() body: UpdateUserDto) {
    try {
        const data = await this.userService.update(id, body)
        return res.status(HttpStatus.CREATED).send({
        status: true,
        data
       })
    } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: error
        })
    }
  }

  @Patch('delete/:id')
  async delete(@Req() req: Request, @Res() res: Response, @Param('id') id: string) {
    try {
        const data = this.userService.delete(id)
        return res.status(HttpStatus.OK).send({
            status: true
        })
    } catch (error) {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
            error: error
        })
    }
  }
}
