import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './account.entity';
import { AccountService } from './account.service';
import { AccountController } from './account.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Account]),
  ],
  exports: [AccountService],
  providers: [
    AccountService,
  ],
  controllers: [AccountController]
})
export class AccountModule { }