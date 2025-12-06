import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { RecoveryService } from '../services/recovery.service';

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './assessment.component.html',
  styleUrl: './assessment.component.css'
})
export class AssessmentComponent {
  step = 1;
  injuryDescription = '';
  injuryDuration = '';
  selectedInjuryType = '';
  isAnalyzing = false;

  durations = [
    'Hace menos de 1 semana',
    'Entre 1 y 2 semanas',
    'Entre 3 y 4 semanas',
    'Hace 1 mes',
    'Hace más de 2 meses'
  ];

  injuryTypes = [
    'Esguince de tobillo grado 2',
    'Lesión de rodilla',
    'Lesión de hombro',
    'Desgarro muscular',
    'Tendinitis',
    'Rotura de ligamento'
  ];

  constructor(
    private router: Router,
    private recoveryService: RecoveryService
  ) {}

  nextStep() {
    if (this.step < 3) {
      this.step++;
    } else {
      this.analyze();
    }
  }

  analyze() {
    this.step = 4; // Analyzing state
    this.isAnalyzing = true;
    
    const request = {
      injuryDescription: `${this.selectedInjuryType}. ${this.injuryDescription}. Duration: ${this.injuryDuration}`,
      kinesiologistContext: {
        // We can add specific user context here if needed
        userGoal: 'Recovery'
      }
    };

    this.recoveryService.generatePlan(request).subscribe({
      next: () => {
        this.router.navigate(['/plan']);
      },
      error: (err) => {
        console.error('Error generating plan', err);
        this.isAnalyzing = false;
        this.step = 3; // Go back or show error
      }
    });
  }
}
