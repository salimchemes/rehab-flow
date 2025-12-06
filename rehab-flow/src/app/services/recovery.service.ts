import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { RecoveryPlan, RecoveryPlanRequest } from '../models/recovery.model';

@Injectable({
  providedIn: 'root'
})
export class RecoveryService {
  private apiUrl = 'http://localhost:3000/recovery-plan';
  
  // Signal to hold the current plan
  currentPlan = signal<RecoveryPlan | null>(null);

  constructor(private http: HttpClient) { }

  generatePlan(request: RecoveryPlanRequest): Observable<RecoveryPlan> {
    return this.http.post<RecoveryPlan>(this.apiUrl, request).pipe(
      tap(plan => this.currentPlan.set(plan)),
      catchError(error => {
        console.error('Error generating recovery plan:', error);
        return throwError(() => error);
      })  
    );
  }
}
