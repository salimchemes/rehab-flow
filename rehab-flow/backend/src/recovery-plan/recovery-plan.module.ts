import { Module } from '@nestjs/common';
import { RecoveryPlanController } from './recovery-plan.controller';
import { RecoveryPlanService } from './recovery-plan.service';
import { InputNormalizerModule } from '../input-normalizer/input-normalizer.module';
import { ContextSelectorModule } from '../context-selector/context-selector.module';
import { PromptBuilderModule } from '../prompt-builder/prompt-builder.module';
import { AiEngineModule } from '../ai-engine/ai-engine.module';
import { PostProcessorModule } from '../post-processor/post-processor.module';

@Module({
  imports: [
    InputNormalizerModule,
    ContextSelectorModule,
    PromptBuilderModule,
    AiEngineModule,
    PostProcessorModule,
  ],
  controllers: [RecoveryPlanController],
  providers: [RecoveryPlanService]
})
export class RecoveryPlanModule {}
