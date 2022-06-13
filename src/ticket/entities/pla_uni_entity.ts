/* eslint-disable prettier/prettier */
import { Column, Entity,  PrimaryColumn } from 'typeorm';

@Entity('PLA_UNI_UNIDAD', { schema: 'SISRRH' })
export class Pla_Uni_Entity {
  @PrimaryColumn({ name: 'UNI_CODCIA', type: 'varchar2', length: 3 })
  uniCodcia: string;
  @PrimaryColumn({ name: 'UNI_CODIGO' })
  uniCodigo: number;
  @Column({ name: 'UNI_NOMBRE', type: 'varchar2', length: 80 })
  uniNombre: string;
  @Column({ name: 'UNI_CODENTI', type: 'varchar2', length: 5 })
  uniCodenti: string;
  @Column({ name: 'UNI_ESTADO', type: 'varchar2', length: 1 })
  uniEstado: string;

}
