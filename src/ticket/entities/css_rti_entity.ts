import { Type } from "class-transformer";
import { Column, Entity, Index, PrimaryColumn } from "typeorm";

@Index("CSS_RTI_PK", ["rtiCodcia", "rtiCodigo"], { unique: true })
@Entity("CSS_RTI_REG_TICKETSTI")

export class Css_Rti_Entity {
    
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE FORMAN LA LLAVE PRIMARIA
    //////////////////////////////////////////////////////////////////////////////////// 
    @PrimaryColumn()
    @Column("varchar2", { primary: true, name: "RTI_CODCIA", length: 3, })
    rtiCodcia?: string;
    //-----------------------------------------------------------------------------------------
    @PrimaryColumn()
    @Column("number", { primary: true, name: "RTI_CODIGO", precision: 5, scale: 0, })
    rtiCodigo?: number;
    ////////////////////////////////////////////////////////////////////////////////////
    // CAMPOS QUE NO FORMAN LA LLAVE PRIMARIA
    ////////////////////////////////////////////////////////////////////////////////////
    @Column("varchar2", { name: "RTI_DESCRIPCION", length: 4000 })
    rtiDescripcion?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "RTI_RESULTADO", length: 4000 })
    rtiResultado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "RTI_PRIORIDAD", length: 1 })
    rtiPrioridad?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "RTI_CODUNI_RESP", precision: 5, scale: 0, })
    rtiCoduniResp?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "RTI_CODEMP", length: 8 })
    rtiCodemp?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "RTI_USRRED", length: 1 })
    rtiUsrred?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "RTI_CORREO", length: 1 })
    rtiCorreo?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "RTI_NAVEGA", length: 1 })
    rtiNavega?: string;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "RTI_SISTEMA", length: 1 })
    rtiSistema?: string;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "RTI_CODSIS", precision: 3, scale: 0, })
    rtiCodsis?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "RTI_CODMSI", precision: 3, scale: 0, })
    rtiCodmsi?: number;
    //-----------------------------------------------------------------------------------------
    @Column("varchar2", { name: "RTI_ESTADO", length: 1 })
    rtiEstado?: string;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "RTI_FECCREA" })
    @Type(() => Date)
    rtiFeccrea?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "RTI_FECANULA" })
    @Type(() => Date)
    rtiFecanula?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "RTI_FECSOL" })
    @Type(() => Date)
    rtiFecsol?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("timestamp", { name: "RTI_FECFIN" })
    @Type(() => Date)
    rtiFecfin?: Date;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "RTI_ANISOL", precision: 4, scale: 0, })
    rtiAnisol?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "RTI_CODUNI", precision: 5, scale: 0, })
    rtiCoduni?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "RTI_CODSOL", precision: 9, scale: 0, })
    rtiCodsol?: number;
    //-----------------------------------------------------------------------------------------
    @Column("number", { name: "RTI_CODRET", precision: 5, scale: 0, })
    rtiCodret?: number;

}
