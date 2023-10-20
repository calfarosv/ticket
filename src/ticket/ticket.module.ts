import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Css_Uni_Entity } from 'src/apoyo/entities/css_uni_entity';
import { Pla_Emp_Entity } from 'src/apoyo/entities/pla_emp_entity';
import { Pla_Uni_Entity } from 'src/apoyo/entities/pla_uni_entity';
import { Sis_Msi_Entity } from 'src/apoyo/entities/sis_msi_entity';
import { Sis_Sis_Entity } from 'src/apoyo/entities/sis_sis_entity';
import { Css_Ret_Entity } from './entities/css_ret_entity';
import { Css_Rti_Entity } from './entities/css_rti_entity';
import { TicketController } from './ticket.controller';
import { TicketService } from './ticket.service';
import { Sis_Rol_Entity } from 'src/apoyo/gsi_rol_entity';
import { Sis_Usr_Entity } from 'src/apoyo/gsi_usr_entity';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [AuthModule,
    TypeOrmModule.forFeature([
    Css_Rti_Entity, 
    Css_Ret_Entity, 
    Css_Uni_Entity, 
    Sis_Sis_Entity, 
    Sis_Msi_Entity, 
    Pla_Uni_Entity, 
    Pla_Emp_Entity,
    Sis_Rol_Entity,
    Sis_Usr_Entity])],
  controllers: [TicketController],
  providers: [TicketService],
  exports: [TicketService]
})
export class TicketModule { }