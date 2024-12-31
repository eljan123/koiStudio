import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AboutUsComponent {
  moderators = [
    {
      name: 'Eljan Joel Pamintuan',
      image: '../img/mod_img/ej.jpg',
      link: 'recom.html'
    },
    {
      name: 'June Sarah Quiambao',
      image: '../img/mod_img/june.jpg',
      link: 'recom.html'
    },
    {
      name: 'Mark Erolle Quiambao',
      image: '../img/mod_img/mark.jpg',
      link: 'recom.html'
    },
    {
      name: 'Jose Favian Reyes',
      image: '../img/mod_img/jose.jpg',
      link: 'recom.html#mark'
    }
  ];
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
