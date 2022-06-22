import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";


@Index("CSS_SOL_PK", ["solCodcia","solCoduni","solAnio","solCodigo"], { unique: true })
@Entity("CSS_SOL_SOLICITUDES")
export class Css_Sol_Entity {
    @PrimaryColumn('varchar2',{ name: 'SOL_CODCIA', length: 3 })
    @PrimaryColumn('number',{ name: 'SOL_CODUNI', precision: 5 })
    @PrimaryColumn('number',{ name: 'SOL_ANIO', precision: 4 }) 
    @PrimaryColumn('number',{ name: 'SOL_CODIGO', precision: 9 })
    @Column('number',{ name: 'SOL_COD_SOLICITA', precision: 9 })
    @Column('timestamp',{ name: 'SOL_FECHA', nullable: true}) 
    @Column('varchar2',{ name: 'SOL_USUARIO', length: 12 }) 
    @Column('varchar2',{ name: 'SOL_DESCTRA_SOL', length: 4000 })
    @Column('varchar2',{ name: 'SOL_ESTADO', length: 1 })
    @Column('timestamp',{ name: 'SOL_FECAUTO', nullable: true })
    @Column('number',{ name: 'SOL_PORCENTAJE', precision: 3 })
    @Column('varchar2',{ name: 'SOL_OBSERVACIONES', length: 4000 })
    @Column('timestamp',{ name: 'SOL_FEC_MOD', nullable: true })
    @Column('varchar2',{ name: 'SOL_USUARIO_MOD', length: 30 })
    @Column('timestamp',{ name: 'SOL_FEC_CREA', nullable: true})
    @Column('varchar2',{ name: 'SOL_USUARIO_CREA', length: 30 })
    @Column('varchar2',{ name: 'SOL_NOMBRE', length: 60 })
    @Column('varchar2',{ name: 'SOL_AUTORIZA', length: 7 })
    @Column('number',{ name: 'SOL_CODSER', precision: 5 })
    @Column('number',{ name: 'SOL_CODUNI_RESP', precision: 5 })
    @Column('number',{ name: 'SOL_CODSOL', precision: 6 })
    @Column('timestamp',{ name: 'SOL_FECFIN', nullable: true})
    @Column('varchar2',{ name: 'SOL_EVA_TIEMPO', length: 1 }) 
    @Column('varchar2',{ name: 'SOL_EVA_SATISF', length: 1 })
    @Column('varchar2',{ name: 'SOL_DES_SATISF', length: 3000 })
    @Column('varchar2',{ name: 'SOL_ORIGEN', length: 1 })
    @Column('varchar2',{ name: 'SOL_EVA_CALIDAD', length: 1 })
    @Column('varchar2',{ name: 'SOL_PRIORIDAD', length: 1 })
    @Column('varchar2',{ name: 'SOL_CATEGORIA', length: 1 })
    @Column('varchar2',{ name: 'SOL_COMENTEVA', length: 500 })
    @Column('number',{ name: 'SOL_CORUNI', precision: 4 })
    @Column('varchar2',{ name: 'SOL_RUTA_ANEXOS', length: 1000 }) 
    @Column('number',{ name: 'SOL_PRIO_USUARIO', precision: 2 })
    @Column('varchar2',{ name: 'SOL_COMENTADS', length: 500 })
    @Column('varchar2',{ name: 'SOL_COMENTADA', length: 500 })
    @Column('varchar2',{ name: 'SOL_FINALIZA', length: 8 })
    @Column('timestamp',{ name: 'SOL_FECANU', nullable: true })
    @Column('varchar2',{ name: 'SOL_RESPERADO', length: 4000 })
    @Column('number',{ name: 'SOL_CODCSO', precision: 2 })
    @Column('timestamp',{ name: 'SOL_FAPRUEBA' })
    @Column('timestamp',{ name: 'SOL_FECINF', nullable: true})
    @Column('varchar2',{ name: 'SOL_AUTORIZACION', length: 30 }) 
    @Column('varchar2',{ name: 'SOL_OBS_USUARIO', length: 4000 })
    @Column('number',{ name: 'SOL_FOBSERVACION' , nullable: true})
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