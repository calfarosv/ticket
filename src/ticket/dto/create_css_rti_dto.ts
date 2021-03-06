import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class Create_Css_Rti_Dto {
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE FORMAN LA LLAVE PRIMARIA
    //////////////////////////////////////////////////////////////////////////////////// 
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA COMPANIA', type: String, })
    rtiCodcia?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CÓDIGO CORRELATIVO', type: Number, })
    rtiCodigo?: number;
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE NO FORMAN LA LLAVE PRIMARIA
    ////////////////////////////////////////////////////////////////////////////////////
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'DESCRIPCIÓN DE LO REQUERIDO POR EL USUARIO', type: String, })
    rtiDescripcion?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'RESULTADO DEL TRABAJO REALIZADO', type: String, })
    rtiResultado?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'NIVEL DE PRIORIDAD DEL TICKET GENERADO', type: String, })
    rtiPrioridad?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'DEPENDENCIA RESPONSABLE DEL SEGUIMIENTO', type: Number, })
    rtiCoduniResp?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'EMPLEADO QUE SE BENEFICIA DEL SERVICIO', type: String, })
    rtiCodemp?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'REQUIERE USUARIO DE RED', type: String, })
    rtiUsrred?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'REQUIERE CORREO ELECTRÓNICO', type: String, })
    rtiCorreo?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'REQUIERE NAVEGACIÓN', type: String, })
    rtiNavega?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'REQUIERE ACCESO A SISTEMAS', type: String, })
    rtiSistema?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CÓDIGO DE SISTEMA', type: Number, })
    rtiCodsis?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CÓDIGO DE MÓDULO DEL SISTEMA', type: Number, })
    rtiCodmsi?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'ESTADO DEL TICKET', type: String, })
    rtiEstado?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA ELABORADO', type: Date, })
    @Type(() => Date)
    rtiFecElaborado?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA ENVIADO', type: Date, })
    @Type(() => Date)
    rtiFecEnviado?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA APROBADO', type: Date, })
    @Type(() => Date)
    rtiFecAprobado?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA DEVOLLUCIÓN', type: Date, })
    @Type(() => Date)
    rtiFecDevuelto?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA RECHAZADO', type: Date, })
    @Type(() => Date)
    rtiFecRechazado?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsOptional()
    @IsDate()
    @ApiProperty({ description: 'FECHA FINALIZACIÓN', type: Date, })
    @Type(() => Date)
    rtiFecFinalizado?: Date;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'AÑO DE LA SOLICITUD', type: Number, })
    rtiAnisol?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CÓDIGO DE UNIDAD DE LA SOLICITUD', type: Number, })
    rtiCoduni?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA SOLICITUD', type: Number, })
    rtiCodsol?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CÓDIGO DE LA RESPUESTA', type: Number, })
    rtiCodret?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'EMPLEADO QUE ELABORA TICKET', type: String, })
    rtiEmpElaborado?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'EMPLEADO QUE ENVÍA TICKET A LAS ÁREAS TI', type: String, })
    rtiEmpEnviado?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'EMPLEADO QUE APRUEBA POR PARTE DEL ÁREA DE TI', type: String, })
    rtiEmpAprobado?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'EMPLEADO QUE DEVUELVE AL HELPDESK', type: String, })
    rtiEmpDevuelto?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'EMPLEADO RECHAZA', type: String, })
    rtiEmpRechazado?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'EMPLEADO FINALIZA', type: String, })
    rtiEmpFinalizado?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++                      
}






