import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { TagModule } from './tag/tag.module';
import { UserModule } from './user/user.module';
import ormconfig from './ormconfig';

@Module({
    imports: [TypeOrmModule.forRoot(ormconfig), TagModule, UserModule],
})
export class AppModule {}
