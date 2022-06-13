import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Css_Rti_Entity } from './entities/css_rti_entity';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([Css_Rti_Entity])],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService]
})
export class TicketModule { }