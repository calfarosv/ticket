import { Injectable } from '@nestjs/common';
import { ApiHeader } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Css_Rti_Entity } from './entities/css_rti_entity';

@Injectable()
export class TicketService {

    constructor(
        @InjectRepository(Css_Rti_Entity) private ticketRepository: Repository<Css_Rti_Entity>,
    ) { }

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
    async obtiene_Tickets_byPk(v_codcia: string, v_codigo:number): Promise<Css_Rti_Entity> {
        const register = await this.ticketRepository.findOne(
            {
                rtiCodcia: v_codcia,
                rtiCodigo: v_codigo
            }
        );
        return register;
    }

}