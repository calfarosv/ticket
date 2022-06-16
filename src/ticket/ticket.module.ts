import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Css_Uni_Entity } from 'src/apoyo/entities/css_uni_entity';
import { Pla_Uni_Entity } from 'src/apoyo/entities/pla_uni_entity';
import { Sis_Msi_Entity } from 'src/apoyo/entities/sis_msi_entity';
import { Sis_Sis_Entity } from 'src/apoyo/entities/sis_sis_entity';
import { Css_Ret_Entity } from './entities/css_ret_entity';
import { Css_Rti_Entity } from './entities/css_rti_entity';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';

@Module({
  imports: [TypeOrmModule.forFeature([Css_Rti_Entity, Css_Ret_Entity, Css_Uni_Entity, Sis_Sis_Entity, Sis_Msi_Entity, Pla_Uni_Entity])],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService]
})
export class TicketModule { }