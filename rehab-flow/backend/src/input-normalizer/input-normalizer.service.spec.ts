import { Test, TestingModule } from '@nestjs/testing';
import { InputNormalizerService } from './input-normalizer.service';

describe('InputNormalizerService', () => {
  let service: InputNormalizerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InputNormalizerService],
    }).compile();

    service = module.get<InputNormalizerService>(InputNormalizerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
