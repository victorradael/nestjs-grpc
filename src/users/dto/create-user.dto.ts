import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    description: 'Describe the field function',
    example: 'Xpto Name',
  })
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
