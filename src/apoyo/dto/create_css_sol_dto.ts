import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class Create_Css_Sol_Dto {
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA COMPANIA', type: String, })
    solCodcia?: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA UNIDAD RECEPTORA', type: Number, })
    solCoduni?: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'AÑO DE LA ORDEN DE TRABAJO', type: Number, })
    solAnio?: number;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CORRELATIVO', type: Number, })
    solCodigo?: number;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DEL SOLICITANTE', type: String, })
    solCodSolicita?: string;    

    @IsDate()
    @IsOptional()
    @ApiProperty({ description: 'FECHA DE LA SOLICITUD', type: Date, })
    solFecha?: Date;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DEL USUARIO SOLICITANTE', type: String, })
    solUsuario?: string;    

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'DETALLE DE LA SOLICITUD', type: String, })
    solDesctraSol?: string;     

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'ESTADO DE LA SOLICITUD (P = PENDIENTE, A = AUTORIZADA, N = ANULADA, F = FINALIZADA, E = ELABORADA, D = ADS)', type: String, })
    solEstado?: string;

    @IsDate()
    @IsOptional()
    @ApiProperty({ description: 'FECHA DE RECEPCION DE LA SOLICITUD', type: Date, })
    solFecauto?: Date;    

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'PORCENTAJE DE AVANCE GLOBAL DE LA SOLICITUD', type: Number, })
    solPorcentaje?: number;    

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'OBSERVACIONES', type: String, })
    solObservaciones?: string; 

    @IsDate()
    @IsOptional()
    @ApiProperty({ description: 'FECHA DE MODIFICACION DEL REGISTRO', type: Date, })
    solFecMod?: Date; 

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'USUARIO QUE MODIFICA EL REGISTRO', type: String, })
    solUsuarioMod?: string; 

    @IsDate()
    @IsOptional()
    @ApiProperty({ description: 'FECHA DE CREACION DEL REGISTRO', type: Date, })
    solFecCrea?: Date; 

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'USUARIO QUE CREA EL REGISTRO', type: String, })
    solUsuarioCrea?: string; 

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'NOMBRE DE LA PERSONA PARA QUIEN SE SOLICITA EL SERVICIO, EN CASO QUE NO SE ENCUENTRE DENTRO DEL MAESTRO DE PERSONAL', type: String, })
    solNombre?: string; 

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'ALMACENA EL CODIGO DEL EMPLEADO AUTORIZADOR DE LA SOLICITUD', type: String, })
    solAutoriza?: string; 

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE SERVICIO', type: Number, })
    solCodser?: number;     

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE LA UNIDAD DE SERVICIO', type: Number, })
    solCoduniResp?: number;   
    
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE SOLICITUD DEL SISTEMA SISSIN', type: Number, })
    solCodsol?: number;   

    @IsDate()
    @IsOptional()
    @ApiProperty({ description: 'CODIGO DE SOLICITUD DEL SISTEMA SISSIN', type: Date, })
    solFecfin?: Date;     
    
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'TIEMPO DE ATENCIÓN DE LA SOLICITUD.  (S: SOBREPASÓ , N: NO CUMPLIÓ, C: CUMPLIÓ)', type: String, })
    solEvaTiempo?: string;      

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'SATISFACCIÓN DEL SERVICIO.  (S: SOBREPASÓ , N: NO CUMPLIÓ, C: CUMPLIÓ)', type: String, })
    solEvaSatisf?: string; 

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'DESCRIPCION DE SATISFACCION', type: String, })
    solDesSatisf?: string;     

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'IDENTIFICAR SI LA SOLICITUD FUE EMITIDA DESDE LA INTRANET O POR MEDIO DEL SISTEMA DEVELOPER (I: INTRANET, S: SISTEMA)', type: String, })
    solOrigen?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'EVALUACIÓN DE LA CALIDAD DE LA ATENCIÓN BRINDADA. (S: SOBREPASÓ , N: NO CUMPLIÓ, C: CUMPLIÓ)', type: String, })
    solEvaCalidad?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'PRIORIDAD A FORMULARIO DE SOLICITUDES DE SERVICIO INFORMÁTICO EN LA INTRANET', type: String, })
    solPrioridad?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'SE DEFINE SI ES UNA SOLICITUD NORMAL O DE EMERGENCIA', type: String, })
    solCategoria?: string;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'SE DESCRIBEN LOS COMENTARIOS DE LA EVALUACIÓN', type: String, })
    solComenteva?: string;

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'LLEVAR CONTROL DE SOLICITUDES POR DEPENDENCIA ANUAL', type: Number, })
    solCoruni?: number;

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'RUTA DONDE SE GUARDA EL ARCHIVO ANEXO A LA SOLICITUD', type: String, })
    solRutaAnexos?: string;   
    
    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'PRIORIDAD QUE DEFINE EL USUARIO A LAS SOLICITUDES DE SU DEPENDENCIA', type: Number, })
    solPrioUsuario?: number;    

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'SOL_COMENTADS', type: String, })
    solComentads?: string;   

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'COMENTARIOS DEL ÁREA DE DESARROLLO DE SISTEMAS CUANDO LA SOLICITUD NO HA SIDO ASIGNADA 5 DÍAS HÁBILES POSTERIOR A LA AUTORIZACIÓN', type: String, })
    solComentada?: string;     

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'USUARIO QUE FIRMA LA SOLICITUD PARA SU FINALIZACIÓN', type: String, })
    solFinaliza?: string;  

    @IsDate()
    @IsOptional()
    @ApiProperty({ description: 'USUARIO QUE FIRMA LA SOLICITUD PARA SU FINALIZACIÓN', type: Date, })
    solFecanu?: Date; 

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'CÓDIGO DE CLASIFICACIÓN DE SOLICITUDES', type: String, })
    solResperado?: string; 

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'SOL_CODCSO', type: Number, })
    solCodcso?: number;     

    @IsDate()
    @IsOptional()
    @ApiProperty({ description: 'FECHA DE APROBACIÓN DE LA SOLICITUD POR PARTE DEL USUARIO/SISTEMA', type: Date, })
    solFaprueba?: Date; 

    @IsDate()
    @IsOptional()
    @ApiProperty({ description: 'FECHA EN QUE SE INFORMA AL USUARIO QUE LA SOLICITUD HA SIDO FINALIZADA', type: Date, })
    solFecinf?: Date; 
    
    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'USUARIO QUE AUTORIZA LA SOLICITUD', type: String, })
    solAutorizacion?: string;     

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'OBSERVACIONES DESCRITAS POR EL USUARIO', type: String, })
    solObsUsuario?: string;  
    
    @IsDate()
    @IsOptional()
    @ApiProperty({ description: 'FECHA DE REGISTRO DE LA OBSERVACIÓN DEL USUARIO', type: Date, })
    solFobservacion?: Date; 

    @IsString()
    @IsOptional()
    @ApiProperty({ description: 'OBSERVACIÓN GENERADA POR EL USUARIO AL MOMENTO DE QUE EL ANALISTA FINALIZA LAS ORDENES', type: String, })
    solObservCierre?: string;    

    @IsDate()
    @IsOptional()
    @ApiProperty({ description: 'FECHA Y HORA EN LA QUE SE GENERA LA OBSERVACIÓN DE CIERRE', type: Date, })
    solFecObserCierre?: Date;     

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'MES INCLUIDO EN INDICADOR', type: Number, })
    solMenind?: number;  

    @IsNumber()
    @IsOptional()
    @ApiProperty({ description: 'ANIO INCLUIDO EN INDICADOR', type: Number, })
    solAnioind?: number;      
}
