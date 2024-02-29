import {Body, Controller, Post, Res} from "@nestjs/common";
import {PrismaService} from "../database/prisma.service";
import {Prisma} from "@prisma/client";
import {UsersService} from "./users.service";
import {Response} from "express";

@Controller()
export class UsersController {
    constructor(private users: UsersService) {}


    @Post('/login')
    async login(@Body() loginInput: Prisma.usersWhereUniqueInput){
        return this.users.loginUser(loginInput);
    }

    @Post('user/role')
    async userRole(@Body() user: Prisma.usersWhereUniqueInput) {
        return this.users.getUserRole(user);
    }
}