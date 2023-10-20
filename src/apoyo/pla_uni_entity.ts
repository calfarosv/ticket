import { Column, Entity, Index, PrimaryColumn} from "typeorm";
@Index("PLA_UNI_PK", [ "uniCodigo"], { unique: true })
@Entity("PLA_UNI_UNIDAD")
export class Pla_Uni_Entity {
    @Column("varchar2", { name: "UNI_CODCIA", length: 3 })
    uniCodcia?: string;
    @PrimaryColumn()
    @Column("number", {  primary: true, name: "UNI_CODIGO", precision: 5, scale: 0, })
    uniCodigo?: number;
    @Column("varchar2", { name: "UNI_NOMBRE", length: 80 })
    uniNombre?: string;
    @Column("varchar2", { name: "UNI_CODENTI", length: 5 })
    uniCodenti?: string;
    @Column("varchar2", { name: "UNI_ESTADO", length: 1 })
    uniEstado?: string;
}