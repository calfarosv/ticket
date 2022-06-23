import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class Create_Css_Cnt_Dto {
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA COMPANIA', type: String, })
    cntCodcia?: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'AÑO DEL CONTADOR', type: Number, })
    cntAnio?: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE UNIDAD, PUEDEN SER CONTADORES POR CENTRAL O UNIDAD', type: Number, })
    cntCoduni?: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'VALOR PROXIMO A UTILIZAR DEL CONTADOR1', type: Number, })
    cntContador1?: number;
    
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'VALOR PROXIMO A UTILIZAR DEL CONTADOR2', type: Number, })
    cntContador2?: number;

}