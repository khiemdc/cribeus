import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav.component';
import { SidenavService } from './sidenav.service';


@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
	styleUrls: ['./sidenav.component.scss']
})
export class HeaderComponent {
	
	constructor(private sidenavService: SidenavService) {

   }
	toggleActive = false;

	toggleRightSidenav() {
		this.toggleActive = !this.toggleActive;
		this.sidenavService.toggle();

    console.log('Clicked');
	}
	
}