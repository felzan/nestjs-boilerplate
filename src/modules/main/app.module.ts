import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './../config/config.module';
import { AccountModule } from 'modules/account/account.module';
import { LoggerMiddleware } from 'logger.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    ConfigModule,
    AccountModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('*')
  }
 }
