/* eslint-disable prettier/prettier */
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET_KEY as string,
        });
    }

    validate(payload: any) {
        return { user_id: payload.user_id}
    }
}