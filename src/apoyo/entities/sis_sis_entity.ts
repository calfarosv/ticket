import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";


@Index("SIS_SIS_PK", ["sisCodcia","sisCodigo"], { unique: true })
@Entity("SIS_SIS_SISTEMAS")
export class Sis_Sis_Entity {
  @PrimaryColumn('varchar2',{ name: 'SIS_CODCIA', length: 3 })
  sisCodcia: string;
  @PrimaryColumn('number',{ name: 'SIS_CODIGO', precision: 3, scale: 0 })
  sisCodigo: number;
  @Column('varchar2',{ name: 'SIS_NOMBRE', length: 75 })
  sisNombre: string;
  @Column('varchar2',{ name: 'SIS_ESTADO', length: 1 })
  sisEstado: string;
}