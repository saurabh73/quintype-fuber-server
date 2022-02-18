import { Request } from 'express';
import { Controller, Get, Req } from 'routing-controllers';

@Controller()
export class GreetingsController {
  @Get('/')
  sayHello(@Req() request: Request) {
    console.log(request.query);
    return 'Hello World';
  }
}
