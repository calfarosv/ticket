import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Css_Rti_Entity } from 'src/ticket/entities/css_rti_entity';
import { ApoyoController } from './apoyo.controller';
import { ApoyoService } from './apoyo.service';
import { Css_Cnt_Entity } from './entities/css_cnt_entity';
import { Css_Uni_Entity } from './entities/css_uni_entity';
import { Pla_Emp_Entity } from './entities/pla_emp_entity';
import { Pla_Uni_Entity } from './entities/pla_uni_entity';
import { Sis_Msi_Entity } from './entities/sis_msi_entity';
import { Sis_Sis_Entity } from './entities/sis_sis_entity';
import { Css_Sdt_Entity } from './entities/css_sdt_entity';
import { Css_Sol_Entity } from './entities/css_sol_entity';

@Module({
  imports: [TypeOrmModule.forFeature([
    Css_Rti_Entity, 
    Pla_Emp_Entity, 
    Pla_Uni_Entity, 
    Css_Uni_Entity, 
    Sis_Sis_Entity, 
    Sis_Msi_Entity,
    Css_Cnt_Entity,
    Css_Sdt_Entity,
    Css_Sol_Entity])],
  controllers: [ApoyoController],
  providers: [ApoyoService],
  exports: [ApoyoService]
})
export class ApoyoModule {}