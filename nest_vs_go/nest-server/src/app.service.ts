import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const object = {
      message: 'hello world',
    };
    return JSON.stringify(object);
  }
}
