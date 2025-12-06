import { Body, Controller, Post } from '@nestjs/common';
import { CreateRecoveryPlanDto } from './dto/create-recovery-plan.dto';
import { RecoveryPlanService } from './recovery-plan.service';

@Controller('recovery-plan')
export class RecoveryPlanController {
  constructor(private readonly recoveryPlanService: RecoveryPlanService) {}

  @Post()
  async generatePlan(@Body() createRecoveryPlanDto: CreateRecoveryPlanDto) {
    return this.recoveryPlanService.generatePlan(createRecoveryPlanDto);
  }
}
