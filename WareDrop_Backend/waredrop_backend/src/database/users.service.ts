import {Injectable, NotFoundException} from "@nestjs/common";
import {PrismaService} from "./prisma.service";
import {Prisma} from "@prisma/client"

@Injectable()
export class UsersService {
    constructor(private db: PrismaService) {}

    async users(){
        return this.db.users.findMany()
    }

    async user(user_email_input: Prisma.usersWhereInput){
        return this.db.users.findFirst({
            where: user_email_input,
        })
    }

    async admin_users(){
        return this.db.users.findMany({
            where: {
                user_admin: true,
            }
        })
    }

    async createUser(user: Prisma.usersCreateInput){
        return this.db.users.create({
            data: user,
        });
    }

    async createAdminUser(user: Prisma.usersCreateInput){
        return this.db.users.create({
            data: user,
        });
    }

    async deleteUser(user: Prisma.usersWhereUniqueInput){
        return this.db.users.delete({
            where: user,
        });
    }

    async loginUser(email: string, password: string,) {
        const result = await this.db.users.findFirst({
            where: {AND:[ {user_email: email}, {user_password: password} ]}
        })
        if(result === undefined || result === null){
            throw new NotFoundException('Email and password pair not found, or is incorrect!')
        }
        return result;
    }
}