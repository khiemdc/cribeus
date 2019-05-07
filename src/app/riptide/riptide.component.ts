import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-riptide',
  templateUrl: './riptide.component.html',
  styleUrls: ['./riptide.component.scss']
})
export class RiptideComponent implements OnInit {
  
  fileCount: any[] = [
    {status: 'Imported', count: 13},
    {status: 'In Progress', count: 10},
    {status: 'Total', count: 14}
  ];

  constructor() { }

  ngOnInit() {
  }

}
