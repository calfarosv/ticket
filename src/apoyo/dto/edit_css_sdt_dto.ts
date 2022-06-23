import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Css_Sdt_Dto } from './create_css_sdt_dto';

export class Edit_Css_Sdt_Dto extends PartialType(
    OmitType(Create_Css_Sdt_Dto, [

    ] as const),
) { }