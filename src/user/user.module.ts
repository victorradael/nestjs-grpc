import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserGrpcClientController } from './user-grpc-client/user-grpc-client.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: '127.0.0.1:50051',
          package: 'user',
          protoPath: join(__dirname, 'proto/user.proto'),
        },
      },
    ]),
  ],
  controllers: [UserController, UserGrpcClientController],
  providers: [UserService],
})
export class UserModule {}
