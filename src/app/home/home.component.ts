import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule]
})
export class HomeComponent {
  topHits = [
    { title: 'Doctor Elise: The Royal Lady With the Lamp', image: '../img/Home/Top_hits/Doctor_Elise.jpg', description: 'A unique medical romance' },
    { title: 'My Happy Marriage', image: '../img/Home/Top_hits/My_Happy_Marriage.jpg', description: 'My Happy Marriage' },
    { title: 'Hokkaido Gals Are Super Adorable', image: '../img/Home/Top_hits/Hokkaido_Gals.jpg', description: 'A radiating wholesome love story' },
    { title: 'The Demon Prince of Momochi House', image: '../img/Home/Top_hits/The_Demon.jpg', description: 'The Demon Prince of Momochi House' },
    { title: 'Tomo-chan Is a Girl!', image: '../img/Home/Top_hits/Tomo-chan.jpg', description: 'Tomo-chan Is a Girl!' }
  ];

  endOfYearAnime = [
    { title: 'Alya Sometimes Hides Her Feelings in Russian', image: '../img/Home/End_2024/Alya.jpg', description: 'Alya Sometimes Hides Her Feelings in Russian' },
    { title: 'Blue Box', image: '../img/Home/End_2024/Blue_Box.jpg', description: 'Blue Box' },
    { title: 'Dandadan', image: '../img/Home/End_2024/Dandadan.jpg', description: 'Dandadan' },
    { title: 'Days With My Stepsister', image: '../img/Home/End_2024/Days.jpg', description: 'Days With My Stepsister' },
    { title: 'Makeine: Too Many Losing Heroines!', image: '../img/Home/End_2024/Makeine.jpg', description: 'Makeine: Too Many Losing Heroines!' }
  ];

  recommendations = [
    { title: '365 Days to the Wedding', image: '../img/Home/Recom/365_Days.jpg', description: '365 Days to the Wedding' },
    { title: 'Doctor Elise: The Royal Lady with the Lamp', image: '../img/Home/Recom/Doctor_Elise.jpg', description: 'Doctor Elise: The Royal Lady with the Lamp' },
    { title: 'Horimiya', image: '../img/Home/Recom/Horimiya.jpg', description: 'Horimiya' },
    { title: 'Hokkaido Gals Are Super Adorable!', image: '../img/Home/Recom/Hokkaido_Gals.jpg', description: 'Hokkaido Gals Are Super Adorable!' },
    { title: 'Kubo-san wa Mob wo Yurusanai', image: '../img/Home/Recom/Kubo-san.jpg', description: 'Kubo-san wa Mob wo Yurusanai' },
    { title: 'You are Ms. Servant', image: '../img/Home/Recom/Ms_Servan.jpg', description: 'You are Ms. Servant' },
    { title: 'Tying the Knot with an Amagami Sister', image: '../img/Home/Recom/Tying.jpg', description: 'Tying the Knot with an Amagami Sister' },
    { title: 'Whisper Me a Love Song', image: '../img/Home/Recom/Whisper.jpg', description: 'Whisper Me a Love Song' },
    { title: 'Yakuza Fiance: Raise wa Tannin ga li', image: '../img/Home/Recom/Yakuza_Fiance.jpg', description: 'Yakuza Fiance: Raise wa Tannin ga li' },
    { title: "Please Don't Tease Me, Miss Nagatoro", image: '../img/Home/Recom/nagatoro.jpg', description: "Please Don't Tease Me, Miss Nagatoro" }
  ];
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
