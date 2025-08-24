import { MinLength } from 'class-validator';
export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  type: 'stealth' | 'speed' | 'strength';
}
