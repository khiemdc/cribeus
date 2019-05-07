import { Component, OnInit, Input } from '@angular/core';
import { MatBadge, MatList, MatCard, MatChip, MatDivider } from '@angular/material';

@Component({
  selector: 'app-dashboard-card-list',
  templateUrl: './dashboard-card-list.component.html',
  styleUrls: ['./dashboard-card-list.component.scss']
})
export class DashboardCardListComponent implements OnInit {

  @Input() cardName: string;
  @Input() cardData: any;
  
  constructor() { }

  ngOnInit() {
  }

  getDisplayText(theObject: any): string {
    if (this.cardName === 'Top Contributors') {
      return theObject.authorFirstName + ' ' + theObject.authorLastName;
    } else {
      return theObject.ideaTitle;
    }
  }

  getDisplayValue(theObject: any): string {
    if (this.cardName === 'Top Contributors') {
      return theObject.ideaCount;
    } else if (this.cardName === 'Buzzworthy Ideas') {
      return theObject.commentCount;
    } else {
      const dateString = theObject.submissionDate;
      const newDate = new Date(dateString);
      const theYear = newDate.getFullYear();
      const theMonth = newDate.getMonth();
      const theDate = newDate.getDate();



      return (theMonth + 1) + '-' + (theDate + 1) + '-' + theYear;
    }
  }

}

