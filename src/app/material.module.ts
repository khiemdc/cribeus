import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule,
  MatToolbarModule, MatCardModule, MatGridListModule, MatInputModule, MatButtonToggleModule,
  MatFormFieldModule, MatSelectModule} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    CommonModule, MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule],
  exports: [
    MatGridListModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonToggleModule,
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule],
})
export class MaterialModule { }
