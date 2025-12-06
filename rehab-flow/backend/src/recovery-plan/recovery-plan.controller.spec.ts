import { Test, TestingModule } from '@nestjs/testing';
import { RecoveryPlanController } from './recovery-plan.controller';

describe('RecoveryPlanController', () => {
  let controller: RecoveryPlanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecoveryPlanController],
    }).compile();

    controller = module.get<RecoveryPlanController>(RecoveryPlanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
