import { Body, Controller, Post } from '@nestjs/common';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './user.entity';

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('users')
    async createUser(
        @Body('user') createUserDto: CreateUserDto,
    ): Promise<UserEntity> {
        return await this.userService.createUser(createUserDto);
    }
}
