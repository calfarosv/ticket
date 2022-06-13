import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Empleados } from 'src/entities/empleado.entity';
import { TicketService } from './ticket.service';

@Controller('ticket')
export class TicketController {
constructor(private ticketService: TicketService){}

//@UseGuards(JwtAuthGuard)
@Get('/empleados/')
@ApiOperation({ summary: 'Lista de Usuarios que podrán validar solicitudes de transporte tanto de la Salida como en la Entrada a la Comisión'})
@ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de Usuarios que podrán validar solicitudes de transporte tanto de la Salida como en la Entrada a la Comisión',
    type: [Empleados],
    })     
    async buscaTodosUsuarios() {
    const data = await this.ticketService.buscaTodosEmpleados();
    return data;
} 

}
