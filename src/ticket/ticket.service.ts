import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Css_Uni_Entity } from 'src/apoyo/entities/css_uni_entity';
import { Pla_Emp_Entity } from 'src/apoyo/entities/pla_emp_entity';
import { Sis_Msi_Entity } from 'src/apoyo/entities/sis_msi_entity';
import { Sis_Sis_Entity } from 'src/apoyo/entities/sis_sis_entity';
import { Repository } from 'typeorm';
import { Create_Css_Ret_Dto } from './dto/create_css_ret_dto';
import { Create_Css_Rti_Dto } from './dto/create_css_rti_dto';
import { Edit_Css_Ret_Dto } from './dto/edit_css_ret_dto';
import { Edit_Css_Rti_Dto } from './dto/edit_css_rti_dto';
import { Css_Ret_Entity } from './entities/css_ret_entity';
import { Css_Rti_Entity } from './entities/css_rti_entity';

@Injectable()
export class TicketService {

    constructor(
        @InjectRepository(Css_Rti_Entity) private ticketRepository: Repository<Css_Rti_Entity>,
        @InjectRepository(Css_Ret_Entity) private respuestasRepository: Repository<Css_Ret_Entity>,

    ) { }

    //*************************************************************************** */
    //********** TICKET */
    //*************************************************************************** */

    @ApiHeader({
        name: 'Servicio: busca Todos los Tickets',
        description: 'Maestro de Tickets',
    })
    async buscaTodosTickets(): Promise<Css_Rti_Entity[]> {
        const register = await this.ticketRepository.find({
            //where :"UPPER(EMP_ESTADO) IN ('A','V')",
            order: {
                rtiCodigo: 'ASC',
            },
        });
        return register;
    }


