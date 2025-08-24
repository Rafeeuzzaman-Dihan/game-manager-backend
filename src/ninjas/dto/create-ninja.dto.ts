import { IsEnum, MinLength } from 'class-validator';
export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(['stealth', 'speed', 'strength'], {message: 'Type must be one of the following: stealth, speed, strength'})
  type: 'stealth' | 'speed' | 'strength';
}
