import { Injectable } from '@nestjs/common';
import { KINESIOLOGY_CONTEXT } from '../common/constants/kinesiology.constant';

@Injectable()
export class ContextSelectorService {
  async selectContext(normalizedInput: any) {
    // In a real app, we might select only relevant parts.
    // For now, we pass the whole domain knowledge to the Prompt Builder.
    return {
      domainContext: KINESIOLOGY_CONTEXT,
      userContext: normalizedInput.context,
    };
  }
}
