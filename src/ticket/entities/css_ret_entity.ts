import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("CSS_RET_PK", ["retCodcia", "retCoduniResp", "retCodigo"], { unique: true })
@Entity("CSS_RET_RESTICKET")

export class Css_Ret_Entity {
    
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE FORMAN LA LLAVE PRIMARIA
    //////////////////////////////////////////////////////////////////////////////////// 
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "RET_CODCIA", length: 3, })
    retCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "RET_CODUNI_RESP", precision: 5, scale: 0, })
    retCoduniResp?: number;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "RET_CODIGO", precision: 5, scale: 0, })
    retCodigo?: number;
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE NO FORMAN LA LLAVE PRIMARIA
    ////////////////////////////////////////////////////////////////////////////////////

    @Column("varchar2", { name: "RET_TIPO", length: 3 })
    retTipo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "RET_ESTADO", length: 3 })
    retEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "RET_DESCRIPCION", length: 4000 })
    retDescripcion?: string;
    //-----------------------------------------------------------------------------------------


}
