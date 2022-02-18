import { Controller, Get } from 'routing-controllers';

@Controller()
export class GreetingsController {
  @Get('/')
  sayHello() {
    return 'Hello World';
  }
}
