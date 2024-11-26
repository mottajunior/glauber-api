import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/glaubernest")
  getHello(): string {
    console.log("Ola sou um maia")
    return this.appService.getHello();
  }
}
