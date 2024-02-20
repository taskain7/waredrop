import {Body, Controller, Get} from "@nestjs/common";
import {PrismaService} from "./prisma.service";
import {Prisma} from "@prisma/client";
import {UsersService} from "./users.service";

@Controller()
export class PrismaController {
    constructor(
        private db: PrismaService,
        private users: UsersService) {}

    @Get('/login')
    login(@Body() body: Prisma.usersWhereUniqueInput){
        return this.users.loginUser(body)
    }
}