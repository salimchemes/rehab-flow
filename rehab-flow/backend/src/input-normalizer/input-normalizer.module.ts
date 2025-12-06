import { Module } from '@nestjs/common';
import { InputNormalizerService } from './input-normalizer.service';

@Module({
  providers: [InputNormalizerService],
  exports: [InputNormalizerService],
})
export class InputNormalizerModule {}
