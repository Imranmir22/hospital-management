import { CreateUserDto } from "../../users/dto/create-user.dto";
export declare class CreateOrganizationDetailsDto {
    name: string;
    size: number;
    phone_country_code_id: number;
    phone_number: string;
    email: string;
    country_id: number;
}
export declare class CreateOrganizationDto {
    user: CreateUserDto;
    organization: CreateOrganizationDetailsDto;
}
