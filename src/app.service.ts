/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {version : process.env.API_VERSION};
  }
}
