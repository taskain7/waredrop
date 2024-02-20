import {Controller, Get, Res} from "@nestjs/common";
import {LoginService} from "./login.service";
import {Response} from "express";
@Controller('login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Get()
    getLoginScreen(@Res() res: Response){

    }

}
