import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Pla_Emp_Entity } from 'src/ticket/entities/pla_emp_entity';
import { Pla_Uni_Entity } from './entities/pla_uni_entity';
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
    type: [Pla_Emp_Entity],
    })     
    async buscaTodosUsuarios() {
    const data = await this.ticketService.buscaTodosEmpleados();
    return data;
} 
//@UseGuards(JwtAuthGuard)
@Get('/unidades/')
@ApiOperation({ summary: 'Lista de Usuarios que podrán validar solicitudes de transporte tanto de la Salida como en la Entrada a la Comisión'})
@ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de Usuarios que podrán validar solicitudes de transporte tanto de la Salida como en la Entrada a la Comisión',
    type: [Pla_Uni_Entity],
    })     
    async buscaUnidades() {
    const data = await this.ticketService.buscaUnidades();
    return data;
} 
}
