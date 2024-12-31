import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css'],
  imports: [CommonModule]
})
export class EmpListComponent {
  employees = [
    'Eljan Joel Y. Pamintuan',
    'Mark Erolle D. Quiambao',
    'June Sarah Quiambao',
    'Jose Reyes'
  ];
}
