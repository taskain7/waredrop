import {BadRequestException, Body, Controller, Get, Param, Post, Query} from "@nestjs/common";
import {PrismaService} from "./prisma.service";
import {Prisma} from "@prisma/client";
import {UsersService} from "./users.service";

@Controller()
export class PrismaController {
    constructor(
        private db: PrismaService,
        private users: UsersService) {}

    @Get('/login')
    async login(
        @Query('email') email: string | string[] | undefined,
        @Query('password') password: string | string[] |undefined
    ){
        if (Array.isArray(email) || Array.isArray(password)){
            throw new BadRequestException();
        }
        if (email === undefined || password === undefined || email === null || password === null){
            throw new BadRequestException();
        }

        const result = await this.users.loginUser(email, password);
        return result;
    }
}