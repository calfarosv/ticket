import { Body, Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Css_Rti_Entity } from './entities/css_rti_entity';
import { TicketService } from './ticket.service';

@ApiTags('Tickets')
@Controller('tickets')
export class TicketController {

    constructor(private ticketService: TicketService) { }

    //@UseGuards(JwtAuthGuard)
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
    @ApiOperation({ summary: 'Consulta de Tickets por llave primaria' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por llave primaria',
        type: [Css_Rti_Entity],
    })
    async obtieneTickets_byPk(
        @Body('rtiCodcia') v_codcia: string,
        @Body('rtiCodigo') v_codigo: number
    ) {
        {
            const data = await this.ticketService.obtiene_Tickets_byPk(v_codcia, v_codigo);
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

    @Get('/by_prioridad/')
    @ApiOperation({ summary: 'Consulta de Tickets por prioridad' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por prioridad',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_prioridad(
        @Body('rtiPrioridad') v_rti_prioridad: string,
    ) {
        let v_rti_caso = '01';
        let v_rti_codcia = '001';
        let v_rti_codigo: number = null;
        //let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_feccrea: Date;
        let v_rti_fecsol: Date;
        let v_rti_fecfin: Date;
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;

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
            v_rti_feccrea,
            v_rti_fecsol,
            v_rti_fecfin,
            v_rti_anisol,
            v_rti_codsol);
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

    @Get('/by_coduniresp/')
    @ApiOperation({ summary: 'Consulta de Tickets por Código de la Unidad Responsable' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Código de la Unidad Responsable',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_coduniResp(
        @Body('rtiCoduniResp') v_rti_coduniresp: number,
    ) {
        //
        let v_rti_caso = '02';
        //
        let v_rti_codcia = '001';
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        //let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_feccrea: Date;
        let v_rti_fecsol: Date;
        let v_rti_fecfin: Date;
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;

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
            v_rti_feccrea,
            v_rti_fecsol,
            v_rti_fecfin,
            v_rti_anisol,
            v_rti_codsol);
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

    @Get('/by_codemp/')
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que solicita' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Empleado que solicita',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_codemp(
        @Body('rtiCodemp') v_rti_codemp: string,
    ) {
        //
        let v_rti_caso = '03';
        //
        let v_rti_codcia = '001';
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        //let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_feccrea: Date;
        let v_rti_fecsol: Date;
        let v_rti_fecfin: Date;
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;

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
            v_rti_feccrea,
            v_rti_fecsol,
            v_rti_fecfin,
            v_rti_anisol,
            v_rti_codsol);
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

    @Get('/by_codsis/')
    @ApiOperation({ summary: 'Consulta de Tickets por Sistema' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Sistema',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_sistema(
        @Body('rtiCodsis') v_rti_codsis: number,
    ) {
        //
        let v_rti_caso = '04';
        //
        let v_rti_codcia = '001';
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        //let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_feccrea: Date;
        let v_rti_fecsol: Date;
        let v_rti_fecfin: Date;
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;

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
            v_rti_feccrea,
            v_rti_fecsol,
            v_rti_fecfin,
            v_rti_anisol,
            v_rti_codsol);
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

    @Get('/by_sismod/')
    @ApiOperation({ summary: 'Consulta de Tickets por Sistema y Módulo' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Sistema y Módulo',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_sistema_modulo(
        @Body('rtiCodsis') v_rti_codsis: number,
        @Body('rtiCodmsi') v_rti_codmsi: number,
    ) {
        //
        let v_rti_caso = '05';
        //
        let v_rti_codcia = '001';
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        //let v_rti_codsis: number = null;
        //let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_feccrea: Date;
        let v_rti_fecsol: Date;
        let v_rti_fecfin: Date;
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;

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
            v_rti_feccrea,
            v_rti_fecsol,
            v_rti_fecfin,
            v_rti_anisol,
            v_rti_codsol);
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

    @Get('/by_estado/')
    @ApiOperation({ summary: 'Consulta de Tickets por Estado' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Estado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_estado(
        @Body('rtiEstado') v_rti_estado: string,
    ) {
        //
        let v_rti_caso = '06';
        //
        let v_rti_codcia = '001';
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        //let v_rti_estado = '';
        let v_rti_feccrea: Date;
        let v_rti_fecsol: Date;
        let v_rti_fecfin: Date;
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;

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
            v_rti_feccrea,
            v_rti_fecsol,
            v_rti_fecfin,
            v_rti_anisol,
            v_rti_codsol);
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

    @Get('/by_aniosol/')
    @ApiOperation({ summary: 'Consulta de Tickets por Estado' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Estado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_solicitud(
        @Body('rtiAnisol') v_rti_anisol: number,
        @Body('rtiCodsol') v_rti_codsol: number,
    ) {
        //
        let v_rti_caso = '07';
        //
        let v_rti_codcia = '001';
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_feccrea: Date;
        let v_rti_fecsol: Date;
        let v_rti_fecfin: Date;
        //let v_rti_anisol: number = null;
        ///let v_rti_codsol: number = null;

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
            v_rti_feccrea,
            v_rti_fecsol,
            v_rti_fecfin,
            v_rti_anisol,
            v_rti_codsol);
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

    @Get('/by_estado/:rti_fecsol')
    @ApiOperation({ summary: 'Consulta de Tickets por Estado' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Estado',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecsol(
        @Param('rti_fecsol') v_rti_fecsol: Date,
    ) {
        //
        let v_rti_caso = '08';
        //
        let v_rti_codcia = '001';
        let v_rti_codigo: number = null;
        let v_rti_prioridad = '';
        let v_rti_coduniresp: number = null;
        let v_rti_codemp = '';
        let v_rti_codsis: number = null;
        let v_rti_codmsi: number = null;
        let v_rti_estado = '';
        let v_rti_feccrea: Date;
        //let v_rti_fecsol: Date;
        let v_rti_fecfin: Date;
        let v_rti_anisol: number = null;
        let v_rti_codsol: number = null;

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
            v_rti_feccrea,
            v_rti_fecsol,
            v_rti_fecfin,
            v_rti_anisol,
            v_rti_codsol);
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



} // export class