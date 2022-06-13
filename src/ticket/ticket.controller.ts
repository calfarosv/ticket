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

} // export class