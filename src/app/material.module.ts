import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatCardModule, MatGridListModule, MatInputModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    CommonModule, MatButtonModule,MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule],
  exports: [
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule],
})
export class MaterialModule { }