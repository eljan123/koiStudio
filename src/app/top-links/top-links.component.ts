import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-links',
  standalone: true,
  templateUrl: './top-links.component.html',
  styleUrls: ['./top-links.component.css'],
  imports: [CommonModule]
})
export class TopLinksComponent {
  topList = [
    { title: 'The Angel Next Door Spoils Me Rotten', image: '../img/Top_hit/top_weeks/Angel.jpg' },
    { title: 'Horimiya', image: '../img/Top_hit/top_weeks/Horimiya.jpg' },
    { title: 'The Ice Guy and His Cool Female Colleague', image: '../img/Top_hit/top_weeks/Ice.jpg' },
    { title: 'Kaguya-sama: Love is War -The First Kiss That', image: '../img/Top_hit/top_weeks/Kaguyasama.jpg' },
    { title: "Why Raeliana Ended Up at the Duke's Mansion", image: '../img/Top_hit/top_weeks/My_Happy_Marriage.jpg' },
    { title: 'My Happy Marriage', image: '../img/Top_hit/top_weeks/Raeliana.jpg' },
    { title: 'Skip and Loafer', image: '../img/Top_hit/top_weeks/Skip.jpg' },
    { title: 'Sugar Apple Fairy tale', image: '../img/Top_hit/top_weeks/Sugar.jpg' },
    { title: 'Tomo-chan Is a Girl!', image: '../img/Top_hit/top_weeks/Tomo-chan.jpg' },
    { title: 'My Love Story with Yamada-kun at Lv999', image: '../img/Top_hit/top_weeks/Yamada-kun.jpg' },
  ];

  fall2024List = [
    { title: 'A Sign of Affection Is the Most Swoon-Worthy Romance of the Season', image: '../img/Top_hit/top_2024/A_Sign.jpg' },
    { title: 'The Foolish Angel Dances with the Devil', image: '../img/Top_hit/top_2024/Angel_Devil.jpg' },
    { title: 'The Apothecary Diaries Is A Well-Crafted Historical Romance', image: '../img/Top_hit/top_2024/Apothecary_Diaries.jpg' },
    { title: 'The Demon Prince of Momochi House', image: '../img/Top_hit/top_2024/Demon_Prince.jpg' },
    { title: 'Doctor Elise: The Royal Lady With the Lamp Is A Unique Medical Romance', image: '../img/Top_hit/top_2024/Doctor_Elise.jpg' },
    { title: 'Hokkaido Gals Are Super Adorable Is A Radiating Wholesome Love Story', image: '../img/Top_hit/top_2024/Hokkaido_Gals.jpg' },
    { title: 'Kimi ni Todoke', image: '../img/Top_hit/top_2024/Kimi.jpg' },
    { title: 'Oshi No ko', image: '../img/Top_hit/top_2024/Oshi.jpg' },
    { title: 'Tales of Wedding Rings', image: '../img/Top_hit/top_2024/Tales.jpg' },
    { title: 'The Dangers In My Heart Season 2 Defies The Generic Romance Tropes', image: '../img/Top_hit/top_2024/The_Danger.jpg' },
  ];

  bestAnimeList = [
    { title: 'Akagami no Shirayuki-hime', image: '../img/Top_hit/top_all_time/Akagami.jpg' },
    { title: 'Clannad', image: '../img/Top_hit/top_all_time/Clannad.jpg' },
    { title: 'Eikoku Koi Monogatari Emma', image: '../img/Top_hit/top_all_time/Eikoku.jpg' },
    { title: 'Kaichou wa Maid-sama!', image: '../img/Top_hit/top_all_time/Kaichou.jpg' },
    { title: 'Kimi ni Todoke', image: '../img/Top_hit/top_all_time/Kimi.jpg' },
    { title:'My Love Story', image: '../img/Top_hit/top_all_time/Monogatari.jpg' },
    { title: 'Nana', image: '../img/Top_hit/top_all_time/Nana.jpg' },
    { title: 'Shigatsu wa Kimi no Uso', image: '../img/Top_hit/top_all_time/Shigatsu.jpg' },
    { title: 'Sukitte li na yo', image: '../img/Top_hit/top_all_time/Sukitte.jpg' },
    { title: 'Toradora!', image: '../img/Top_hit/top_all_time/Toradora.jpg' },
  ];

  
  isVisible = true;
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
