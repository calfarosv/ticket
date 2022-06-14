import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pla_Emp_Entity } from 'src/apoyo/entities/pla_emp_entity';
import { Sis_Msi_Entity } from 'src/apoyo/entities/sis_msi_entity';
import { Sis_Sis_Entity } from 'src/apoyo/entities/sis_sis_entity';
import { Css_Rti_Entity } from './entities/css_rti_entity';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([Css_Rti_Entity, Pla_Emp_Entity, Sis_Sis_Entity, Sis_Msi_Entity])],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService]
})
export class TicketModule { }