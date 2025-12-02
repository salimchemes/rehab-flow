import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-plan',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './plan.component.html',
  styleUrl: './plan.component.css'
})
export class PlanComponent implements OnInit {
  injury: string = '';
  description: string = '';
  duration: string = '';
  showDetails: boolean = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras.state) {
      this.injury = nav.extras.state['injury'];
      this.description = nav.extras.state['description'];
      this.duration = nav.extras.state['duration'];
    } else {
      // Fallback if accessed directly
      this.injury = 'Esguince de tobillo grado 2';
      this.description = 'Dolor agudo al caminar y ligera inflamación.';
      this.duration = 'Hace 1 semana';
    }
  }

  phase1Exercises = [
    {
      name: 'Protocolo RICE',
      description: 'Reposo, Hielo, Compresión, Elevación. Aplicar hielo por 15 min.',
      duration: '15 min',
      type: 'recovery'
    },
    {
      name: 'Movilidad de Tobillo',
      description: 'Mover el pie arriba y abajo suavemente dentro del rango sin dolor.',
      sets: '3',
      reps: '10',
      type: 'exercise'
    },
    {
      name: 'Isométricos',
      description: 'Empujar suavemente contra una pared o resistencia fija sin mover la articulación.',
      sets: '3',
      reps: '5 seg',
      type: 'exercise'
    }
  ];

  ngOnInit(): void {}
}
