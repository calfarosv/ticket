import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Css_Rti_Entity } from './entities/css_rti_entity';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { Empleados } from '../entities/empleado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
<<<<<<< HEAD
  imports: [TypeOrmModule.forFeature([Css_Rti_Entity])],
=======
  imports: [
    TypeOrmModule.forFeature([
      Empleados,
     ])],
>>>>>>> d17b091c94df737a3bcc496bda7ec62502d81cea
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService]

})
export class TicketModule { }