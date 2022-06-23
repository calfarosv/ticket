import { Column, Entity, Index, PrimaryColumn} from "typeorm";

@Index("CSS_SDT_PK", ["sdtCodcia","sdtCoduni","sdtAnio","sdtCodsol","sdtCodigo"], { unique: true })
@Entity("CSS_SDT_SOLDETALLE")
export class Css_Sdt_Entity {
  @PrimaryColumn('varchar2',{ name: 'SDT_CODCIA', length: 3 })
  sdtCodcia: string;
  @PrimaryColumn('number',{ name: 'SDT_CODUNI', precision: 5 })
  sdtCoduni: number;
  @PrimaryColumn('number',{ name: 'SDT_ANIO', precision: 4 })
  sdtAnio: number;
  @PrimaryColumn('number',{ name: 'SDT_CODSOL', precision: 9 })
  sdtCodsol: number;
  @PrimaryColumn('number',{ name: 'SDT_CODIGO', precision: 4 })
  sdtCodigo: number;
  @Column('number',{ name: 'SDT_CODSIS', precision: 3 })
  sdtCodsis: number;
  @Column('number',{ name: 'SDT_CODMSI', precision: 3 })
  sdtCodmsi: number;
  @Column('number',{ name: 'SDT_CODREF', precision: 3 })
  sdtCodref: number;  
}  
