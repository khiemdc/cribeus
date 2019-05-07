import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-card-simple',
  templateUrl: './dashboard-card-simple.component.html',
  styleUrls: ['./dashboard-card-simple.component.scss']
})
export class DashboardCardSimpleComponent implements OnInit {

  @Input() card: any;

  constructor() { }

  ngOnInit() {
    console.log(this.card);
  }

}
