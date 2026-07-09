import { IsOptional } from "class-validator";

export class ListDoctorsDto {
  @IsOptional()
  page: number;

  @IsOptional()
  per_page: string;
}
