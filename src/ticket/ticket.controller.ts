import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
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

    @Get('/by_pk/:rti_codcia/:rti_codigo')
    @ApiOperation({ summary: 'Consulta de Tickets por llave primaria' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por llave primaria',
        type: [Css_Rti_Entity],
    })
    async obtieneTickets_byPk(
        @Param('rti_codcia') v_codcia: string,
        @Param('rti_codigo') v_codigo: number
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

    @Get('/by_prioridad/:rti_prioridad')
    @ApiOperation({ summary: 'Consulta de Tickets por prioridad' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por prioridad',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_prioridad(
        @Param('rti_prioridad') v_rti_prioridad: string,
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

    @Get('/by_coduniresp/:rti_coduniresp')
    @ApiOperation({ summary: 'Consulta de Tickets por Código de la Unidad Responsable' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Consulta de Tickets por Código de la Unidad Responsable',
        type: [Css_Rti_Entity],
    })
    async obtiene_ticket_por_coduniResp(
        @Param('rti_coduniresp') v_rti_coduniresp: number,
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



} // export class