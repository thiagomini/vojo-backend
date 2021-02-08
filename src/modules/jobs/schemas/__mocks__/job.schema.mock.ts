import { IJob } from '@/modules/jobs/interfaces/job.interface';
import { QueryError } from '@/shared/errors/query.error';

class JobSchema {
  private _jobs: IJob[];
  constructor(jobs: IJob[]) {
    this._jobs = jobs;
  }

  get jobs(): IJob[] {
    return this._jobs;
  }

  set jobs(value: IJob[]) {
    this._jobs = value;
  }

  findById(id: number): IJob {
    return this._jobs.find(job => job.id === id)
  }

  findByIdAndUpdate(id, update, options) {
    let foundJob = this.findById(id);
    if (!foundJob) throw new QueryError('Erro na consulta', '_id');

    foundJob = Object.assign(foundJob, update);
    return foundJob;
  }
}

export default new JobSchema([]);
