import { Component, OnInit, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { RecoveryService } from '../services/recovery.service';
import { RecoveryPlan } from '../models/recovery.model';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent implements OnInit {
  plan: RecoveryPlan | null = null;
  isPremium = false;

  unlockPlan() {
    this.isPremium = true;
  }

  constructor(
    private router: Router,
    private recoveryService: RecoveryService
  ) {
    // Read the signal
    effect(() => {
      this.plan = this.recoveryService.currentPlan();
      if (!this.plan) {
        // Redirect if no plan (optional, or show empty state)
        // this.router.navigate(['/assessment']);
      }
    });
  }

  ngOnInit(): void {}
}
