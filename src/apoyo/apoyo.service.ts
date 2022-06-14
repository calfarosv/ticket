import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiHeader } from '@nestjs/swagger';
import { Repository } from 'typeorm/repository/Repository';
import { Pla_Emp_Entity } from './entities/pla_emp_entity';
import { Pla_Uni_Entity } from './entities/pla_uni_entity';
import { Css_Uni_Entity } from './entities/css_uni_entity';
import { Sis_Sis_Entity } from './entities/sis_sis_entity';
import { Sis_Msi_Entity } from './entities/sis_msi_entity';


@Injectable()
export class ApoyoService {
    constructor(
        @InjectRepository(Pla_Emp_Entity) private empleadosRepository: Repository<Pla_Emp_Entity>,
        @InjectRepository(Pla_Uni_Entity) private unidadesRepository: Repository<Pla_Uni_Entity>,
        @InjectRepository(Css_Uni_Entity) private unidadesCssRepository: Repository<Css_Uni_Entity>,
        @InjectRepository(Sis_Sis_Entity) private sistemasRepository: Repository<Sis_Sis_Entity>,
        @InjectRepository(Sis_Msi_Entity) private modulosRepository: Repository<Sis_Msi_Entity>,
        //private readonly mailerService: MailerService,
    ){}

@ApiHeader({
    name: 'Servicio: buscaTodos los Empleados',
    description: 'Maestro de empleados',
  })
  async buscaTodosEmpleados(): Promise<Pla_Emp_Entity[]> {
    const register = await this.empleadosRepository.find({
        where :"UPPER(EMP_ESTADO) IN ('A','V','O')",
        order: {
        empCodcel: 'ASC',
      },
    });
    return register;
  }

  //Busca por la llave
  //Con findOne recuperas un registro entre llaves
  //Con find puedes recuperar un conjunto de regitros anteponiendo [] en la entity
  @ApiHeader({
    name: 'Datos del Empleado',
    description: 'Datos del Empleado',
    })
    async buscaEmpCodigo(v_emp: string): Promise<Pla_Emp_Entity> {
    const register = await this.empleadosRepository.findOne(
        {empCodcel: v_emp}
    );
    return register;
  }  


  @ApiHeader({
    name: 'Servicio: buscaTodos los Empleados',
    description: 'Maestro de empleados',
  })
  async buscaUnidades(): Promise<Pla_Uni_Entity[]> {
    const register = await this.unidadesRepository.find({
        order: {
        uniCodigo: 'ASC',
      },
    });
    return register;
  }

  //Busca por la llave
  @ApiHeader({
    name: 'Servicio: busca_are_llave(v_eno :number, v_nol: number, v_arl: number, v_uni: number): Promise<Gsi_Are_Entity>',
    description: 'Busca registro a partir de parametros enviados en el URL',
    })
    async buscaUnidad(v_uni: number): Promise<Pla_Uni_Entity> {
    const register = await this.unidadesRepository.findOne(
        {
            uniCodigo: v_uni
        }
    );
    return register;
  }   

  @ApiHeader({
    name: 'Servicio: Listado de Unidades del SisCSS',
    description: 'Maestro de Dependencias de la UII',
  })
  async buscaUnidadesCss(): Promise<Css_Uni_Entity[]> {
    const register = await this.unidadesCssRepository.find({
        where :"UPPER(UNI_DEPENDENCIA) IN (149)",
        order: {
        uniCodigo: 'ASC',
      },
    });
    return register;
  }  

  @ApiHeader({
    name: 'Servicio: Listado de Unidades del SisCSS',
    description: 'Maestro de Dependencias de la UII',
  })
  async buscaSistemas(): Promise<Sis_Sis_Entity[]> {
    const register = await this.sistemasRepository.find({
        where :"UPPER(SIS_ESTADO) IN ('A')",
        order: {
        sisCodigo: 'ASC',
      },
    });
    return register;
  } 

  @ApiHeader({
    name: 'Servicio: busca_are_llave(v_eno :number, v_nol: number, v_arl: number, v_uni: number): Promise<Gsi_Are_Entity>',
    description: 'Busca registro a partir de parametros enviados en el URL',
    })
    async buscaModulos(v_sis: number): Promise<Sis_Msi_Entity[]> {
    const register = await this.modulosRepository.find({
          where : "MSI_CODSIS = "+ v_sis + " AND MSI_ESTADO IN 'A'" ,
          order: {
            msiCodsis: 'ASC', msiCodigo: 'ASC',
        }
      }
    );
    return register;
  }  

}

