import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  cards = [
    { title: 'Card 1', content: 'Content 1', cols: 2, rows: 1 },
    // { title: 'Card 2', content: 'Content 2', cols: 1, rows: 1 },
    // { title: 'Card 3', content: 'Content 3', cols: 1, rows: 2 },
    // { title: 'Card 4', content: 'Content 4', cols: 1, rows: 1 }
  ];
  constructor() {	}

	ngOnInit(): void {
  }

}