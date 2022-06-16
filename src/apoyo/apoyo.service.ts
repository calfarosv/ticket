import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiHeader } from '@nestjs/swagger';
import { Repository } from 'typeorm/repository/Repository';
import { Pla_Emp_Entity } from './entities/pla_emp_entity';
import { Pla_Uni_Entity } from './entities/pla_uni_entity';
import { Css_Uni_Entity } from './entities/css_uni_entity';
import { Sis_Sis_Entity } from './entities/sis_sis_entity';
import { Sis_Msi_Entity } from './entities/sis_msi_entity';
import { Edit_Css_Rti_Dto } from 'src/ticket/dto/edit_css_rti_dto';
import { Css_Rti_Entity } from 'src/ticket/entities/css_rti_entity';


@Injectable()
export class ApoyoService {

  
    constructor(
        @InjectRepository(Css_Rti_Entity) private regticketsRepository: Repository<Css_Rti_Entity>,
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

  @ApiHeader({
    name: '@Put()',
    description: 'Actualiza evaluaciones',
    })   
    async ModificaCssRti(v_cia: string, v_cod: number, v_ret: number, v_est: string,v_emp: string ,dto: Edit_Css_Rti_Dto): Promise<Css_Rti_Entity> {
      const toUpdate = await this.regticketsRepository.findOne({
        where : "RTI_CODCIA = "+ v_cia + " AND RTI_CODIGO = " + v_cod,
      })
      if (!toUpdate)
           throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro - (CSS_RTI_ENTITY)', HttpStatus.FORBIDDEN);
        
        //Definición de infomación previo al UPDATE
        dto.rtiEstado = v_est
        if (v_est == 'A'){
          dto.rtiFecAprobado = new Date(),
          dto.rtiEmpAprobado = v_emp
        }           
        if (v_est == 'R'){
          dto.rtiFecRechazado = new Date(),
          dto.rtiEmpRechazado = v_emp
        }           
        if (v_est == 'D'){
          dto.rtiFecDevuelto = new Date(),
          dto.rtiEmpDevuelto = v_emp,
          dto.rtiCoduniResp = null
        } 

       const modelToEdit = Object.assign(toUpdate, dto);
       await this.regticketsRepository.save(modelToEdit); 
       return modelToEdit;  
  }


  @ApiHeader({
    name: 'Notifica sobre Ticket emitida',
    description: 'Notifica sobre Ticket emitida',
    })   
    async notificarCssRti(v_cia: string, v_cod: number, v_emp: string ): Promise<any> {
      const oracledb = require('oracledb')
      const config = {
        user: 'WSISCSS',
        password: '4pl1c4c10n3sw3b',
        connectString: '192.168.1.9:1521/OBELIX'
      }
      try {      
         const conn = await oracledb.getConnection(config)


         const result = await conn.execute (
        `BEGIN
           siscss.css_ict_inf_creaticket_pr(:p1, :p2, :p3);
         END;`,
        {
          p1:  v_cia.toString(), 
          p2:  v_cod,
          p3:  v_emp.toString()
        });
  
        await conn.close()
      
      } catch (err) {
        console.log('Ouch!', err)
        
      }
      console.log('Procedimiento realizado con Éxito') 
      
  }

}

