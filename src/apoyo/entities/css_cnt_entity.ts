import { Column, Entity, Index, PrimaryColumn } from "typeorm";


@Index("CSS_CNT_PK", ["cntCodcia","cntAnio","cntCoduni"], { unique: true })
@Entity("CSS_CNT_CONTADORES")
export class Css_Cnt_Entity {
  @PrimaryColumn('varchar2',{ name: 'CNT_CODCIA', length: 3 })
  cntCodcia: string;
  @PrimaryColumn('number',{ name: 'CNT_ANIO', precision: 9 })
  cntAnio: number;
  @PrimaryColumn('number',{ name: 'CNT_CODUNI', precision: 9 })
  cntCoduni: number;
  @Column('number',{ name: 'CNT_CONTADOR1', precision: 9 })
  cntContador1: number;
  @Column('number',{ name: 'CNT_CONTADOR2', precision: 9 })
  cntContador2: number;
}  
