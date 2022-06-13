import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Css_Rti_Entity } from './entities/css_rti_entity';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { Pla_Emp_Entity } from './entities/pla_emp_entity';
import { Pla_Uni_Entity } from './entities/pla_uni_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Css_Rti_Entity, Pla_Emp_Entity, Pla_Uni_Entity])],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService]

})
export class TicketModule { }