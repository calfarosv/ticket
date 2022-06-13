import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApoyoController } from './apoyo.controller';
import { ApoyoService } from './apoyo.service';
import { Pla_Emp_Entity } from './entities/pla_emp_entity';
import { Pla_Uni_Entity } from './entities/pla_uni_entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pla_Emp_Entity, Pla_Uni_Entity])],
  controllers: [ApoyoController],
  providers: [ApoyoService],
  exports: [ApoyoService]
})
export class ApoyoModule {}

