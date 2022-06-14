/* eslint-disable prettier/prettier */
import { Column, Entity,  PrimaryColumn } from 'typeorm';

@Entity('CSS_UNI_UNIDAD', { schema: 'SISCSS' })
export class Css_Uni_Entity {
  @PrimaryColumn('varchar2',{ name: 'UNI_CODCIA', length: 3 })
  uniCodcia: string;
  @PrimaryColumn('number',{ name: 'UNI_CODIGO', precision: 5, scale: 0  })
  uniCodigo: number;
  @Column('varchar2',{ name: 'UNI_NOMBRE',  length: 80 })
  uniNombre: string;
  @Column('number',{ name: 'UNI_DEPENDENCIA',  precision: 5, scale: 0  })
  uniDependencia: number;
  @Column('varchar2',{ name: 'UNI_ESTADO',  length: 1 })
  uniEstadp: string;
  @Column('varchar2',{ name: 'UNI_NIVEL',  length: 3 })
  uniNivel: string;
  @Column('varchar2',{ name: 'UNI_CODCTC',  length: 2 })
  uniCodctc: string;

}