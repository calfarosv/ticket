import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Css_Ret_Dto } from './create_css_ret_dto';

export class Edit_Css_Ret_Dto extends PartialType(
    OmitType(Create_Css_Ret_Dto, [

    ] as const),
) { }