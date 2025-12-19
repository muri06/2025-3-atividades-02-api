import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  root() {
    return {
      message: 'API disponível. Use /tasks para recursos e /api para documentação Swagger',
      endpoints: {
        tasks: '/tasks',
        swagger: '/api'
      }
    };
  }
}
