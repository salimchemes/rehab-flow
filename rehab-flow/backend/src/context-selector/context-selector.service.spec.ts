import { Test, TestingModule } from '@nestjs/testing';
import { ContextSelectorService } from './context-selector.service';

describe('ContextSelectorService', () => {
  let service: ContextSelectorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ContextSelectorService],
    }).compile();

    service = module.get<ContextSelectorService>(ContextSelectorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
