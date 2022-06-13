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
<<<<<<< HEAD
import { AuthModule } from './auth/auth.module';
import { Css_Rti_Entity } from './ticket/entities/css_rti_entity';
=======
import { Empleados } from './entities/empleado.entity';
>>>>>>> d17b091c94df737a3bcc496bda7ec62502d81cea
import { TicketModule } from './ticket/ticket.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [AuthModule,UsersModule,TicketModule,
  TypeOrmModule.forRoot({
    type: 'oracle',
    connectString: '192.168.1.9:1521/OBELIX',
    port: 1521,
    username: 'WSISCSS',
    password: '4pl1c4c10n3sw3b',
    database: 'desa',
    schema: '',
<<<<<<< HEAD
    entities: [Css_Rti_Entity],
=======
    logging: true,
    entities: [Empleados],
>>>>>>> d17b091c94df737a3bcc496bda7ec62502d81cea
  }),],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule { }
