import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './sidenav/menu-button.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RiptideComponent } from './riptide/riptide.component';
import { IdeeaPortalComponent } from './ideea-portal/ideea-portal.component';
import { SidenavService } from './sidenav/sidenav.service';
import { MaterialModule } from './material.module';

@NgModule({
   declarations: [
      AppComponent,
      SidenavComponent,
      HeaderComponent,
      DashboardComponent,
      RiptideComponent,
      IdeeaPortalComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      LayoutModule,
      FlexLayoutModule,
      MaterialModule,
      MatToolbarModule,
      MatButtonModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule
   ],
   providers: [SidenavService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
