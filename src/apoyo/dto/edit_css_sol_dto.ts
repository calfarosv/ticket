import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Css_Sol_Dto } from './create_css_sol_dto';

export class Edit_Css_Sol_Dto extends PartialType(
    OmitType(Create_Css_Sol_Dto, [

    ] as const),
) { }