import { Injectable } from '@nestjs/common';
import { Pla_Emp_Entity } from 'src/ticket/entities/pla_emp_entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiHeader } from '@nestjs/swagger';
import { Repository } from 'typeorm/repository/Repository';
import { Pla_Uni_Entity } from './entities/pla_uni_entity';
@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(Pla_Emp_Entity) private empleadosRepository: Repository<Pla_Emp_Entity>,
        @InjectRepository(Pla_Uni_Entity) private unidadesRepository: Repository<Pla_Uni_Entity>,
    ){}

    @ApiHeader({
        name: 'Servicio: buscaTodos los Empleados',
        description: 'Maestro de empleados',
      })
      async buscaTodosEmpleados(): Promise<Pla_Emp_Entity[]> {
        const register = await this.empleadosRepository.find({
            where :"UPPER(EMP_ESTADO) IN ('A','V')",
            order: {
            empCodcel: 'ASC',
          },
        });
        return register;
      }
      @ApiHeader({
        name: 'Servicio: buscaTodos los Empleados',
        description: 'Maestro de empleados',
      })
      async buscaUnidades(): Promise<Pla_Uni_Entity[]> {
        const register = await this.unidadesRepository.find({
            //where :"UPPER(EMP_ESTADO) IN ('A','V')",
            order: {
            uniCodigo: 'ASC',
          },
        });
        return register;
      }

}
