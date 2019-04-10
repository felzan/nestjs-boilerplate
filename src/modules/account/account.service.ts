import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Account } from './account.entity';

@Injectable()
export class AccountService {

  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
  ) { }

  async getAccounts() {
    return this.accountRepository.find();
  }

  async get(id: number) {
    return this.accountRepository.findOne(id);
  }

  async createAccount(payload: Account) {
    return await this.accountRepository.save(payload)
  }
}
