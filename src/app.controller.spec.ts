import { Test, TestingModule } from '@nestjs/testing'
import { AppController } from './app.controller'

import { AppService } from './app.service'

describe('AppController', () => {
  let appController: AppController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile()

    appController = app.get<AppController>(AppController)
  })

  describe('root', () => {
    it('should return "Vojo API´s running!"', () => {
      expect(appController.getHello()).toBe('Vojo API is up and running! Have fun!!')
    })
  })
})
