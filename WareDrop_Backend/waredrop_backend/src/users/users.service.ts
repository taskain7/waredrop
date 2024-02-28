import {Injectable, NotFoundException} from "@nestjs/common";
import {PrismaService} from "../database/prisma.service";
import {Prisma} from "@prisma/client"

@Injectable()
export class UsersService {
    constructor(private db: PrismaService) {}
    
    async loginUser(loginInput: Prisma.usersWhereUniqueInput) {
        const result = await this.db.users.findFirst({
            select: {user_id: true},
            where: loginInput
        })
        if(result === undefined || result === null){
            throw new NotFoundException('Email and password pair not found, or is incorrect!')
        }
        return result;
    }

    async getUserLore(user: Prisma.usersWhereUniqueInput) {
        const role = await this.db.user_has_role.findFirst({
            select: {
                roles: {
                    select: {
                        role_name: true
                    }
                }
            },
            where: {user_user_id: user.user_id}
        })
        return role;
    }
}