import { Body, Controller, Get, HttpStatus, Param, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Edit_Css_Rti_Dto } from 'src/ticket/dto/edit_css_rti_dto';
import { Css_Rti_Entity } from 'src/ticket/entities/css_rti_entity';
import { ApoyoService } from './apoyo.service';
import { Css_Uni_Entity } from './entities/css_uni_entity';
import { Pla_Emp_Entity } from './entities/pla_emp_entity';
import { Pla_Uni_Entity } from './entities/pla_uni_entity';
import { Sis_Msi_Entity } from './entities/sis_msi_entity';
import { Sis_Sis_Entity } from './entities/sis_sis_entity';

@ApiTags('Apoyo')
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
    @Get('/empleado/:empCodcel')
    @ApiOperation({ summary: 'Recupera datos del Empleado por código' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Recupera datos del Empleado por código',
        type: [Pla_Emp_Entity],
        })     
    async buscaEmpCodigo(
        @Param('empCodcel') v_emp: string, 
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
    @Get('/unidad/:uniCodigo')
    @ApiOperation({ summary: 'Recupera JSON por Unidad' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Recupera JSON por Unidad',
        type: [Pla_Uni_Entity],
        })     
    async buscaUnidad(
        @Param('uniCodigo') v_uni: number, 
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
    @Get('/modulos/:msiCodsis')
    @ApiOperation({ summary: 'Recupera JSON por Unidad' })
    @ApiResponse({
        status: HttpStatus.OK,
        description: 'Recupera JSON por Unidad',
        type: [Sis_Msi_Entity],
        })     
    async buscaModulos(
        @Param('msiCodsis') v_sis: number, 
        )
        {const data = await this.ticketService.buscaModulos(v_sis);
        return data;
    } 

    //@UseGuards(JwtAuthGuard)
    @Put('/updateRti/:cia/:cod/:ret/:est/:emp')
       @ApiOperation({ summary: 'Permite ACTUALIZAR registros en GSI_FAV' })
      @ApiResponse({
          status: HttpStatus.OK,
          description: 'Permite ACTUALIZAR registros en GSI_FAV',
          type: [Css_Rti_Entity],
        })     
      async ModificaCssRti(
          @Param('cia') v_cia: string, 
          @Param('cod') v_cod: number, 
          @Param('ret') v_ret: number, 
          @Param('est') v_est: string,
          @Param('emp') v_emp: string,
          @Param() dto: Edit_Css_Rti_Dto) {
          const data = await this.ticketService.ModificaCssRti(v_cia, v_cod, v_ret, v_est,v_emp, dto);
          return { message: 'Registro actualizado', data };
      }    

    //@UseGuards(JwtAuthGuard)
    @Get('/notifica/:cia/:cod')
       @ApiOperation({ summary: 'Permite ACTUALIZAR registros' })
      @ApiResponse({
          status: HttpStatus.OK,
          description: 'Permite ACTUALIZAR registros',
          type: [Css_Rti_Entity],
        })     
      async notificarCssRti(
          @Param('cia') v_cia: string, 
          @Param('cod') v_cod: number, 
          @Param('emp') v_emp: string,
          @Param() dto: Edit_Css_Rti_Dto) {
          //Ejemplo de bucle for
          var arr = [ '7105011','7309011' ];
          for (var i = 0; i <= arr.length - 1; i++) {
            v_emp = arr[i];
            console.log(arr[i],v_emp.toString());
            const data = await this.ticketService.notificarCssRti(v_cia, v_cod, v_emp);
          }
          return { message: 'Correo enviado desde el Controller' };            
      }        
}
