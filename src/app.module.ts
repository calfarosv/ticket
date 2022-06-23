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
import { Css_Uni_Entity } from './apoyo/entities/css_uni_entity';
import { Sis_Sis_Entity } from './apoyo/entities/sis_sis_entity';
import { Sis_Msi_Entity } from './apoyo/entities/sis_msi_entity';
import { Css_Ret_Entity } from './ticket/entities/css_ret_entity';
import { Css_Sol_Entity } from './apoyo/entities/css_sol_entity';
import { Css_Sdt_Entity } from './apoyo/entities/css_sdt_entity';
import { Css_Cnt_Entity } from './apoyo/entities/css_cnt_entity';


@Module({
  imports: [AuthModule, UsersModule, TicketModule, ApoyoModule,
    TypeOrmModule.forRoot({
      type: 'oracle',
      connectString: '192.168.1.9:1521/OBELIX',
      port: 1521,
      username: 'WSISCSS',
      password: '4pl1c4c10n3sw3b',
      database: 'desa',
      schema: '',
      entities: [    
        Css_Rti_Entity, 
        Css_Ret_Entity,
        Pla_Emp_Entity, 
        Pla_Uni_Entity, 
        Css_Uni_Entity, 
        Sis_Sis_Entity, 
        Sis_Msi_Entity,
        Css_Cnt_Entity,
        Css_Sdt_Entity,
        Css_Sol_Entity],
      logging: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }
