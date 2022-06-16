import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Create_Css_Ret_Dto } from './dto/create_css_ret_dto';
import { Create_Css_Rti_Dto } from './dto/create_css_rti_dto';
import { Edit_Css_Ret_Dto } from './dto/edit_css_ret_dto';
import { Edit_Css_Rti_Dto } from './dto/edit_css_rti_dto';
import { Css_Ret_Entity } from './entities/css_ret_entity';
import { Css_Rti_Entity } from './entities/css_rti_entity';
import { TicketService } from './ticket.service';

@ApiTags('Tickets')
@Controller('tickets')
export class TicketController {

    constructor(private ticketService: TicketService) { }

    //@UseGuards(JwtAuthGuard)

    //*************************************************************************** */
    //********** TICKET */
    //*************************************************************************** */

    @Get('')
    @ApiOperation({ summary: 'Lista de todos los Tickets' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Lista de todos los Tickets',
        type: [Css_Rti_Entity],
    })
    async obtieneTodos_Ticket() {
        const data = await this.ticketService.buscaTodosTickets();
        return data;
    }

    @Get('/by_pk/:rtiCodcia/:rtiCodigo/')
    @ApiOperation({ summary: 'Consulta de Tickets por llave primaria' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por llave primaria',
        type: [Css_Rti_Entity],
    })
    async obtieneTickets_byPk(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCodigo') v_rti_codigo: number
    ) {
        {
            const data = await this.ticketService.obtiene_Tickets_byPk(v_rti_codcia, v_rti_codigo);
            if (!data) {
                return []
            }
            else {
                return data;
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_coduniresp/:rtiCodcia/:rtiCoduniResp/')
    @ApiOperation({ summary: 'Consulta todos los Tickets por Código de la Unidad Responsable'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta todos los Tickets por Código de la Unidad Responsable',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_coduniResp(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '01';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_prioridad/:rtiCodcia/:rtiPrioridad/')
    @ApiOperation({ summary: 'Consulta de Tickets por prioridad'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por prioridad',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_prioridad(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiPrioridad') v_rti_prioridad: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '02';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        //let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_prioridad/:rtiCodcia/:rtiCoduniResp/:rtiPrioridad/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y prioridad'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y prioridad',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_prioridad(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiPrioridad') v_rti_prioridad: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '03';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        //let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_codemp/:rtiCodcia/:rtiCodemp/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que solicita'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que solicita',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_codemp(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCodemp') v_rti_codemp: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '04';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        //let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_codemp/:rtiCodcia/:rtiCoduniResp/:rtiCodemp/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que solicita'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que solicita',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_codemp(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiCodemp') v_rti_codemp: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '05';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        //let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_codsis/:rtiCodcia/:rtiCodsis/')
    @ApiOperation({ summary: 'Consulta de Tickets por Sistema'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Sistema',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_sistema(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCodsis') v_rti_codsis: number,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '06';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        //let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_codsis/:rtiCodcia/:rtiCoduniResp/:rtiCodsis/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Sistema'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Sistema',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_sistema(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiCodsis') v_rti_codsis: number,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '07';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        //let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_sismod/:rtiCodcia/:rtiCodsis/:rtiCodmsi/')
    @ApiOperation({ summary: 'Consulta de Tickets por Sistema y Módulo'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Sistema y Módulo',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_sistema_modulo(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCodsis') v_rti_codsis: number,
        @Param('rtiCodmsi') v_rti_codmsi: number,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '08';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        //let v_rti_codsis: number = null;
        //let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_sismod/:rtiCodcia/:rtiCoduniResp/:rtiCodsis/:rtiCodmsi/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Sistema y Módulo'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Sistema y Módulo',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_sistema_modulo(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiCodsis') v_rti_codsis: number,
        @Param('rtiCodmsi') v_rti_codmsi: number,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '09';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        //let v_rti_codsis: number = null;
        //let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_estado/:rtiCodcia/:rtiEstado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Estado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Estado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_estado(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiEstado') v_rti_estado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '10';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        //let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_estado/:rtiCodcia/:rtiCoduniResp/:rtiEstado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Estado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Estado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_estado(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiEstado') v_rti_estado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '11';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        //let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_aniosol/:rtiCodcia/:rtiAnisol/:rtiCodsol/')
    @ApiOperation({ summary: 'Consulta de Tickets por Estado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Estado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_solicitud(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiAnisol') v_rti_anisol: number,
        @Param('rtiCodsol') v_rti_codsol: number,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '12';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        //let v_rti_anisol: number = null;
        ///let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_aniosol/:rtiCodcia/:rtiCoduniResp/:rtiAnisol/:rtiCodsol/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Año/Solicitud'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Año/Solicitud',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_solicitud(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiAnisol') v_rti_anisol: number,
        @Param('rtiCodsol') v_rti_codsol: number,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '13';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        //let v_rti_anisol: number = null;
        ///let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_fecelaborado/:rtiCodcia/:/rtiFecElaborado')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de Elaborado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de Elaborado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecela(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiFecElaborado') v_rti_fec_elaborado: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '14';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        //let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_fecelaborado/:rtiCodcia/:rtiCoduniResp/:rtiFecElaborado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de Elaborado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de Elaborado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecela(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiFecElaborado') v_rti_fec_elaborado: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '15';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        //let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_fecenviado/:rtiCodcia/:rtiFecEnviado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de Enviado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de Enviado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecenv(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiFecEnviado') v_rti_fec_enviado: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '16';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        //let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_fecenviado/:rtiCodcia/:rtiCoduniResp/:rtiFecEnviado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de Enviado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de Enviado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecenv(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiFecEnviado') v_rti_fec_enviado: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '17';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        //let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_fecaprobado/:rtiCodcia/:rtiFecAprobado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de Enviado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de Enviado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecapr(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiFecAprobado') v_rti_fec_aprobado: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '18';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        //let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_fecaprobado/:rtiCodcia/:rtiCoduniResp/:rtiFecAprobado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de Enviado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de Enviado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecapr(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiFecAprobado') v_rti_fec_aprobado: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '19';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        //let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_fecdevuelto/:rtiCodcia/:rtiFecDevuelto/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de devuelto'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de devuelto',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecdev(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiFecDevuelto') v_rti_fec_devuelto: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '20';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        //let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_fecdevuelto/:rtiCodcia/:rtiCoduniResp/:rtiFecDevuelto/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de devuelto'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de devuelto',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecdev(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiFecDevuelto') v_rti_fec_devuelto: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '21';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        //let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_fecrechazado/:rtiCodcia/:rtiFecRechazado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de rechazado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de rechazado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecrec(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiFecRechazado') v_rti_fec_rechazado: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '22';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        //let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_fecrechazado/:rtiCodcia/:rtiCoduniResp/:rtiFecRechazado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de rechazado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de rechazado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecrec(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiFecRechazado') v_rti_fec_rechazado: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '23';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        //let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_fecfinalizado/:rtiCodcia/:rtiFecFinalizado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de finalizado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de finalizado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecfin(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiFecFinalizado') v_rti_fec_finalizado: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '24';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        //let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_fecfinalizado/:rtiCodcia/:rtiCoduniResp/:rtiFecFinalizado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de finalizado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de finalizado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecfin(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiFecFinalizado') v_rti_fec_finalizado: Date,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '25';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        //let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_empelaborado/:rtiCodcia/:rtiEmpElaborado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Elabora'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Elabora',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_empela(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiEmpElaborado') v_rti_emp_elaborado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '26';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        //let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_empelaborado/:rtiCodcia/:rtiCoduniResp/:rtiEmpElaborado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Elabora'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Elabora',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_empela(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiEmpElaborado') v_rti_emp_elaborado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '27';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        //let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_empenviado/:rtiCodcia/:rtiEmpEnviado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Envia'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Envia',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_empenv(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiEmpEnviado') v_rti_emp_enviado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '28';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        //let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_empenviado/:rtiCodcia/:rtiCoduniResp/:rtiEmpEnviado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que Envia'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que Envia',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_empenv(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiEmpEnviado') v_rti_emp_enviado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '29';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        //let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_empaprobado/:rtiCodcia/:rtiEmpAprobado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Aprueba'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Aprueba',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_empapr(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiEmpAprobado') v_rti_emp_aprobado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '30';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        //let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_empaprobado/:rtiCodcia/:rtiCoduniResp/:rtiEmpAprobado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que Aprueba'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que Aprueba',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_empapr(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiEmpAprobado') v_rti_emp_aprobado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '31';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        //let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_empdevuelto/:rtiCodcia/:rtiEmpDevuelto/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Devuelve'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Devuelve',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_empdev(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiEmpDevuelto') v_rti_emp_devuelto: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '32';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        //let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_empdevuelto/:rtiCodcia/:rtiCoduniResp/:rtiEmpDevuelto/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que Devuelve'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que Devuelve',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_empdev(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiEmpDevuelto') v_rti_emp_devuelto: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '33';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        //let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_emprechazado/:rtiCodcia/:rtiEmpRechazado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Rechaza'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Rechaza',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_emprec(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiEmpRechazado') v_rti_emp_rechazado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '34';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        //let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_emprechazado/:rtiCodcia/:rtiCoduniResp/:rtiEmpRechazado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que Rechaza'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que Rechaza',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_emprec(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiEmpRechazado') v_rti_emp_rechazado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '35';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        //let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_empfinalizado/:rtiCodcia/:rtiEmpFinalizado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Finaliza'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Finaliza',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_empfin(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiEmpFinalizado') v_rti_emp_finalizado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '36';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        //let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/by_uni_empfinalizado/:rtiCodcia/:rtiCoduniResp/:rtiEmpFinalizado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que Finaliza'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que Finaliza',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_empfin(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiEmpFinalizado') v_rti_emp_finalizado: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '37';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        //let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------
    @Get('/by_uni_usrred_sn/:rtiCodcia/:rtiCoduniResp/:rtiUsrred/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Usuario de red SI o NO'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Usuario de red SI o NO',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_usrred(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiUsrred') v_rti_usrred: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '38';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        //let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------
    @Get('/by_uni_correo_sn/:rtiCodcia/:rtiCoduniResp/:rtiCorreo/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Correo SI o NO'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Correo SI o NO',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_correo(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiCorreo') v_rti_correo: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '39';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        //let v_rti_correo = '';
        let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------
    @Get('/by_uni_navega_sn/:rtiCodcia/:rtiCoduniResp/:rtiNavega/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Navegación SI o NO'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Navegación SI o NO',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_navega(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiNavega') v_rti_navega: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '40';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        //let v_rti_navega = '';
        let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------
    @Get('/by_uni_sistema_sn/:rtiCodcia/:rtiCoduniResp/:rtiSistema/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Sistema SI o NO'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Sistema SI o NO',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_sistemasn(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCoduniResp') v_rti_coduniresp: number,
        @Param('rtiSistema') v_rti_sistema: string,
    ) {
        //++++++++++++++++++++++++//
        let v_rti_caso = '41';
        //++++++++++++++++++++++++//
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;
        let v_rti_fec_elaborado: Date;
        let v_rti_fec_enviado: Date;
        let v_rti_fec_aprobado: Date;
        let v_rti_fec_devuelto: Date;
        let v_rti_fec_rechazado: Date;
        let v_rti_fec_finalizado: Date;
        let v_rti_emp_elaborado = '';
        let v_rti_emp_enviado = '';
        let v_rti_emp_aprobado = '';
        let v_rti_emp_devuelto = '';
        let v_rti_emp_rechazado = '';
        let v_rti_emp_finalizado = '';
        let v_rti_usrred = '';
        let v_rti_correo = '';
        let v_rti_navega = '';
        //let v_rti_sistema = '';

        const data: any[] = await this.ticketService.busca_ticket_dinamico(
            v_rti_caso,
            v_rti_codcia,
            v_rti_codigo,
            v_rti_prioridad,
            v_rti_coduniresp,
            v_rti_codemp,
            v_rti_codsis,
            v_rti_codmsi,
            v_rti_estado,
            v_rti_anisol,
            v_rti_codsol,
            v_rti_fec_elaborado,
            v_rti_fec_enviado,
            v_rti_fec_aprobado,
            v_rti_fec_devuelto,
            v_rti_fec_rechazado,
            v_rti_fec_finalizado,
            v_rti_emp_elaborado,
            v_rti_emp_enviado,
            v_rti_emp_aprobado,
            v_rti_emp_devuelto,
            v_rti_emp_rechazado,
            v_rti_emp_finalizado,
            v_rti_usrred,
            v_rti_correo,
            v_rti_navega,
            v_rti_sistema);

        if (Array.isArray(data)) {
            return data
        }
        else {
            if (!data) {
                return []
            }
            else {
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------


    //-------------------------------------------------------------------------------------------------------------
    //------------ POST - Crea registro
    //-------------------------------------------------------------------------------------------------------------

    @Post('/insert/')
    @ApiOperation({ summary: 'Crea registro a partir del BODY - IMPORTANTE: Se debe enviar rtiCodcia: "001" y rtiCodigo: 99999, para que inserte un nuevo registro con código CORRELATIVO' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Crea registro a partir del BODY',
        type: [Css_Rti_Entity],
    })
    async creaTicket(@Param() datos: Create_Css_Rti_Dto) {
        const data = await this.ticketService.creaTicket(datos);
        //return { message: 'Registro creado', data };
        return data;
    }

    //-------------------------------------------------------------------------------------------------------------
    //------------ PUT - Actualiza registro
    //-------------------------------------------------------------------------------------------------------------

    @Put('/update/:rtiCodcia/:rtiCodigo/')
    @ApiOperation({ summary: 'Actualiza un registro - IMPORTANTE: Los campos a actualizar deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Actualiza un registro',
        type: [Css_Rti_Entity],
    })
    async modificaTicket(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCodigo') v_rti_codigo: number,
        @Body() dto: Edit_Css_Rti_Dto) {
        //console.log('v_codcia_@Put: ', v_codcia);
        //console.log('v_coduni_@Put: ', v_coduni);
        //console.log('v_codigo_@Put: ', v_codigo);
        //console.log('dto_@Put: ', dto);
        const data = await this.ticketService.modificaTicket(v_rti_codcia, v_rti_codigo, dto);
        //console.log('data_controller: ', register);
        return { message: 'Registro actualizado', data };
    }

    //-------------------------------------------------------------------------------------------------------------
    //------------ DELETE - Borra registro
    //-------------------------------------------------------------------------------------------------------------

    @Delete('/delete/:rtiCodcia/:rtiCodigo/')
    @ApiOperation({ summary: 'Borra un registro - PARÁMETROS LLAVE: rtiCodcia, rtiCodigo' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Crea registro a partir del BODY',
        type: [Css_Rti_Entity],
    })
    async EliminaTicket(
        @Param('rtiCodcia') v_rti_codcia: string,
        @Param('rtiCodigo') v_rti_codigo: number,
    ) {
        const data = await this.ticketService.EliminaTicket(v_rti_codcia, v_rti_codigo);
        return { message: 'Registro eliminado', data };
    }

    //*************************************************************************** */
    //********** RESPUESTAS */
    //*************************************************************************** */

    @Get('/respuestas/')
    @ApiOperation({ summary: 'Lista de todas las Respuestas' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Lista de todas las Respuestas',
        type: [Css_Rti_Entity],
    })
    async obtieneTodas_Respuestas() {
        const data = await this.ticketService.buscaTodasRespuestas();
        return data;
    }

    @Get('/respuestas/by_pk/:retCodcia/:retCoduniResp/:retCodigo/')
    @ApiOperation({ summary: 'Consulta de Respuestas por llave primaria'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Respuestas por llave primaria',
        type: [Css_Rti_Entity],
    })
    async obtieneRespuestas_byPk(
        @Param('retCodcia') v_ret_codcia: string,
        @Param('retCoduniResp') v_ret_coduni_resp: number,
        @Param('retCodigo') v_ret_codigo: number
    ) {
        {
            const data = await this.ticketService.obtiene_Respuestas_byPk(v_ret_codcia, v_ret_coduni_resp, v_ret_codigo);
            if (!data) {
                //SI LOS DATOS VIENEN VACIOS, SE DEVUELVEN CORCHETES
                return []
            }
            else {
                // SI LOS DATOS NO VIENEN VACIOS, ENTONCES ES SOLO 1 REGISTRO
                // POR SER UN REGISTRO CONSULTADO POR LA LLAVE, NO SE DEVUELVE ENTRE CORCHETES
                return data;
            }
            //return data;}
        }

    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/respuestas/by_coduniresp/:retCodcia/:retCoduniResp/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable',
        type: [Css_Rti_Entity],
    })
    async obtiene_respuesta_por_uniresp(
        @Param('retCodcia') v_ret_codcia: string,
        @Param('retCoduniResp') v_ret_coduni_resp: number,
    ) {
        let v_ret_caso = '01';
        //let v_ret_codcia = '001';
        //let v_ret_coduni_resp: number = null;
        let v_ret_codigo: number = null;
        let v_ret_tipo = '';
        let v_ret_estado = '';

        const data: any[] = await this.ticketService.busca_respuesta_dinamico(
            v_ret_caso,
            v_ret_codcia,
            v_ret_coduni_resp,
            v_ret_codigo,
            v_ret_tipo,
            v_ret_estado);
        //console.log('data: ', data);
        // VERIFICO SI LOS DATOS OBTENIDOS SON VARIOS REGISTROS, SOLO UNO O NINGUNO
        // PRIMERO SE DEFINE SI LOS DATOS SON UN ARREGLO O NO
        if (Array.isArray(data)) {
            //console.log('Es un arreglo');
            //SI ES UN ARREGLO, SE DEVUELVE CADA REGISTRO COMO JASON (LOS CORCHETES SON AUTOMATICOS POR SER ARREGLO)
            return data
        }
        else {
            //console.log('NO es un arreglo');
            //SI NO ES UN ARREGLO, VERIFICO SI LOS DATOS VIENEN VACIOS O NO
            if (!data) {
                //SI LOS DATOS VIENEN VACIOS, SE DEVUELVEN CORCHETES
                return []
            }
            else {
                // SI LOS DATOS NO VIENEN VACIOS, ENTONCES ES SOLO 1 REGISTRO
                // SE DEVUELVE ENTRE CORCHETES
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/respuestas/by_tipo/:retCodcia/:retCoduniResp/:retTipo/')
    @ApiOperation({ summary: 'Consulta de Tickets por Tipo'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Tipo',
        type: [Css_Rti_Entity],
    })
    async obtiene_respuesta_por_tiporesp(
        @Param('retCodcia') v_ret_codcia: string,
        @Param('retCoduniResp') v_ret_coduni_resp: number,
        @Param('retTipo') v_ret_tipo: string,
    ) {
        let v_ret_caso = '02';
        //let v_ret_codcia = '001';
        //let v_ret_coduni_resp: number = null;
        let v_ret_codigo: number = null;
        //let v_ret_tipo = '';
        let v_ret_estado = '';

        const data: any[] = await this.ticketService.busca_respuesta_dinamico(
            v_ret_caso,
            v_ret_codcia,
            v_ret_coduni_resp,
            v_ret_codigo,
            v_ret_tipo,
            v_ret_estado);
        //console.log('data: ', data);
        // VERIFICO SI LOS DATOS OBTENIDOS SON VARIOS REGISTROS, SOLO UNO O NINGUNO
        // PRIMERO SE DEFINE SI LOS DATOS SON UN ARREGLO O NO
        if (Array.isArray(data)) {
            //console.log('Es un arreglo');
            //SI ES UN ARREGLO, SE DEVUELVE CADA REGISTRO COMO JASON (LOS CORCHETES SON AUTOMATICOS POR SER ARREGLO)
            return data
        }
        else {
            //console.log('NO es un arreglo');
            //SI NO ES UN ARREGLO, VERIFICO SI LOS DATOS VIENEN VACIOS O NO
            if (!data) {
                //SI LOS DATOS VIENEN VACIOS, SE DEVUELVEN CORCHETES
                return []
            }
            else {
                // SI LOS DATOS NO VIENEN VACIOS, ENTONCES ES SOLO 1 REGISTRO
                // SE DEVUELVE ENTRE CORCHETES
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    @Get('/respuestas/by_estado/:retCodcia/:retCoduniResp/:retEstado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Estado'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Estado',
        type: [Css_Rti_Entity],
    })
    async obtiene_respuesta_por_estadoresp(
        @Param('retCodcia') v_ret_codcia: string,
        @Param('retCoduniResp') v_ret_coduni_resp: number,
        @Param('retEstado') v_ret_estado: string,
    ) {
        let v_ret_caso = '03';
        //let v_ret_codcia = '001';
        //let v_ret_coduni_resp: number = null;
        let v_ret_codigo: number = null;
        let v_ret_tipo = '';
        //let v_ret_estado = '';

        const data: any[] = await this.ticketService.busca_respuesta_dinamico(
            v_ret_caso,
            v_ret_codcia,
            v_ret_coduni_resp,
            v_ret_codigo,
            v_ret_tipo,
            v_ret_estado);
        //console.log('data: ', data);
        // VERIFICO SI LOS DATOS OBTENIDOS SON VARIOS REGISTROS, SOLO UNO O NINGUNO
        // PRIMERO SE DEFINE SI LOS DATOS SON UN ARREGLO O NO
        if (Array.isArray(data)) {
            //console.log('Es un arreglo');
            //SI ES UN ARREGLO, SE DEVUELVE CADA REGISTRO COMO JASON (LOS CORCHETES SON AUTOMATICOS POR SER ARREGLO)
            return data
        }
        else {
            //console.log('NO es un arreglo');
            //SI NO ES UN ARREGLO, VERIFICO SI LOS DATOS VIENEN VACIOS O NO
            if (!data) {
                //SI LOS DATOS VIENEN VACIOS, SE DEVUELVEN CORCHETES
                return []
            }
            else {
                // SI LOS DATOS NO VIENEN VACIOS, ENTONCES ES SOLO 1 REGISTRO
                // SE DEVUELVE ENTRE CORCHETES
                return [data];
            }
        }
    }

    //-------------------------------------------------------------------------------------------------------------

    //-------------------------------------------------------------------------------------------------------------
    //------------ POST - Crea RESPUESTA
    //-------------------------------------------------------------------------------------------------------------

    @Post('/respuestas/insert/')
    @ApiOperation({ summary: 'Crea registro a partir del BODY - LLAVE: retCodcia, retCoduniResp, retCodigo' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Crea registro a partir del BODY',
        type: [Css_Ret_Entity],
    })
    async creaRespuesta(@Param() datos: Create_Css_Ret_Dto) {
        const data = await this.ticketService.creaRespuesta(datos);
        //return { message: 'Registro creado', data };
        return data;
    }

    //-------------------------------------------------------------------------------------------------------------
    //------------ PUT - Actualiza RESPUESTA
    //-------------------------------------------------------------------------------------------------------------

    @Put('/respuestas/update/:retCodcia/:retCoduniResp/:retCodigo/')
    @ApiOperation({ summary: 'Actualiza un registro - IMPORTANTE: Los campos a actualizar deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Actualiza un registro',
        type: [Css_Ret_Entity],
    })
    async modificaRespuesta(
        @Param('retCodcia') v_ret_codcia: string,
        @Param('retCoduniResp') v_ret_coduni_resp: number,
        @Param('retCodigo') v_ret_codigo: number,
        @Body() dto: Edit_Css_Ret_Dto) {
        //console.log('v_codcia_@Put: ', v_codcia);
        //console.log('v_coduni_@Put: ', v_coduni);
        //console.log('v_codigo_@Put: ', v_codigo);
        //console.log('dto_@Put: ', dto);
        const data = await this.ticketService.modificaRespuesta(v_ret_codcia, v_ret_coduni_resp, v_ret_codigo, dto);
        //console.log('data_controller: ', register);
        return { message: 'Registro actualizado', data };
    }

    //-------------------------------------------------------------------------------------------------------------
    //------------ DELETE - Borra RESPUESTA
    //-------------------------------------------------------------------------------------------------------------

    @Delete('/respuestas/delete/:retCodcia/:retCoduniResp/:retCodigo/')
    @ApiOperation({ summary: 'Borra un registro - PARÁMETROS LLAVE: retCodcia, retCoduniResp, retCodigo' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Crea registro a partir del BODY',
        type: [Css_Ret_Entity],
    })
    async EliminaRespuesta(
        @Param('retCodcia') v_ret_codcia: string,
        @Param('retCoduniResp') v_ret_coduni_resp: number,
        @Param('retCodigo') v_ret_codigo: number,
    ) {
        const data = await this.ticketService.EliminaRespuesta(v_ret_codcia, v_ret_coduni_resp, v_ret_codigo);
        return { message: 'Registro eliminado', data };
    }






} // export class