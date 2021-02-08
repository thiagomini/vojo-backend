import { Controller, Get } from '@nestjs/common'

import { JobsService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: JobsService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
