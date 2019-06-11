import { Component, OnInit } from '@angular/core';
import { PdfFile } from '../shared/lookup-interfaces/pdf-file';
import { HttpClient } from '@angular/common/http';
import { PdfFileService } from '../services/pdf-file.service';

@Component({
  selector: 'app-doober',
  templateUrl: './doober.component.html',
  styleUrls: ['./doober.component.scss']
})
export class DooberComponent implements OnInit {

  public files: PdfFile[] = [];

  ratingClicked: number;
  itemIdRatingClicked: string;

  constructor(private pdfFileService: PdfFileService, private http: HttpClient) { }

  ngOnInit() {
    this.getPdfFiles();
  }

  getPdfFiles() {
    this.pdfFileService.getPdfFiles()
        .subscribe(res => {
        this.files = res;
        console.log(this.files);
      });
    }

    ratingComponentClick(clickObj: any): void {
      const item = this.files.find(((i: any) => i.id === clickObj.itemId));
      if (!!item) {
        item.rating = clickObj.rating;
        this.ratingClicked = clickObj.rating;
        this.itemIdRatingClicked = item.name;
      }
    }
}
