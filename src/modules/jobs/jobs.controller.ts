import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpException, HttpStatus,
  Param,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { JobsService } from './jobs.service';
import { JobReadDto } from './dtos/job-read.dto';

import { JobUpdateDto } from '@/modules/jobs/dtos/job-update.dto';
import { IUser } from '@/modules/users/interfaces/user.interface';
import { GetUser } from '@/modules/auth/decorators/get-user.decorator';
import { isNotEmptyObject } from 'class-validator';

@Controller('v3/jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get()
  async listAll(): Promise<JobReadDto[]> {
    const jobs = await this.jobsService.listAll();
    const jobReadDtos = jobs.map(job => new JobReadDto(job));
    return jobReadDtos;
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Put(':id')
  @UseGuards(AuthGuard())
  async updateOne(@GetUser() user: IUser, @Param('id') id: string, @Body() jobUpdateDto: JobUpdateDto) {
    if (!isNotEmptyObject(jobUpdateDto)) throw new HttpException('Ao menos um parâmetro válido deve ser enviado', HttpStatus.UNPROCESSABLE_ENTITY);
    const updatedJob = await this.jobsService.updateOne(user, id, jobUpdateDto);
    return updatedJob;
  }

}