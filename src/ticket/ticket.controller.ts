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

    @Get('/by_pk/')
    @ApiOperation({ summary: 'Consulta de Tickets por llave primaria - PARÁMETROS: rtiCodcia, rtiCodigo - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por llave primaria',
        type: [Css_Rti_Entity],
    })
    async obtieneTickets_byPk(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCodigo') v_rti_codigo: number
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

    @Get('/by_coduniresp/')
    @ApiOperation({ summary: 'Consulta todos los Tickets por Código de la Unidad Responsable - PARÁMETROS: rtiCodcia, rtiCoduniResp - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta todos los Tickets por Código de la Unidad Responsable',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_coduniResp(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
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
            v_rti_emp_finalizado);

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

    @Get('/by_prioridad/')
    @ApiOperation({ summary: 'Consulta de Tickets por prioridad - PARÁMETROS: rtiCodcia, rtiPrioridad - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por prioridad',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_prioridad(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiPrioridad') v_rti_prioridad: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_prioridad/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y prioridad - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiPrioridad - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y prioridad',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_prioridad(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiPrioridad') v_rti_prioridad: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_codemp/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que solicita - PARÁMETROS: rtiCodcia, rtiCodemp - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que solicita',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_codemp(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCodemp') v_rti_codemp: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_codemp/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que solicita - PARÁMETROS: rtiCodcia, v_rti_coduniresp, rtiCodemp - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que solicita',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_codemp(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiCodemp') v_rti_codemp: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_codsis/')
    @ApiOperation({ summary: 'Consulta de Tickets por Sistema - PARÁMETROS: rtiCodcia, rtiCodsis - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Sistema',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_sistema(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCodsis') v_rti_codsis: number,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_codsis/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Sistema - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiCodsis - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Sistema',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_sistema(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiCodsis') v_rti_codsis: number,
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
            v_rti_emp_finalizado);

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

    @Get('/by_sismod/')
    @ApiOperation({ summary: 'Consulta de Tickets por Sistema y Módulo - PARÁMETROS: rtiCodcia, rtiCodsis, rtiCodmsi - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Sistema y Módulo',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_sistema_modulo(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCodsis') v_rti_codsis: number,
        @Body('rtiCodmsi') v_rti_codmsi: number,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_sismod/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Sistema y Módulo - PARÁMETROS: rtiCodcia, v_rti_coduniresp, rtiCodsis, rtiCodmsi - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Sistema y Módulo',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_sistema_modulo(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiCodsis') v_rti_codsis: number,
        @Body('rtiCodmsi') v_rti_codmsi: number,
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
            v_rti_emp_finalizado);

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

    @Get('/by_estado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Estado - PARÁMETROS: rtiCodcia, rtiEstado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Estado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_estado(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiEstado') v_rti_estado: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_estado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Estado - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiEstado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Estado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_estado(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiEstado') v_rti_estado: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_aniosol/')
    @ApiOperation({ summary: 'Consulta de Tickets por Estado - PARÁMETROS: rtiCodcia, rtiAnisol, rtiCodsol - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Estado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_solicitud(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiAnisol') v_rti_anisol: number,
        @Body('rtiCodsol') v_rti_codsol: number,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_aniosol/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Año/Solicitud - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiAnisol, rtiCodsol - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Año/Solicitud',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_solicitud(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiAnisol') v_rti_anisol: number,
        @Body('rtiCodsol') v_rti_codsol: number,
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
            v_rti_emp_finalizado);

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

    @Get('/by_fecelaborado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de Elaborado - PARÁMETROS: rtiCodcia, rtiFecElaborado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de Elaborado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecela(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiFecElaborado') v_rti_fec_elaborado: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_fecelaborado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de Elaborado - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiFecElaborado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de Elaborado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecela(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiFecElaborado') v_rti_fec_elaborado: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_fecenviado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de Enviado - PARÁMETROS: rtiCodcia, rtiFecEnviado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de Enviado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecenv(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiFecEnviado') v_rti_fec_enviado: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_fecenviado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de Enviado - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiFecEnviado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de Enviado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecenv(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiFecEnviado') v_rti_fec_enviado: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_fecaprobado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de Enviado - PARÁMETROS: rtiCodcia, rtiFecAprobado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de Enviado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecapr(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiFecAprobado') v_rti_fec_aprobado: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_fecaprobado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de Enviado - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiFecAprobado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de Enviado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecapr(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiFecAprobado') v_rti_fec_aprobado: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_fecdevuelto/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de devuelto - PARÁMETROS: rtiCodcia, rtiFecDevuelto - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de devuelto',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecdev(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiFecDevuelto') v_rti_fec_devuelto: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_fecdevuelto/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de devuelto - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiFecDevuelto - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de devuelto',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecdev(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiFecDevuelto') v_rti_fec_devuelto: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_fecrechazado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de rechazado - PARÁMETROS: rtiCodcia, rtiFecRechazado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de rechazado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecrec(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiFecRechazado') v_rti_fec_rechazado: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_fecrechazado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de rechazado - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiFecRechazado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de rechazado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecrec(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiFecRechazado') v_rti_fec_rechazado: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_fecfinalizado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de finalizado - PARÁMETROS: rtiCodcia, rtiFecFinalizado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de finalizado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecfin(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiFecFinalizado') v_rti_fec_finalizado: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_fecfinalizado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Fecha de finalizado - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiFecFinalizado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Fecha de finalizado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_fecfin(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiFecFinalizado') v_rti_fec_finalizado: Date,
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
            v_rti_emp_finalizado);

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

    @Get('/by_empelaborado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Elabora - PARÁMETROS: rtiCodcia, rtiEmpElaborado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Elabora',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_empela(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiEmpElaborado') v_rti_emp_elaborado: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_empelaborado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Elabora - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiEmpElaborado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Elabora',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_empela(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiEmpElaborado') v_rti_emp_elaborado: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_empenviado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Envia - PARÁMETROS: rtiCodcia, rtiEmpEnviado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Envia',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_empenv(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiEmpEnviado') v_rti_emp_enviado: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_empenviado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que Envia - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiEmpEnviado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que Envia',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_empenv(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiEmpEnviado') v_rti_emp_enviado: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_empaprobado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Aprueba - PARÁMETROS: rtiCodcia, rtiEmpAprobado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Aprueba',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_empapr(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiEmpAprobado') v_rti_emp_aprobado: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_empaprobado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que Aprueba - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiEmpAprobado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que Aprueba',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_empapr(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiEmpAprobado') v_rti_emp_aprobado: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_empdevuelto/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Devuelve - PARÁMETROS: rtiCodcia, rtiEmpDevuelto - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Devuelve',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_empdev(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiEmpDevuelto') v_rti_emp_devuelto: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_empdevuelto/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que Devuelve - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiEmpDevuelto - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que Devuelve',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_empdev(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiEmpDevuelto') v_rti_emp_devuelto: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_emprechazado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Rechaza - PARÁMETROS: rtiCodcia, rtiEmpRechazado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Rechaza',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_emprec(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiEmpRechazado') v_rti_emp_rechazado: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_emprechazado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que Rechaza - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiEmpRechazado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que Rechaza',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_emprec(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiEmpRechazado') v_rti_emp_rechazado: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_empfinalizado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que Finaliza - PARÁMETROS: rtiCodcia, rtiEmpFinalizado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que Finaliza',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_empfin(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiEmpFinalizado') v_rti_emp_finalizado: string,
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
            v_rti_emp_finalizado);

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

    @Get('/by_uni_empfinalizado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable y Empleado que Finaliza - PARÁMETROS: rtiCodcia, rtiCoduniResp, rtiEmpFinalizado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable y Empleado que Finaliza',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_uni_empfin(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
        @Body('rtiEmpFinalizado') v_rti_emp_finalizado: string,
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
            v_rti_emp_finalizado);

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
    async creaTicket(@Body() datos: Create_Css_Rti_Dto) {
        const data = await this.ticketService.creaTicket(datos);
        //return { message: 'Registro creado', data };
        return data;
    }

    //-------------------------------------------------------------------------------------------------------------
    //------------ PUT - Actualiza registro
    //-------------------------------------------------------------------------------------------------------------

    @Put('/update/')
    @ApiOperation({ summary: 'Actualiza un registro - PARÁMETROS LLAVE: rtiCodcia, rtiCodigo - IMPORTANTE: Tanto los campos de la LLAVE PRIMARIA, así como los campos a actualizar, deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Actualiza un registro',
        type: [Css_Rti_Entity],
    })
    async modificaTicket(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCodigo') v_rti_codigo: number,
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

    @Delete('/delete/')
    @ApiOperation({ summary: 'Borra un registro a partir del BODY - PARÁMETROS LLAVE: rtiCodcia, rtiCodigo - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Crea registro a partir del BODY',
        type: [Css_Rti_Entity],
    })
    async EliminaTicket(
        @Body('rtiCodcia') v_rti_codcia: string,
        @Body('rtiCodigo') v_rti_codigo: number,
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

    @Get('/respuestas/by_pk/')
    @ApiOperation({ summary: 'Consulta de Respuestas por llave primaria - PARÁMETROS: retCodcia, retCoduniResp, retCodigo - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Respuestas por llave primaria',
        type: [Css_Rti_Entity],
    })
    async obtieneRespuestas_byPk(
        @Body('retCodcia') v_ret_codcia: string,
        @Body('retCoduniResp') v_ret_coduni_resp: number,
        @Body('retCodigo') v_ret_codigo: number
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

    @Get('/respuestas/by_coduniresp/')
    @ApiOperation({ summary: 'Consulta de Tickets por Unidad Responsable - PARÁMETROS: retCodcia, retCoduniResp - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Unidad Responsable',
        type: [Css_Rti_Entity],
    })
    async obtiene_respuesta_por_uniresp(
        @Body('retCodcia') v_ret_codcia: string,
        @Body('retCoduniResp') v_ret_coduni_resp: number,
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

    @Get('/respuestas/by_tipo/')
    @ApiOperation({ summary: 'Consulta de Tickets por Tipo - PARÁMETROS: retCodcia, retCoduniResp, retTipo - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Tipo',
        type: [Css_Rti_Entity],
    })
    async obtiene_respuesta_por_tiporesp(
        @Body('retCodcia') v_ret_codcia: string,
        @Body('retCoduniResp') v_ret_coduni_resp: number,
        @Body('retTipo') v_ret_tipo: string,
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

    @Get('/respuestas/by_estado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Estado - PARÁMETROS: retCodcia, retCoduniResp, retEstado - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Estado',
        type: [Css_Rti_Entity],
    })
    async obtiene_respuesta_por_estadoresp(
        @Body('retCodcia') v_ret_codcia: string,
        @Body('retCoduniResp') v_ret_coduni_resp: number,
        @Body('retEstado') v_ret_estado: string,
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
    async creaRespuesta(@Body() datos: Create_Css_Ret_Dto) {
        const data = await this.ticketService.creaRespuesta(datos);
        //return { message: 'Registro creado', data };
        return data;
    }

    //-------------------------------------------------------------------------------------------------------------
    //------------ PUT - Actualiza RESPUESTA
    //-------------------------------------------------------------------------------------------------------------

    @Put('/respuestas/update/')
    @ApiOperation({ summary: 'Actualiza un registro - PARÁMETROS LLAVE: retCodcia, retCoduniResp, retCodigo - IMPORTANTE: Tanto los campos de la LLAVE PRIMARIA, así como los campos a actualizar, deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Actualiza un registro',
        type: [Css_Ret_Entity],
    })
    async modificaRespuesta(
        @Body('retCodcia') v_ret_codcia: string,
        @Body('retCoduniResp') v_ret_coduni_resp: number,
        @Body('retCodigo') v_ret_codigo: number,
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

    @Delete('/respuestas/delete/')
    @ApiOperation({ summary: 'Borra un registro a partir del BODY - PARÁMETROS LLAVE: retCodcia, retCoduniResp, retCodigo - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Crea registro a partir del BODY',
        type: [Css_Ret_Entity],
    })
    async EliminaRespuesta(
        @Body('retCodcia') v_ret_codcia: string,
        @Body('retCoduniResp') v_ret_coduni_resp: number,
        @Body('retCodigo') v_ret_codigo: number,
    ) {
        const data = await this.ticketService.EliminaRespuesta(v_ret_codcia, v_ret_coduni_resp, v_ret_codigo);
        return { message: 'Registro eliminado', data };
    }






} // export class