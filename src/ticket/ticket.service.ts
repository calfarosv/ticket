import { Injectable } from '@nestjs/common';
import { Empleados } from 'src/entities/empleado.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiHeader } from '@nestjs/swagger';
import { Repository } from 'typeorm/repository/Repository';
@Injectable()
export class TicketService {
    constructor(
        @InjectRepository(Empleados) private empleadosRepository: Repository<Empleados>,
    ){}

    @ApiHeader({
        name: 'Servicio: buscaTodos los Empleados',
        description: 'Maestro de empleados',
      })
      async buscaTodosEmpleados(): Promise<Empleados[]> {
        const register = await this.empleadosRepository.find({
           // where :"UPPER(EMP_ESTADO) IN ("A","V","O")",
            order: {
            codcel: 'ASC',
          },
        });
        return register;
      }

}
