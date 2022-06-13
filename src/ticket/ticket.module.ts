import { Module } from '@nestjs/common';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { Empleados } from '../entities/empleado.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Empleados,
     ])],
  controllers: [TicketController],
  providers: [TicketService]
})
export class TicketModule {}
