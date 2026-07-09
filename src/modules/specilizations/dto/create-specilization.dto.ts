import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { IsSpecilizationUnique, IsSpecilizationUniqueConstraint } from "../validators/unique-specilization.validator";

export class CreateSpecilizationDto {

    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    @IsSpecilizationUnique()
    title: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(400)
    description: string;

    // Populated server-side from the current organization (see the guard that
    // resolves request.organization), NOT sent by the client. @IsOptional keeps
    // the client request valid; the guard overwrites it before validation runs.
    @IsOptional()
    @IsInt()
    organization_id: number;
}
