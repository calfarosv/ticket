import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";


@Index("CSS_SOL_PK", ["solCodcia","solCoduni","solAnio","solCodigo"], { unique: true })
@Entity("CSS_SOL_SOLICITUDES")
export class Css_Sol_Entity {
    @PrimaryColumn('varchar2',{ name: 'SOL_CODCIA', length: 3 })
    solCodcia: string;
    @PrimaryColumn('number',{ name: 'SOL_CODUNI', precision: 5 })
    solCoduni: number;
    @PrimaryColumn('number',{ name: 'SOL_ANIO', precision: 4 }) 
    solAnio: number;
    @PrimaryColumn('number',{ name: 'SOL_CODIGO', precision: 9 })
    solCodigo: number;
    @Column('varchar2',{ name: 'SOL_COD_SOLICITA', length: 7 })
    solCodSolicita: string;
    @Column('timestamp',{ name: 'SOL_FECHA', nullable: true}) 
    @Type(() => Date)
    solFecha?: Date | null;
    @Column('varchar2',{ name: 'SOL_USUARIO', length: 12 }) 
    solUsuario: string;
    @Column('varchar2',{ name: 'SOL_DESCTRA_SOL', length: 4000 })
    solDesctraSol: string;
    @Column('varchar2',{ name: 'SOL_ESTADO', length: 1 })
    solEstado: string;
    @Column('timestamp',{ name: 'SOL_FECAUTO', nullable: true })
    @Type(() => Date)
    solFecauto?: Date | null;
    @Column('number',{ name: 'SOL_PORCENTAJE', precision: 3 })
    solPorcentaje: number;
    @Column('varchar2',{ name: 'SOL_OBSERVACIONES', length: 4000 })
    solObservaciones: string;
    @Column('timestamp',{ name: 'SOL_FEC_MOD', nullable: true })
    @Type(() => Date)
    solFecMod?: Date | null;
    @Column('varchar2',{ name: 'SOL_USUARIO_MOD', length: 30 })
    solUsuarioMod: string;
    @Column('timestamp',{ name: 'SOL_FEC_CREA', nullable: true})
    @Type(() => Date)
    solFecCrea?: Date | null;
    @Column('varchar2',{ name: 'SOL_USUARIO_CREA', length: 30 })
    solUsuarioCrea: string;
    @Column('varchar2',{ name: 'SOL_NOMBRE', length: 60 })
    solNombre: string;
    @Column('varchar2',{ name: 'SOL_AUTORIZA', length: 7 })
    solAutoriza: string;
    @Column('number',{ name: 'SOL_CODSER', precision: 5 })
    solCodser: number;
    @Column('number',{ name: 'SOL_CODUNI_RESP', precision: 5 })
    solCoduniResp: number;
    @Column('number',{ name: 'SOL_CODSOL', precision: 6 })
    solCodsol: number;
    @Column('timestamp',{ name: 'SOL_FECFIN', nullable: true})
    @Type(() => Date)
    solFecfin?: Date | null;
    @Column('varchar2',{ name: 'SOL_EVA_TIEMPO', length: 1 }) 
    solEvaTiempo:string;
    @Column('varchar2',{ name: 'SOL_EVA_SATISF', length: 1 })
    sol_evaSatisf: string;
    @Column('varchar2',{ name: 'SOL_DES_SATISF', length: 3000 })
    solDesSatisf: string;
    @Column('varchar2',{ name: 'SOL_ORIGEN', length: 1 })
    solOrigen: string;
    @Column('varchar2',{ name: 'SOL_EVA_CALIDAD', length: 1 })
    solEvaCalidad: string;
    @Column('varchar2',{ name: 'SOL_PRIORIDAD', length: 1 })
    solPrioridad: string;
    @Column('varchar2',{ name: 'SOL_CATEGORIA', length: 1 })
    solCategoria: string;
    @Column('varchar2',{ name: 'SOL_COMENTEVA', length: 500 })
    solComenteva: string;
    @Column('number',{ name: 'SOL_CORUNI', precision: 4 })
    solCoruni: number;
    @Column('varchar2',{ name: 'SOL_RUTA_ANEXOS', length: 1000 }) 
    solRutaAnexos: string;
    @Column('number',{ name: 'SOL_PRIO_USUARIO', precision: 2 })
    solPrioUsuario: number;
    @Column('varchar2',{ name: 'SOL_COMENTADS', length: 500 })
    solComentads:string;
    @Column('varchar2',{ name: 'SOL_COMENTADA', length: 500 })
    solComentada:string;
    @Column('varchar2',{ name: 'SOL_FINALIZA', length: 8 })
    solFinaliza: string;
    @Column('timestamp',{ name: 'SOL_FECANU', nullable: true })
    @Type(() => Date)
    solFecanu?: Date | null;
    @Column('varchar2',{ name: 'SOL_RESPERADO', length: 4000 })
    solResperado:string;
    @Column('number',{ name: 'SOL_CODCSO', precision: 2 })
    solCodso: number;
    @Column('timestamp',{ name: 'SOL_FAPRUEBA' })
    @Type(() => Date)
    solFaprueba?: Date | null;
    @Column('timestamp',{ name: 'SOL_FECINF', nullable: true})
    @Type(() => Date)
    solFeinf?: Date | null;
    @Column('varchar2',{ name: 'SOL_AUTORIZACION', length: 30 }) 
    solAutorizacion:string;
    @Column('varchar2',{ name: 'SOL_OBS_USUARIO', length: 4000 })
    solObsUsuario:string;
    @Column('timestamp',{ name: 'SOL_FOBSERVACION' , nullable: true})
    @Type(() => Date)
    solFobservacion?: Date | null;
    @Column('varchar2',{ name: 'SOL_OBSERV_CIERRE', length: 4000 })
    solObservCierre?: string; 
    @Column('timestamp',{ name: 'SOL_FEC_OBSERV_CIERRE', nullable: true})
    @Type(() => Date)
    solFecObservCierre?: Date | null;
    @Column('number',{ name: 'SOL_MESIND', precision: 2 })
    solMesind?: number;
    @Column('number',{ name: 'SOL_ANIOIND', precision: 4 })
    solAnioind?: number;
} 