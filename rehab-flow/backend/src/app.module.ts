import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InputNormalizerModule } from './input-normalizer/input-normalizer.module';
import { ContextSelectorModule } from './context-selector/context-selector.module';
import { PromptBuilderModule } from './prompt-builder/prompt-builder.module';
import { AiEngineModule } from './ai-engine/ai-engine.module';
import { PostProcessorModule } from './post-processor/post-processor.module';
import { RecoveryPlanModule } from './recovery-plan/recovery-plan.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    InputNormalizerModule,
    ContextSelectorModule,
    PromptBuilderModule,
    AiEngineModule,
    PostProcessorModule,
    RecoveryPlanModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
