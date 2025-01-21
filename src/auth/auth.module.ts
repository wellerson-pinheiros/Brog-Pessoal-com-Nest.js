import { forwardRef, Module } from "@nestjs/common";

import { UsuarioModule } from "../usuario/usuario.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/constants";
import { AuthService } from "./services/auth.service";

import { LocalStrategy } from "./strategy/local.strategy";
import { AuthController } from "./controllers/auth.controllers";
import { Bcrypt } from "src/bcrypt/bcrypt";

@Module({
    imports: [
        forwardRef(() => UsuarioModule),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: "1h"},
        })

    ],
    controllers: [AuthController],
    providers: [Bcrypt, AuthService, LocalStrategy],
    exports: [Bcrypt],
})
export class AuthModule {};