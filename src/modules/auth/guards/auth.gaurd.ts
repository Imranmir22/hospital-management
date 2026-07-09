import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AuthGuard {
    constructor(private readonly jwtService: JwtService, private reflector: Reflector) {}

    async canActivate(context: ExecutionContext): Promise<boolean>   {

         const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) return true;

        const request = context.switchToHttp().getRequest();
        const token =  this.validateToken(request);

        if(!token) {
            throw new UnauthorizedException();
        }

        try {
            const payload = await this.jwtService.verifyAsync(token);
            request['user'] = payload;
            request.user = payload;
        } catch(e) {
            throw new UnauthorizedException();
        }
        return true;

    }

    validateToken(request: any): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
        // return this.verifyToken(token);
    }

    verifyToken(token: string): boolean {
        // Implement your token verification logic here
        // For example, you can decode the token and check its validity
        return true; // Return true if the token is valid, otherwise false
     }
}