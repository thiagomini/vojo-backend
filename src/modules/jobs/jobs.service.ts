import { Injectable, HttpException, HttpStatus } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { IJob } from '@/modules/jobs/interfaces/job.interface'
import {JobUpdateDto} from "@/modules/jobs/dtos/job-update.dto";
import {IUser} from "@/modules/users/interfaces/user.interface";


@Injectable()
export class JobsService {
  constructor(
    @InjectModel('Job')
    private readonly jobModel: Model<IJob>,
  ) { }

  async listAll(): Promise<object[]> {
    const jobs = await this.jobModel.find({ }, null, {
      lean: true
    }).exec()
    return jobs;
  }

  async updateOne(user: IUser, id: string, data: JobUpdateDto): Promise<object> {
      const update = { ...data, updatedBy: user.id }
      const options = { new: true, lean: true };

      try {
       await this.jobModel.findById(id).exec();
      } catch (e) {
         if (e.path === '_id') {
             throw new HttpException(`Recurso JOB de id ${id} não existe!`, HttpStatus.NOT_FOUND)
         } else {
             throw e
         }
      }

     const updatedJob = await this.jobModel.findByIdAndUpdate(id, update, options).exec();
     return updatedJob
  }
}
