import { PartialType } from '@nestjs/mapped-types'
import { IsBoolean, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsBoolean()
  is_active: boolean = true;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}