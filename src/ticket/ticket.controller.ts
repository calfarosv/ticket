import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
import { ApiHeader, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Create_Css_Rti_Dto } from './dto/create_css_rti_dto';
import { Edit_Css_Rti_Dto } from './dto/edit_css_rti_dto';
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
    @ApiOperation({ summary: 'Consulta de Tickets por llave primaria - IMPORTANTE: Los parámetros deben ir en el BODY' })
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
    @ApiOperation({ summary: 'Consulta de Tickets por prioridad - IMPORTANTE: Los parámetros deben ir en el BODY' })
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
    @ApiOperation({ summary: 'Consulta de Tickets por Código de la Unidad Responsable - IMPORTANTE: Los parámetros deben ir en el BODY' })
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
    @ApiOperation({ summary: 'Consulta de Tickets por Empleado que solicita - IMPORTANTE: Los parámetros deben ir en el BODY' })
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
    @ApiOperation({ summary: 'Consulta de Tickets por Sistema - IMPORTANTE: Los parámetros deben ir en el BODY' })
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
    @ApiOperation({ summary: 'Consulta de Tickets por Sistema y Módulo - IMPORTANTE: Los parámetros deben ir en el BODY' })
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
    @ApiOperation({ summary: 'Consulta de Tickets por Estado - IMPORTANTE: Los parámetros deben ir en el BODY' })
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
    @ApiOperation({ summary: 'Consulta de Tickets por Estado - IMPORTANTE: Los parámetros deben ir en el BODY' })
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

    @Get('/by_fecsol/')
    @ApiOperation({ summary: 'Consulta de Tickets por Fecha de la solicitud - IMPORTANTE: Los parámetros deben ir en el BODY' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Fecha de la solicitud',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_fecsol(
        @Body('rtiFecsol') v_rti_fecsol: Date,
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
    @ApiOperation({ summary: 'Actualiza un registro - IMPORTANTE: Tanto los campos de la LLAVE PRIMARIA, así como los campos a actualizar, deben ir en el BODY' })
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
        @ApiOperation({ summary: 'Borra un registro a partir del BODY - IMPORTANTE: Los parámetros deben ir en el BODY' })
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



} // export class