import { Test, TestingModule } from '@nestjs/testing';
import { RecoveryPlanService } from './recovery-plan.service';

describe('RecoveryPlanService', () => {
  let service: RecoveryPlanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecoveryPlanService],
    }).compile();

    service = module.get<RecoveryPlanService>(RecoveryPlanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
