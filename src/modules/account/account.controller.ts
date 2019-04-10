import { Controller, Post, Body, Get } from '@nestjs/common'
import { Account } from './account.entity'
import { AccountService } from './account.service';

@Controller('accounts')
export class AccountController {
    constructor(private readonly accountService: AccountService) { }

    @Post()
    async createAccount(@Body() payload: Account): Promise<any> {
        return await this.accountService.createAccount(payload);
    }

    @Get()
    async getAccounts(): Promise<any> {
        return await this.accountService.getAccounts()
    }

}