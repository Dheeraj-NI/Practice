import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';
import { NavigationHeaderComponent } from './common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from './common/components/title-header/title-header.component';
import { TopHeaderComponent } from './common/components/top-header/top-header.component';
import { NavbarwithforloopComponent } from './navbarwithforloop/navbarwithforloop.component';
import { SidenavComponent } from './sidenav/sidenav.component';

interface NavItem {
  title: string;
  submenu?: NavItem[];
  isOpen?: boolean;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'micro-frontend';
  
}
