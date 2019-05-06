import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    MatMenuModule,
      CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule],
  exports: [
    MatMenuModule,
    CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule],
})
export class MaterialModule { }