    @ApiHeader({
        name: 'Servicio: busca Ticket por la llave primaria',
        description: 'Maestro de Tickets',
    })
    async obtiene_Tickets_byPk(v_rti_codcia: string, v_rti_codigo: number): Promise<Css_Rti_Entity> {
        const register = await this.ticketRepository.findOne(
            {
                rtiCodcia: v_rti_codcia,
                rtiCodigo: v_rti_codigo
            }
        );
        return register;
    }


    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: Busqueda dinamica de Tickets',
        description: 'Maestro de Tickets',
    })
    async busca_ticket_dinamico(
        v_rti_caso: string,
        v_rti_codcia: string,
        v_rti_codigo: number,
        v_rti_prioridad: string,
        v_rti_coduniresp: number,
        v_rti_codemp: string,
        v_rti_codsis: number,
        v_rti_codmsi: number,
        v_rti_estado: string,
        v_rti_anisol: number,
        v_rti_codsol: number,
        v_rti_fec_elaborado: Date,
        v_rti_fec_enviado: Date,
        v_rti_fec_aprobado: Date,
        v_rti_fec_devuelto: Date,
        v_rti_fec_rechazado: Date,
        v_rti_fec_finalizado: Date,
        v_rti_emp_elaborado: string,
        v_rti_emp_enviado: string,
        v_rti_emp_aprobado: string,
        v_rti_emp_devuelto: string,
        v_rti_emp_rechazado: string,
        v_rti_emp_finalizado: string,
        v_rti_usrred: string,
        v_rti_correo: string,
        v_rti_navega: string,
        v_rti_sistema: string) {
        console.log('v_rti_caso: ', v_rti_caso);
        console.log('v_rti_codcia: ', v_rti_codcia);
        console.log('v_rti_codigo: ', v_rti_codigo);
        console.log('v_rti_prioridad: ', v_rti_prioridad);
        console.log('v_rti_coduniresp: ', v_rti_coduniresp);
        console.log('v_rti_codemp: ', v_rti_codemp);
        console.log('v_rti_codsis: ', v_rti_codsis);
        console.log('v_rti_codmsi: ', v_rti_codmsi);
        console.log('v_rti_estado: ', v_rti_estado);
        console.log('v_rti_anisol: ', v_rti_anisol);
        console.log('v_rti_codsol: ', v_rti_codsol);
        console.log('v_rti_fec_elaborado: ', v_rti_fec_elaborado);
        console.log('v_rti_fec_enviado: ', v_rti_fec_enviado);
        console.log('v_rti_fec_aprobado: ', v_rti_fec_aprobado);
        console.log('v_rti_fec_devuelto: ', v_rti_fec_devuelto);
        console.log('v_rti_fec_rechazado: ', v_rti_fec_rechazado);
        console.log('v_rti_fec_finalizado: ', v_rti_fec_finalizado);
        console.log('v_rti_emp_elaborado: ', v_rti_emp_elaborado);
        console.log('v_rti_emp_enviado: ', v_rti_emp_enviado);
        console.log('v_rti_emp_aprobado: ', v_rti_emp_aprobado);
        console.log('v_rti_emp_devuelto: ', v_rti_emp_devuelto);
        console.log('v_rti_emp_rechazado: ', v_rti_emp_rechazado);
        console.log('v_rti_emp_finalizado: ', v_rti_emp_finalizado);
        console.log('v_rti_usrred: ', v_rti_usrred);
        console.log('v_rti_correo: ', v_rti_correo);
        console.log('v_rti_navega: ', v_rti_navega);
        console.log('v_rti_sistema: ', v_rti_sistema);

        let v_fecha_sol: Date;
        let v_where = '';

        if (v_rti_caso == '01') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp';
        }
        if (v_rti_caso == '02') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiPrioridad = :par_rti_prioridad';
        }
        if (v_rti_caso == '03') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiPrioridad = :par_rti_prioridad';
        }
        if (v_rti_caso == '04') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCodemp = :par_rti_codemp';
        }
        if (v_rti_caso == '05') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiCodemp = :par_rti_codemp';
        }
        if (v_rti_caso == '06') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCodsis = :par_rti_codsis';
        }
        if (v_rti_caso == '07') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiCodsis = :par_rti_codsis';
        }
        if (v_rti_caso == '08') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCodsis = :par_rti_codsis and Css_Rti_Entity.rtiCodmsi = :par_rti_codmsi';
        }
        if (v_rti_caso == '09') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiCodsis = :par_rti_codsis and Css_Rti_Entity.rtiCodmsi = :par_rti_codmsi';
        }
        if (v_rti_caso == '10') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiEstado = :par_rti_estado';
        }
        if (v_rti_caso == '11') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiEstado = :par_rti_estado';
        }
        if (v_rti_caso == '12') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiAnisol = :par_rti_anisol and Css_Rti_Entity.rtiCodsol = :par_rti_codsol';
        }
        if (v_rti_caso == '13') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiAnisol = :par_rti_anisol and Css_Rti_Entity.rtiCodsol = :par_rti_codsol';
        }
        /*
        console.log('v_rti_fecsol: ', v_rti_fecsol);
        v_fecha_sol = (new Date(v_rti_fecsol.getUTCFullYear(), v_rti_fecsol.getUTCMonth(), v_rti_fecsol.getUTCDate(), 0, 0, 0));
        console.log('v_fecha_sol: ', v_fecha_sol);
        */

        if (v_rti_caso == '14') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiFecElaborado = :par_rti_fec_elaborado';
        }
        if (v_rti_caso == '15') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiFecElaborado = :par_rti_fec_elaborado';
        }
        if (v_rti_caso == '16') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiFecEnviado = :par_rti_fec_enviado';
        }
        if (v_rti_caso == '17') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiFecEnviado = :par_rti_fec_enviado';
        }
        if (v_rti_caso == '18') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiFecAprobado = :par_rti_fec_aprobado';
        }
        if (v_rti_caso == '19') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiFecAprobado = :par_rti_fec_aprobado';
        }
        if (v_rti_caso == '20') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiFecDevuelto = :par_rti_fec_devuelto';
        }
        if (v_rti_caso == '21') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiFecDevuelto = :par_rti_fec_devuelto';
        }
        if (v_rti_caso == '22') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiFecRechazado = :par_rti_fec_rechazado';
        }
        if (v_rti_caso == '23') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiFecRechazado = :par_rti_fec_rechazado';
        }
        if (v_rti_caso == '24') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiFecFinalizado = :par_rti_fec_finalizado';
        }
        if (v_rti_caso == '25') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiFecFinalizado = :par_rti_fec_finalizado';
        }
        if (v_rti_caso == '26') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiEmpElaborado = :par_rti_emp_elaborado';
        }
        if (v_rti_caso == '27') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiEmpElaborado = :par_rti_emp_elaborado';
        }
        if (v_rti_caso == '28') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiEmpEnviado = :par_rti_emp_enviado';
        }
        if (v_rti_caso == '29') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiEmpEnviado = :par_rti_emp_enviado';
        }
        if (v_rti_caso == '30') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiEmpAprobado = :par_rti_emp_aprobado';
        }
        if (v_rti_caso == '31') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiEmpAprobado = :par_rti_emp_aprobado';
        }
        if (v_rti_caso == '32') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiEmpDevuelto = :par_rti_emp_devuelto';
        }
        if (v_rti_caso == '33') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiEmpDevuelto = :par_rti_emp_devuelto';
        }
        if (v_rti_caso == '34') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiEmpRechazado = :par_rti_emp_rechazado';
        }
        if (v_rti_caso == '35') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiEmpRechazado = :par_rti_emp_rechazado';
        }
        if (v_rti_caso == '36') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiEmpFinalizado = :par_rti_emp_finalizado';
        }
        if (v_rti_caso == '37') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiEmpFinalizado = :par_rti_emp_finalizado';
        }
        if (v_rti_caso == '38') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiUsrred = :par_rti_usrred';
        }
        if (v_rti_caso == '39') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiCorreo = :par_rti_correo';
        }
        if (v_rti_caso == '40') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiNavega = :par_rti_navega';
        }
        if (v_rti_caso == '41') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp and Css_Rti_Entity.rtiSistema = :par_rti_sistema';
        }
        console.log('v_rti_caso: ', v_rti_caso);
        console.log('v_where: ', v_where);

        const register = await this.ticketRepository.createQueryBuilder()
            .select('Css_Rti_Entity.rtiCodcia', 'rtiCodcia')
            .addSelect('Css_Rti_Entity.rtiCodigo', 'rtiCodigo')
            .addSelect('Css_Rti_Entity.rtiDescripcion', 'rtiDescripcion')
            .addSelect('Css_Rti_Entity.rtiResultado', 'rtiResultado')
            .addSelect('Css_Rti_Entity.rtiPrioridad', 'rtiPrioridad')
            .addSelect('Css_Rti_Entity.rtiCoduniResp', 'rtiCoduniResp')
            .addSelect('Css_Rti_Entity.rtiCodemp', 'rtiCodemp')
            .addSelect('Css_Rti_Entity.rtiUsrred', 'rtiUsrred')
            .addSelect('Css_Rti_Entity.rtiCorreo', 'rtiCorreo')
            .addSelect('Css_Rti_Entity.rtiNavega', 'rtiNavega')
            .addSelect('Css_Rti_Entity.rtiSistema', 'rtiSistema')
            .addSelect('Css_Rti_Entity.rtiCodsis', 'rtiCodsis')
            .addSelect('Css_Rti_Entity.rtiCodmsi', 'rtiCodmsi')
            .addSelect('Css_Rti_Entity.rtiEstado', 'rtiEstado')
            .addSelect('Css_Rti_Entity.rtiAnisol', 'rtiAnisol')
            .addSelect('Css_Rti_Entity.rtiCoduni', 'rtiCoduni')
            .addSelect('Css_Rti_Entity.rtiCodsol', 'rtiCodsol')
            .addSelect('Css_Rti_Entity.rtiCodret', 'rtiCodret')
            //
            .addSelect('Pla_Emp_Entity.empNombreCip', 'empNombreCip')
            .addSelect('Pla_Emp_Entity.empEstado', 'empEstado')
            .addSelect('Pla_Emp_Entity.empCorreo', 'empCorreo')
            .addSelect('Pla_Emp_Entity.empPlzNombre', 'empPlzNombre')
            .addSelect('Pla_Emp_Entity.empUniNombre', 'empUniNombre')
            .addSelect('Pla_Emp_Entity.empCodenti', 'empCodenti')
            //
            .addSelect('Sis_Sis_Entity.sisNombre', 'sisNombre')
            .addSelect('Sis_Msi_Entity.msiNombre', 'msiNombre')
            //
            .where(v_where,
                {
                    par_rti_codcia: v_rti_codcia,
                    par_rti_codigo: v_rti_codigo,
                    par_rti_prioridad: v_rti_prioridad,
                    par_rti_coduniresp: v_rti_coduniresp,
                    par_rti_codemp: v_rti_codemp,
                    par_rti_codsis: v_rti_codsis,
                    par_rti_codmsi: v_rti_codmsi,
                    par_rti_estado: v_rti_estado,
                    par_rti_anisol: v_rti_anisol,
                    par_rti_codsol: v_rti_codsol,
                    par_rti_fec_elaborado: v_rti_fec_elaborado,
                    par_rti_fec_enviado: v_rti_fec_enviado,
                    par_rti_fec_aprobado: v_rti_fec_aprobado,
                    par_rti_fec_devuelto: v_rti_fec_devuelto,
                    par_rti_fec_rechazado: v_rti_fec_rechazado,
                    par_rti_fec_finalizado: v_rti_fec_finalizado,
                    par_rti_emp_elaborado: v_rti_emp_elaborado,
                    par_rti_emp_enviado: v_rti_emp_enviado,
                    par_rti_emp_aprobado: v_rti_emp_aprobado,
                    par_rti_emp_devuelto: v_rti_emp_devuelto,
                    par_rti_emp_rechazado: v_rti_emp_rechazado,
                    par_rti_emp_finalizado: v_rti_emp_finalizado,
                    par_rti_usrred: v_rti_usrred,
                    par_rti_correo: v_rti_correo,
                    par_rti_navega: v_rti_navega,
                    par_rti_sistema: v_rti_sistema
                })
            .leftJoin(Pla_Emp_Entity, 'Pla_Emp_Entity', 'Css_Rti_Entity.rtiCodcia = Pla_Emp_Entity.empCodcia and Css_Rti_Entity.rtiCodemp = Pla_Emp_Entity.empCodcel')
            .leftJoin(Sis_Sis_Entity, 'Sis_Sis_Entity', 'Css_Rti_Entity.rtiCodcia = Sis_Sis_Entity.sisCodcia and Css_Rti_Entity.rtiCodsis = Sis_Sis_Entity.sisCodigo')
            .leftJoin(Sis_Msi_Entity, 'Sis_Msi_Entity', 'Css_Rti_Entity.rtiCodcia = Sis_Msi_Entity.msiCodcia and Css_Rti_Entity.rtiCodsis = Sis_Msi_Entity.msiCodsis and Css_Rti_Entity.rtiCodmsi = Sis_Msi_Entity.msiCodigo')
            .orderBy('Css_Rti_Entity.rtiCodigo', 'ASC')
            .getRawMany();
        //console.log('register: ', register);            
        /*
        if (!register || register.length === 0) {
            throw new HttpException('No se encontraron datos - (busca_fichas_dinamica)', HttpStatus.FORBIDDEN);
        }
        else
            return register;
        */
        return register;
    }

    //-------------------------------------------------------------------------------------------------------------



    //-------------------------------------------------------------------------------------------------------------
    //------------ CREA TICKET
    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: Crea un registro',
        description: 'Crea un registro',
    })
    async creaTicket(@Body() dto: Create_Css_Rti_Dto)//: Promise<Pri_Fic_Ficha_Entity> 
    {
        // CREACIÓN DE NUEVO CODIGO
        //if ((dto.ficCodigo == 99999 && dto.ficVersion == 1) || (dto.ficCodigo == 99999 && dto.ficVersion == 99999))
        console.log(dto.rtiCodigo);
        if (dto.rtiCodigo == 99999) {
            // Obtengo el código máximo
            const register = await this.ticketRepository
                .createQueryBuilder()
                .select('MAX(Css_Rti_Entity.rtiCodigo)', 'rtiCodigo')
                .getRawOne();
            // Sumo 1 al código obtenido
            dto.rtiCodigo = register.rtiCodigo + 1
            // La versión siempre será 1 para un nuevo Código
            //dto.ficVersion = 1
            // Guardo el registro
            const model = this.ticketRepository.create(dto);
            const newRegister = await this.ticketRepository.save(model);
            //return newRegister;
            return { message: 'Registro creado', newRegister };
        }
        // CREACIÓN DE NUEVA VERSIÓN
        else {
            throw new HttpException('Error al crear Ticket - (creaTicket)', HttpStatus.FORBIDDEN);
        }
    }

    //-------------------------------------------------------------------------------------------------------------
    //------------ ACTUALIZA TICKET
    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: Modifica un registro',
        description: 'Modifica un registro',
    })
    async modificaTicket(v_rti_codcia: string, v_rti_codigo: number, dto: Edit_Css_Rti_Dto): Promise<Css_Rti_Entity> {
        const toUpdate = await this.obtiene_Tickets_byPk(v_rti_codcia, v_rti_codigo);
        //console.log('Continua');
        //console.log('toUpdate_editCat: ', toUpdate);        
        if (!toUpdate)
            throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro - (modificaTicket)', HttpStatus.FORBIDDEN);
        const modelToEdit = Object.assign(toUpdate, dto);
        return await this.ticketRepository.save(modelToEdit);
    }


    //-------------------------------------------------------------------------------------------------------------
    //------------ ELIMINA TICKET
    //-------------------------------------------------------------------------------------------------------------

    async EliminaTicket(v_rti_codcia: string, v_rti_codigo: number) {
        const register = await this.ticketRepository.findOne({
            rtiCodcia: v_rti_codcia,
            rtiCodigo: v_rti_codigo
        });
        if (register) {

            // ELIMINACIÓN DEL REGISTRO DE ENCABEZADO
            const toDelete = this.ticketRepository.create(register);
            this.ticketRepository.remove(toDelete);
        }
        else {
            throw new HttpException('NO SE PUEDE ELIMINAR - No existe el registro - (EliminaTicket)', HttpStatus.FORBIDDEN);
        }
    }

    //*************************************************************************** */
    //********** RESPUESTAS */
    //*************************************************************************** */

    @ApiHeader({
        name: 'Servicio: busca Todas las Respuestas',
        description: 'Maestro de Respuestas',
    })
    async buscaTodasRespuestas(): Promise<Css_Ret_Entity[]> {
        const register = await this.respuestasRepository.find({
            //where :"UPPER(EMP_ESTADO) IN ('A','V')",
            order: {
                retCodcia: 'ASC',
                retCoduniResp: 'ASC',
                retCodigo: 'ASC',
            },
        });
        return register;
    }


    @ApiHeader({
        name: 'Servicio: busca Respuestas por la llave primaria',
        description: 'Maestro de Respuestas',
    })
    async obtiene_Respuestas_byPk(v_ret_codcia: string, v_ret_coduni_resp: number, v_ret_codigo: number): Promise<Css_Ret_Entity> {
        const register = await this.respuestasRepository.findOne(
            {
                retCodcia: v_ret_codcia,
                retCoduniResp: v_ret_coduni_resp,
                retCodigo: v_ret_codigo
            }
        );
        return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: Busqueda dinamica de Respuestas',
        description: 'Maestro de Respuestas',
    })
    async busca_respuesta_dinamico(
        v_ret_caso: string,
        v_ret_codcia: string,
        v_ret_coduni_resp: number,
        v_ret_codigo: number,
        v_ret_tipo: string,
        v_ret_estado: string) {
        console.log('v_ret_caso: ', v_ret_caso);
        console.log('v_ret_codcia: ', v_ret_codcia);
        console.log('v_ret_coduniresp: ', v_ret_coduni_resp);
        console.log('v_ret_codigo: ', v_ret_codigo);
        console.log('v_ret_tipo: ', v_ret_tipo);
        console.log('v_ret_estado: ', v_ret_estado);

        let v_fecha_sol: Date;
        let v_where = '';

        if (v_ret_caso == '01') {
            v_where = 'Css_Ret_Entity.retCodcia = :par_ret_codcia and Css_Ret_Entity.retCoduniResp = :par_ret_coduni_resp';
            //console.log('1', v_where);
        }
        if (v_ret_caso == '02') {
            v_where = 'Css_Ret_Entity.retCodcia = :par_ret_codcia and Css_Ret_Entity.retCoduniResp = :par_ret_coduni_resp and Css_Ret_Entity.retTipo = :par_ret_tipo';
            //console.log('1', v_where);
        }
        if (v_ret_caso == '03') {
            v_where = 'Css_Ret_Entity.retCodcia = :par_ret_codcia and Css_Ret_Entity.retCoduniResp = :par_ret_coduni_resp and Css_Ret_Entity.retEstado = :par_ret_estado';
            //console.log('1', v_where);
        }

        console.log('v_rti_caso: ', v_ret_caso);
        console.log('v_where: ', v_where);

        const register = await this.respuestasRepository.createQueryBuilder()
            .select('Css_Ret_Entity.retCodcia', 'retCodcia')
            .addSelect('Css_Ret_Entity.retCoduniResp', 'retCoduniResp')
            .addSelect('Css_Ret_Entity.retCodigo', 'retCodigo')
            .addSelect('Css_Ret_Entity.retTipo', 'retTipo')
            .addSelect('Css_Ret_Entity.retEstado', 'retEstado')
            .addSelect('Css_Ret_Entity.retDescripcion', 'retDescripcion')
            .addSelect('Css_Uni_Entity.uniNombre', 'uniNombre')
            .where(v_where,
                {
                    par_ret_codcia: v_ret_codcia,
                    par_ret_coduni_resp: v_ret_coduni_resp,
                    par_ret_codigo: v_ret_codigo,
                    par_ret_tipo: v_ret_tipo,
                    par_ret_estado: v_ret_estado

                })
            .leftJoin(Css_Uni_Entity, 'Css_Uni_Entity', 'Css_Ret_Entity.retCodcia = Css_Uni_Entity.uniCodcia and Css_Ret_Entity.retCoduniResp = Css_Uni_Entity.uniCodigo')
            .orderBy('Css_Ret_Entity.retCodigo', 'ASC')
            .getRawMany();
        //console.log('register: ', register);            
        /*
        if (!register || register.length === 0) {
            throw new HttpException('No se encontraron datos - (busca_fichas_dinamica)', HttpStatus.FORBIDDEN);
        }
        else
            return register;
        */
        return register;
    }

    //-------------------------------------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------------------------------------
    //------------ CREA RESPUESTA
    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: Crea un registro',
        description: 'Crea un registro',
    })
    async creaRespuesta(dto: Create_Css_Ret_Dto)//: Promise<Pri_Fic_Ficha_Entity> 
    {
        const register = await this.respuestasRepository.findOne({
            retCodcia: dto.retCodcia,
            retCoduniResp: dto.retCoduniResp,
            retCodigo: dto.retCodigo
        });
        if (register)
            throw new HttpException('NO SE PUEDE CREAR - El registro ya existe - (creaRespuesta)', HttpStatus.FORBIDDEN);
        else {
            const model = this.respuestasRepository.create(dto);
            const newRegister = await this.respuestasRepository.save(model);
            return newRegister;
        }
    }

    //-------------------------------------------------------------------------------------------------------------
    //------------ ACTUALIZA RESPUESTA
    //-------------------------------------------------------------------------------------------------------------

    @ApiHeader({
        name: 'Servicio: Modifica un registro',
        description: 'Modifica un registro',
    })
    async modificaRespuesta(v_ret_codcia: string, v_ret_coduni_resp: number, v_ret_codigo: number, dto: Edit_Css_Ret_Dto): Promise<Css_Ret_Entity> {
        const toUpdate = await this.obtiene_Respuestas_byPk(v_ret_codcia, v_ret_coduni_resp, v_ret_codigo);
        //console.log('Continua');
        //console.log('toUpdate_editCat: ', toUpdate);        
        if (!toUpdate)
            throw new HttpException('NO SE PUEDE ACTUALIZAR - No existe el registro - (modificaRespuesta)', HttpStatus.FORBIDDEN);
        const modelToEdit = Object.assign(toUpdate, dto);
        return await this.respuestasRepository.save(modelToEdit);
    }


    //-------------------------------------------------------------------------------------------------------------
    //------------ ELIMINA RESPUESTA
    //-------------------------------------------------------------------------------------------------------------

    async EliminaRespuesta(v_ret_codcia: string, v_ret_coduni_resp: number, v_ret_codigo: number) {
        const register = await this.respuestasRepository.findOne({
            retCodcia: v_ret_codcia,
            retCoduniResp: v_ret_coduni_resp,
            retCodigo: v_ret_codigo
        });
        if (register) {

            // ELIMINACIÓN DEL REGISTRO DE ENCABEZADO
            const toDelete = this.respuestasRepository.create(register);
            this.respuestasRepository.remove(toDelete);
        }
        else {
            throw new HttpException('NO SE PUEDE ELIMINAR - No existe el registro - (EliminaRespuesta)', HttpStatus.FORBIDDEN);
        }
    }





} // export class