import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Terrorist {
  value: string;
  viewValue: string;
}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-doober-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class DooberNavbarComponent implements OnInit {
  
  tiles: Tile[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 9, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 5, rows: 2, color: '#DDBDF1'},
    {text: 'Five', cols: 7, rows: 2, color: '#DDBDF1'},
  ];

  categories: string[] = ['Category 1', 'Category 2', 'Category 3'];
  sortBy: string[] = ['Topic', 'Country', 'Rating'];

  categoryForm: FormGroup;
  sortByForm: FormGroup;
  default = 'Most Popular';
  isHidden = false;
  tilte = 'Topic';
  step = null;

  terrorists: Terrorist[] = [
    {value: 'ISIS', viewValue: 'ISIS'},
    {value: 'al-Qaeda', viewValue: 'al-Qaeda'},
    {value: 'taliban', viewValue: 'Taliban'}
  ];
    constructor() {
        this.categoryForm = new FormGroup({
          category: new FormControl(null)
        });
        // this.countryForm.controls['country'].setValue(this.default, {onlySelf: true});
        this.sortByForm = new FormGroup({
          sortBy: new FormControl(null)
        });
        this.sortByForm.controls['sortBy'].setValue(this.default, {onlySelf: true});
    }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
