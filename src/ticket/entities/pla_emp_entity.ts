/* eslint-disable prettier/prettier */
import { Column, Entity,  PrimaryColumn } from 'typeorm';

@Entity('PLA_EMP_EMPLEADO', { schema: 'SISRRH' })
export class Pla_Emp_Entity {
  @PrimaryColumn({ name: 'EMP_CODCIA', type: 'varchar2', length: 3 })
  empCodcia: string;
  @PrimaryColumn({ name: 'EMP_CODIGO' })
  empCodigo: number;
  @Column({ name: 'EMP_NOMBRE_CIP', type: 'varchar2', length: 60 })
  empNombreCip: string;
  @Column({ name: 'EMP_CORREO', type: 'varchar2', length: 25 })
  empCorreo: string;
  @Column({ name: 'EMP_CODENTI', type: 'varchar2', length: 3 })
  empCodenti: string;
  @Column({ name: 'EMP_CODCEL', type: 'varchar2', length: 8 })
  empCodcel: string;
  @Column({ name: 'EMP_SEXO', type: 'varchar2', length: 1 })
  empSexo: string;
  @Column({ name: 'EMP_PROFESION', type: 'varchar2', length: 90 })
  empProfesion: string;
  @Column({ name: 'EMP_ESTADO', type: 'varchar2', length: 1 })
  empEstado: string;
}
