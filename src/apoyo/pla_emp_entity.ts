import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";

@Entity("PLA_EMP_EMPLEADO")
export class Pla_Emp_Entity {

    @Column("varchar2", { primary: true, name: "EMP_CODCIA", length: 3 })
    empCodcia?: string;
    @Column("number", { primary: true, name: "EMP_CODIGO" })
    empCodigo?: number;
    @Column("varchar2", { name: "EMP_CODCEL", length: 8 })
    empCodcel?: string;
    @Column("varchar2", { name: "EMP_NOMBRE_CIP" })
    empNombre?: string;
    @Column("varchar2", { name: "EMP_ESTADO" })
    empEstado?: string;
    @Column("varchar2", { name: "EMP_CODENTI" })
    empCodenti?: string;

}