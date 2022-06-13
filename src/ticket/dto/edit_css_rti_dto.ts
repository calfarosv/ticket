import { PartialType, OmitType } from '@nestjs/swagger';
import { Create_Css_Rti_Dto } from './create_css_rti_dto';

export class Edit_Css_Rti_Dto extends PartialType(
    OmitType(Create_Css_Rti_Dto, [

    ] as const),
) { }