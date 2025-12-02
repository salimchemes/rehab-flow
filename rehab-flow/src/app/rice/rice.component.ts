import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  selector: 'app-rice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rice.component.html',
  styleUrl: './rice.component.css'
})
export class RiceComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
