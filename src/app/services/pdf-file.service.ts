import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PdfFile } from '../shared/lookup-interfaces/pdf-file';
import { IRating } from '../shared/lookup-interfaces/rating';
import { ICountry } from '../shared/lookup-interfaces/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfFileService {

constructor(private httpClient: HttpClient) { }

public getPdfFiles(): Observable<PdfFile[]> {
  // return this.http.get<PdfFile[]>('http://localhost:41516/api');
  return this.httpClient.get<PdfFile[]>('./assets/data/pdf-files.json');
  // return this.httpClient.get<PdfFile[]>('assets/pdf-files.json');
}

}

