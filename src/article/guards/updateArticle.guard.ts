import {
    CanActivate,
    ExecutionContext,
    HttpException,
    HttpStatus,
    Injectable,
} from '@nestjs/common';

import { ExpressRequest } from 'src/types/expressRequest.interface';

@Injectable()
export class UpdateArticleGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest<ExpressRequest>();

        if (
            Object.keys(request.body.article).length !== 0 &&
            !Object.values(request.body.article).includes('')
        ) {
            return true;
        }

        throw new HttpException('fields are empty', HttpStatus.BAD_REQUEST);
    }
}
