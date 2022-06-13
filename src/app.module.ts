/*
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [TicketModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';

@Module({
  imports: [TicketModule,
  TypeOrmModule.forRoot({
    type: 'oracle',
    connectString: '192.168.1.9:1521/OBELIX',
    port: 1521,
    username: 'WSISCSS',
    password: '4pl1c4c10n3sw3b',
    database: 'desa',
    schema: '',
    entities: [],
  }),],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }
