/* eslint-disable prettier/prettier */
import { Column, Entity,  PrimaryColumn } from 'typeorm';

@Entity('CSS_EMP_EMPLEADO_V', { schema: 'SISCSS' })
export class Pla_Emp_Entity {
  @PrimaryColumn('varchar2',{ name: 'EMP_CODCIA',  length: 3 })
  empCodcia: string;
  @PrimaryColumn('varchar2',{ name: 'EMP_CODCEL',  length: 8 })
  empCodcel: string;
  @Column('varchar2',{ name: 'EMP_NOMBRE_CIP',  length: 60 })
  empNombreCip: string;
  @Column('varchar2',{ name: 'EMP_ESTADO',  length: 1 })
  empEstado: string;
  @Column('varchar2',{ name: 'EMP_CORREO',  length: 25 })
  empCorreo: string;
  @Column('varchar2',{ name: 'EMP_PLZ_NOMBRE',  length: 80 })
  empPlzNombre: string;
  @Column('number',{ name: 'EMP_UNI_CODIGO',  precision: 5, scale: 0})
  empUniCodigo: number;
  @Column('varchar2',{ name: 'EMP_UNI_NOMBRE', length: 80 })
  empUniNombre: string;
  @Column('varchar2',{ name: 'EMP_CODENTI', length: 3 })
  empCodenti: string;
  @Column('number',{ name: 'EMP_CODPLZ', precision: 8, scale: 0 })
  empSexo: number;


}
