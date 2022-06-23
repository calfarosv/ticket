import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Css_Cnt_Dto } from './create_css_cnt_dto';

export class Edit_Css_Cnt_Dto extends PartialType(
    OmitType(Create_Css_Cnt_Dto, [

    ] as const),
) { }