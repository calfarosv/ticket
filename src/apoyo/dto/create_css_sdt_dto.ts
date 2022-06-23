import { ApiProperty } from "@nestjs/swagger";
import {IsNumber, IsOptional, IsString } from "class-validator";
export class Create_Css_Sdt_Dto {
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA COMPANIA', type: String, })
    sdtCodcia?: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA UNIDAD RECEPTORA', type: Number, })
    sdtCoduni?: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'AÑO DE LA ORDEN DE TRABAJO', type: Number, })
    sdtAnio?: number;
    
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA SOLICITUD', type: Number, })
    sdtCodsol?: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DEL DETALLE DE LA SOLICITUD', type: Number, })
    sdtCodigo?: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DEL SISTEMA', type: Number, })
    sdtCodsis?: number;
    
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CÓDIGO DEL MÓDULO', type: Number, })
    sdtCodmsi?: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'REGISTRA EL CóDIGO DE FORMULARIO QUE HACE REFERENCIA LA SOLICITUD', type: Number, })
    sdtCodref?: number;

}