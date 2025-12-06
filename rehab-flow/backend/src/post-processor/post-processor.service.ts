import { Injectable } from '@nestjs/common';

@Injectable()
export class PostProcessorService {
  async process(rawPlan: any) {
    // TODO: Validate and format JSON
    return {
      ...rawPlan,
      processed: true,
      timestamp: new Date(),
    };
  }
}
