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
import { Css_Sol_Entity } from './entities/css_sol_entity';
import { Css_Sdt_Entity } from './entities/css_sdt_entity';
import { Css_Cnt_Entity } from './entities/css_cnt_entity';
import { Create_Css_Sol_Dto } from './dto/create_css_sol_dto';
import { Create_Css_Sdt_Dto } from './dto/create_css_sdt_dto';
import { Create_Css_Cnt_Dto } from './dto/create_css_cnt_dto';
import {getConnection} from "typeorm";

@Injectable()
export class ApoyoService {

  
    constructor(
        @InjectRepository(Css_Rti_Entity) private regticketsRepository: Repository<Css_Rti_Entity>,
        @InjectRepository(Pla_Emp_Entity) private empleadosRepository: Repository<Pla_Emp_Entity>,
        @InjectRepository(Pla_Uni_Entity) private unidadesRepository: Repository<Pla_Uni_Entity>,
        @InjectRepository(Css_Uni_Entity) private unidadesCssRepository: Repository<Css_Uni_Entity>,
        @InjectRepository(Sis_Sis_Entity) private sistemasRepository: Repository<Sis_Sis_Entity>,
        @InjectRepository(Sis_Msi_Entity) private modulosRepository: Repository<Sis_Msi_Entity>,
        @InjectRepository(Css_Sol_Entity) private solicitudesRepository: Repository<Css_Sol_Entity>,
        @InjectRepository(Css_Sdt_Entity) private detallesolRepository: Repository<Css_Sdt_Entity>,
        @InjectRepository(Css_Cnt_Entity) private contadoresRepository: Repository<Css_Cnt_Entity>,
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
    name: '@Get() - //Esta API es llamada desde correo de Lotus notes con URL <CSS_ICT_INF_CREATICKET_PR>',
    description: 'Actualiza estado de los Tickets por medio de acción en correo CSS_ICT_INF_CREATICKET_PR',
    })   
    async ModificaCssRti(
          v_cia: string, 
          v_cod: number, 
          v_ret: number, 
          v_est: string,
          v_emp: string ,
          dto: Edit_Css_Rti_Dto,
          dto1: Create_Css_Sol_Dto,
          dto2: Create_Css_Sdt_Dto,
          dto3: Create_Css_Cnt_Dto)
          :Promise<Css_Rti_Entity> 
          {
      const toUpdate = await this.regticketsRepository.findOne({
        where : "RTI_CODCIA = "+ v_cia + " AND RTI_CODIGO = " + v_cod,
      })
      if (!toUpdate)
           throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro - (CSS_RTI_ENTITY)', HttpStatus.FORBIDDEN);
        //Definición de infomación previo al UPDATE
        const rti = await this.buscaPorRti(v_cod);
        if (v_est == 'A'){
          if (toUpdate.rtiCodsol == null){
          dto.rtiFecAprobado = new Date(),
          dto.rtiEmpAprobado = v_emp
          dto.rtiEstado = v_est
        } else {
          console.log('---------------------------------------------------------------------------------------------');
          console.log('No es posible APROBARLA nuevamente debido a que ya posee una solicitud de servicio infomático');
          console.log('---------------------------------------------------------------------------------------------');
          throw new HttpException('No es posible APROBARLA nuevamente debido a que ya posee una solicitud de servicio infomático', HttpStatus.FORBIDDEN);
        } 
      }          

        if (v_est == 'R'){
          if (toUpdate.rtiCodsol == null){
          dto.rtiFecRechazado = new Date(),
          dto.rtiEmpRechazado = v_emp
          dto.rtiEstado = v_est
        } else {
          console.log('-----------------------------------------------------------------------------------');
          console.log('No es posible RECHAZARLA debido a que ya posee una solicitud de servicio infomático');
          console.log('-----------------------------------------------------------------------------------');
          throw new HttpException('No es posible RECHAZARLA debido a que ya posee una solicitud de servicio infomático', HttpStatus.FORBIDDEN);
        } 
      }     
        
        if (v_est === 'D'){
           if (toUpdate.rtiCodsol == null){
          dto.rtiFecDevuelto = new Date(),
          dto.rtiEmpDevuelto = v_emp,
          dto.rtiCoduniResp = null
          dto.rtiEstado = v_est
        } else {
          console.log('-----------------------------------------------------------------------------------');
          console.log('No es posible DEVOLVERLA debido a que ya posee una solicitud de servicio infomático');
          console.log('-----------------------------------------------------------------------------------');
          throw new HttpException('No es posible DEVOLVERLA debido a que ya posee una solicitud de servicio infomático', HttpStatus.FORBIDDEN);
        } 
      
      }

       const modelToEdit = Object.assign(toUpdate, dto);
       await this.regticketsRepository.save(modelToEdit); 
       //////////////////////////////////////////////////// 

       
       if (modelToEdit.rtiEstado === 'A' && 
           modelToEdit.rtiCoduniResp === 900 && 
           modelToEdit.rtiCodsis  != null && 
           modelToEdit.rtiCodmsi!= null &&
           modelToEdit.rtiCodcia == '001' && 
           modelToEdit.rtiCodsol == null)
        {
          const v_fecha = new Date();    
          const v_anio = v_fecha.getFullYear();
          const cnt = await this.contadoresRepository
          .createQueryBuilder('cnt')
          .select('MAX(cnt.cntContador2)', 'CntContador2')
          .where("cnt.cntCodcia = :cia",{cia: v_cia})
          .andWhere("cnt.cntCoduni = :uni",{uni: 149})
          .andWhere("cnt.cntAnio   = :ani",{ani: v_anio})
          .getRawOne();   

          dto1 = {solCodcia: '001'}   //Importante inicializar el DTO, sino dá error de Undefined
          dto2 = {sdtCodcia: '001'}   //Importante inicializar el DTO, sino dá error de Undefined
          dto3 = {cntCodcia: '001'}   //Importante inicializar el DTO, sino dá error de Undefined
          dto1 = new Css_Sol_Entity()
          //NO ME FUNCIONÓ JUSTO EL INSERT  
          dto1.solCodcia      = modelToEdit.rtiCodcia;
          dto1.solCoduni      = 149;
          dto1.solAnio        = v_anio;
          dto1.solCodigo      = cnt.CntContador2 + 1;
          dto1.solCodSolicita = modelToEdit.rtiCodemp;
          dto1.solFecha       = v_fecha;
          dto1.solUsuario     = modelToEdit.rtiCodemp;
          dto1.solDesctraSol  = modelToEdit.rtiDescripcion;
          dto1.solEstado      = 'E';
          dto1.solPorcentaje  = 0;
          dto1.solCodser      = 9;
          dto1.solCoduniResp  = modelToEdit.rtiCoduniResp;
          dto1.solOrigen      = 'T';
          dto1.solPrioridad   = modelToEdit.rtiPrioridad;
          console.log(dto1);  
          // const model1 = this.solicitudesRepository.create(dto1);
          // const newRegister1 = await this.solicitudesRepository.save(model1);           

          //INSERT into CSS_SOL_SOLICITUDES  
          await getConnection()
          .createQueryBuilder()
          .insert()
          .into(Css_Sol_Entity)
          .values([
              { solCodcia: modelToEdit.rtiCodcia,
                solCoduni: 149,
                solAnio: v_anio,
                solCodigo: cnt.CntContador2 + 1,
                solCodSolicita: modelToEdit.rtiCodemp,
                solFecha: v_fecha,
                solUsuario: modelToEdit.rtiCodemp,
                solDesctraSol: modelToEdit.rtiDescripcion,
                solEstado: 'E',
                solPorcentaje: 0,
                solCodser: 9,
                solCoduniResp: modelToEdit.rtiCoduniResp,
                solOrigen: 'T',
                solPrioridad: modelToEdit.rtiPrioridad,
                solFecCrea: v_fecha,
                solUsuarioCrea: modelToEdit.rtiEmpElaborado
              }, 
           ])
          .execute();

          dto.rtiAnisol = v_anio;
          dto.rtiCoduni = 149;
          dto.rtiCodsol = dto1.solCodigo;
          const modelToEdit4 = Object.assign(toUpdate, dto);
          await this.regticketsRepository.save(modelToEdit4); 

          if (modelToEdit.rtiCoduniResp == 900){
            //INSERT en CSS_SDT_SOLDETALLE
            dto2.sdtCodcia = modelToEdit.rtiCodcia;
            dto2.sdtCoduni = 149;
            dto2.sdtAnio   = v_anio;
            dto2.sdtCodsol = dto1.solCodigo;
            dto2.sdtCodigo = 1;
            dto2.sdtCodsis = modelToEdit.rtiCodsis;
            dto2.sdtCodmsi = modelToEdit.rtiCodmsi;
            console.log('INSERT Detalle Solicitud No ', cnt.CntContador2 + 1, ' en ',dto2);          
            const model2 = this.detallesolRepository.create(dto2);
            const newRegister2 = await this.detallesolRepository.save(model2); 
          }
          //UPDATE en  CSS_CNT_CONTADORES 
          dto3.cntCodcia    = dto1.solCodcia;
          dto3.cntCoduni    = 149;
          dto3.cntAnio      = v_anio;
          dto3.cntContador2 = dto1.solCodigo;
          console.log('UPDATE Contador No ', cnt.CntContador2 + 1, ' en ',dto3);             
          const modelToEdit3 = Object.assign(toUpdate, dto3);
          await this.contadoresRepository.save(modelToEdit3);             

      }
      
       return modelToEdit;  
  }






  @ApiHeader({
    name: 'Servicio: buscaTodos los Empleados',
    description: 'Maestro de empleados',
  })          
  async buscaPorRti(v_cod :number) {
    const rti = await this.regticketsRepository.findOne({
      where : "RTI_CODIGO = "+ v_cod + " AND RTI_CODSOL IS NOT NULL" 
    });
    return rti;
  }

  @ApiHeader({
    name: 'Notifica sobre Ticket emitida',
    description: 'Notifica sobre Ticket emitida',
    })   
    async notificarCssRti(v_cia: string, v_cod: number ): Promise<any> {
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
           siscss.css_ict_inf_creaticket_pr(:p1, :p2);
         END;`,
        {
          p1:  v_cia.toString(), 
          p2:  v_cod
        });
        await conn.close()
      } catch (err) {
        console.log('Ouch!', err)
        
      }
      console.log('Procedimiento realizado con Éxito') 
      
  }

}

