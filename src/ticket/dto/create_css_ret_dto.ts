import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class Create_Css_Ret_Dto {
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE FORMAN LA LLAVE PRIMARIA
    //////////////////////////////////////////////////////////////////////////////////// 
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA COMPANIA', type: String, })
    retCodcia?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'DEPENDENCIA RESPONSABLE DEL SEGUIMIENTO', type: Number, })
    retCoduniResp?: number;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CÓDIGO CORRELATIVO', type: Number, })
    retCodigo?: number;
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE NO FORMAN LA LLAVE PRIMARIA
    ////////////////////////////////////////////////////////////////////////////////////
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'TIPO DE RESPUESTA', type: String, })
    retTipo?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'ESTADO DE RESPUESTA', type: String, })
    retEstado?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'DESCRIPCIÓN DE LA RESPUESTA', type: String, })
    retDescripcion?: string;
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

}