import { Body, Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ApoyoService } from './apoyo.service';
import { Css_Uni_Entity } from './entities/css_uni_entity';
import { Pla_Emp_Entity } from './entities/pla_emp_entity';
import { Pla_Uni_Entity } from './entities/pla_uni_entity';
import { Sis_Msi_Entity } from './entities/sis_msi_entity';
import { Sis_Sis_Entity } from './entities/sis_sis_entity';

@Controller('apoyo')
export class ApoyoController {
constructor(private ticketService: ApoyoService){}

//@UseGuards(JwtAuthGuard)
@Get('/empleados/')
@ApiOperation({ summary: 'Lista de Unidades'})
@ApiResponse({
    status: HttpStatus.OK,
    description: 'Lista de Unidades',
    type: [Pla_Emp_Entity],
    })     
    async buscaTodosUsuarios() {
    const data = await this.ticketService.buscaTodosEmpleados();
    return data;
} 

    //@UseGuards(JwtAuthGuard)
    @Get('/empleado/')
    @ApiOperation({ summary: 'Recupera datos del Empleado por código' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Recupera datos del Empleado por código',
        type: [Pla_Emp_Entity],
        })     
    async buscaEmpCodigo(
        @Body('empCodcel') v_emp: string, 
        )
            {const data = await this.ticketService.buscaEmpCodigo(v_emp);
        return data;
    }
    //@UseGuards(JwtAuthGuard)
    @Get('/unidades/')
    @ApiOperation({ summary: 'Lista de Unidades'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Lista de Unidades',
        type: [Pla_Uni_Entity],
        })     
        async buscaUnidades() {
        const data = await this.ticketService.buscaUnidades();
        return data;
    } 

    //@UseGuards(JwtAuthGuard)
    @Get('/unidad/')
    @ApiOperation({ summary: 'Recupera JSON por Unidad' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Recupera JSON por Unidad',
        type: [Pla_Uni_Entity],
        })     
    async buscaUnidad(
        @Body('uniCodigo') v_uni: number, 
        )
        {const data = await this.ticketService.buscaUnidad(v_uni);
        return data;
    }

    //@UseGuards(JwtAuthGuard)
    @Get('/unidadesCss/')
    @ApiOperation({ summary: 'Listado de Dependencias de la UII'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Listado de Dependencias de la UII',
        type: [Css_Uni_Entity],
        })     
        async buscaUnidadesCss() {
        const data = await this.ticketService.buscaUnidadesCss();
        return data;
    }

    //@UseGuards(JwtAuthGuard)
    @Get('/sistemas/')
    @ApiOperation({ summary: 'Lista de Unidades'})
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Lista de Unidades',
        type: [Sis_Sis_Entity],
        })     
        async buscaSistemas() {
        const data = await this.ticketService.buscaSistemas();
        return data;
    }    

    //@UseGuards(JwtAuthGuard)
    @Get('/modulos/')
    @ApiOperation({ summary: 'Recupera JSON por Unidad' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Recupera JSON por Unidad',
        type: [Sis_Msi_Entity],
        })     
    async buscaModulos(
        @Body('msiCodsis') v_sis: number, 
        )
        {const data = await this.ticketService.buscaModulos(v_sis);
        return data;
    } 
    
}
