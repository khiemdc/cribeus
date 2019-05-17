import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ChartsModule } from 'ng2-charts';
import { TbgChartsModule } from 'Tbg-charts-library';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './sidenav/menu-button.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FigurecardComponent } from './shared/figurecard/figurecard.component';
import { MsgIconBtnComponent } from './shared/msgiconbtn/msgiconbtn.component';
import { RiptideComponent } from './riptide/riptide.component';
import { RiptideNavbarComponent } from './riptide/navbar/navbar.component';
import { DashboardCardSimpleComponent } from './riptide/dashboard-card-simple/dashboard-card-simple.component';
import { RiptideFooterComponent } from './riptide/footer/footer.component';
import { IdeeaPortalComponent } from './ideea-portal/ideea-portal.component';
import { IdeeaNavbarComponent } from './ideea-portal/navbar/navbar.component';
import { DashboardCardListComponent } from './ideea-portal/dashboard-card-list/dashboard-card-list.component';
import { SidenavService } from './sidenav/sidenav.service';
import { MaterialModule } from './material.module';
import { ProfileComponent } from './profile/profile.component';
import { DooberComponent } from './doober/doober.component';
import { DooberNavbarComponent } from './doober/navbar/navbar.component';
import { RatingComponent } from './doober/rating/rating.component';

@NgModule({
   declarations: [
      AppComponent,
      SidenavComponent,
      HeaderComponent,
      DashboardComponent,
      FigurecardComponent,
      RiptideComponent,
      RiptideNavbarComponent,
      DashboardCardSimpleComponent,
      MsgIconBtnComponent,
      RiptideFooterComponent,
      IdeeaPortalComponent,
      IdeeaNavbarComponent,
      DashboardCardListComponent,
      ProfileComponent,
      DooberComponent,
      DooberNavbarComponent,
      RatingComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MDBBootstrapModule.forRoot(),
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      ChartsModule,
      LayoutModule,
      FlexLayoutModule,
      MaterialModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      TbgChartsModule
   ],
   schemas: [
      NO_ERRORS_SCHEMA
   ],
   providers: [
      SidenavService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
