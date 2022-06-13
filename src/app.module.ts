/*
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketModule } from './ticket/ticket.module';
import { Empleados } from 'src/entities/empleado.entity';

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
import { AuthModule } from './auth/auth.module';
import { Css_Rti_Entity } from './ticket/entities/css_rti_entity';
import { TicketModule } from './ticket/ticket.module';
import { UsersModule } from './users/users.module';
import { Pla_Emp_Entity } from './apoyo/entities/pla_emp_entity';
import { Pla_Uni_Entity } from './apoyo/entities/pla_uni_entity';
import { ApoyoModule } from './apoyo/apoyo.module';


@Module({
  imports: [AuthModule,UsersModule,TicketModule,ApoyoModule,
  TypeOrmModule.forRoot({
    type: 'oracle',
    connectString: '192.168.1.9:1521/OBELIX',
    port: 1521,
    username: 'WSISCSS',
    password: '4pl1c4c10n3sw3b',
    database: 'desa',
    schema: '',
    entities: [Css_Rti_Entity, Pla_Emp_Entity, Pla_Uni_Entity],
    logging: true,
  }),
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }
