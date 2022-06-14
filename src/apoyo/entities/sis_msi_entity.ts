import { Column, Entity, Index, JoinColumn, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";


@Index("SIS_MSI_PK", ["msiCodcia","msiCodsis","msiCodigo"], { unique: true })
@Entity("SIS_MSI_MODULOS_SISTEMAS")
export class Sis_Msi_Entity {
  @PrimaryColumn('varchar2',{ name: 'MSI_CODCIA', length: 3 })
  msiCodcia: string;
  @PrimaryColumn('number',{ name: 'MSI_CODSIS', precision: 3, scale: 0 })
  msiCodsis: number;
  @PrimaryColumn('number',{ name: 'MSI_CODIGO', precision: 3, scale: 0 })
  msiCodigo: number;
  @Column('varchar2',{ name: 'MSI_NOMBRE', length: 75 })
  msiNombre: string;
  @Column('varchar2',{ name: 'MSI_ESTADO', length: 1 })
  msiEstado: string;
}