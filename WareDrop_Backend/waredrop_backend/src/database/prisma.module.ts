import { Module } from '@nestjs/common';
import {PrismaService} from "./prisma.service";
import {UsersController} from "../users/users.controller";

@Module({
    providers: [PrismaService,],
    exports: [PrismaService]
})
export class PrismaModule {}