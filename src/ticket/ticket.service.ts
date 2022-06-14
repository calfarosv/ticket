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
    async obtiene_Tickets_byPk(v_codcia: string, v_codigo: number): Promise<Css_Rti_Entity> {
        const register = await this.ticketRepository.findOne(
            {
                rtiCodcia: v_codcia,
                rtiCodigo: v_codigo
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
        v_rti_feccrea: Date,
        v_rti_fecsol: Date,
        v_rti_fecfin: Date,
        v_rti_anisol: number,
        v_rti_codsol: number) {
        console.log('v_rti_caso: ', v_rti_caso);
        console.log('v_rti_codcia: ', v_rti_codcia);
        console.log('v_rti_codigo: ', v_rti_codigo);
        console.log('v_rti_prioridad: ', v_rti_prioridad);
        console.log('v_rti_coduniresp: ', v_rti_coduniresp);
        console.log('v_rti_codemp: ', v_rti_codemp);
        console.log('v_rti_codsis: ', v_rti_codsis);
        console.log('v_rti_codmsi: ', v_rti_codmsi);
        console.log('v_rti_estado: ', v_rti_estado);
        console.log('v_rti_feccrea: ', v_rti_feccrea);
        console.log('v_rti_fecsol: ', v_rti_fecsol);
        console.log('v_rti_fecfin: ', v_rti_fecfin);
        console.log('v_rti_anisol: ', v_rti_anisol);
        console.log('v_rti_codsol: ', v_rti_codsol);

        let v_where = '';

        if (v_rti_caso = '01') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiPrioridad = :par_rti_prioridad';
            //console.log('1', v_where);
        }
        if (v_rti_caso = '02') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCoduniResp = :par_rti_coduniresp';
            //console.log('1', v_where);
        }
        if (v_rti_caso = '03') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCodemp = :par_rti_codemp';
            //console.log('1', v_where);
        }
        if (v_rti_caso = '04') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCodsis = :par_rti_codsis';
            //console.log('1', v_where);
        }
        /*
        if (v_rti_caso = '05') {
            v_where = 'Css_Rti_Entity.rtiCodcia = :par_rti_codcia and Css_Rti_Entity.rtiCodsis = :par_rti_codsis and Css_Rti_Entity.rtiCodmsi = :par_rti_codmsi';
            //console.log('1', v_where);
        }
*/

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
            .addSelect('Css_Rti_Entity.rtiFeccrea', 'rtiFeccrea')
            .addSelect('Css_Rti_Entity.rtiFecanula', 'rtiFecanula')
            .addSelect('Css_Rti_Entity.rtiFecsol', 'rtiFecsol')
            .addSelect('Css_Rti_Entity.rtiFecfin', 'rtiFecfin')
            .addSelect('Css_Rti_Entity.rtiAnisol', 'rtiAnisol')
            .addSelect('Css_Rti_Entity.rtiCoduni', 'rtiCoduni')
            .addSelect('Css_Rti_Entity.rtiCodsol', 'rtiCodsol')
            //
            //.addSelect('Pla_Uni_Unidad_Entity.uniNombre', 'uniNombre_sol')
            //.addSelect('Pla_Uni_Unidad_Entity_b.uniNombre', 'uniNombre_eje')
            //.addSelect('Pri_Emp_Empleado_V_Entity.empNombre', 'empNombre_res')
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
                    par_rti_feccrea: v_rti_feccrea,
                    par_rti_fecsol: v_rti_fecsol,
                    par_rti_fecfin: v_rti_fecfin,
                    par_rti_anisol: v_rti_anisol,
                    par_rti_codsol: v_rti_codsol
                })
            //.leftJoin(Pri_Emp_Empleado_V_Entity, 'Pri_Emp_Empleado_V_Entity', 'Pri_Fic_Ficha_Entity.ficCodcelRes = Pri_Emp_Empleado_V_Entity.empCodcel')
            //.leftJoin(Pla_Uni_Unidad_Entity, 'Pla_Uni_Unidad_Entity', 'Pri_Fic_Ficha_Entity.ficCoduniSol = Pla_Uni_Unidad_Entity.uniCodigo')
            //.leftJoin(Pla_Uni_Unidad_Entity, 'Pla_Uni_Unidad_Entity_b', 'Pri_Fic_Ficha_Entity.ficCoduniEje = Pla_Uni_Unidad_Entity_b.uniCodigo')
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


} // export class