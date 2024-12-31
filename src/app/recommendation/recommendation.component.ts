import { Component } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  standalone: true,
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}