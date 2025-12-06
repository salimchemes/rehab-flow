import { Injectable } from '@nestjs/common';
import { CreateRecoveryPlanDto } from './dto/create-recovery-plan.dto';
import { InputNormalizerService } from '../input-normalizer/input-normalizer.service';
import { ContextSelectorService } from '../context-selector/context-selector.service';
import { PromptBuilderService } from '../prompt-builder/prompt-builder.service';
import { AiEngineService } from '../ai-engine/ai-engine.service';
import { PostProcessorService } from '../post-processor/post-processor.service';

@Injectable()
export class RecoveryPlanService {
  constructor(
    private readonly inputNormalizer: InputNormalizerService,
    private readonly contextSelector: ContextSelectorService,
    private readonly promptBuilder: PromptBuilderService,
    private readonly aiEngine: AiEngineService,
    private readonly postProcessor: PostProcessorService,
  ) {}

  async generatePlan(dto: CreateRecoveryPlanDto) {
    // 1. Input Normalizer
    const normalizedInput = await this.inputNormalizer.normalize(dto);

    // 2. Context Selector
    const context = await this.contextSelector.selectContext(normalizedInput);

    // 3. Prompt Builder
    const prompt = await this.promptBuilder.buildPrompt(normalizedInput, context);
    debugger
    // 4. AI Engine
    const rawPlan = await this.aiEngine.generateRecoveryPlan(prompt);

    // 5. Post Processor
    const finalPlan = await this.postProcessor.process(rawPlan);

    return finalPlan;
  }
}
