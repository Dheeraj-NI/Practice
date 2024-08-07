import { AfterViewInit, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TopHeaderComponent } from './common/components/top-header/top-header.component';
import { TitleHeaderComponent } from './common/components/title-header/title-header.component';
import { NavigationHeaderComponent } from './common/components/navigation-header/navigation-header.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList, MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarwithforloopComponent } from './navbarwithforloop/navbarwithforloop.component';

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
    SidenavComponent,
    MatSidenavModule,
    MatNavList,
    MatListModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    TopHeaderComponent,
    TitleHeaderComponent,
    NavigationHeaderComponent,
    NavbarwithforloopComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements  AfterViewInit {
  title = 'micro-frontend';
  isOpened = true; 
  isCollapsed = false; 
  isExpanded = false;
  navItems: NavItem[] = [
    { title: 'Home' },
    { title: 'About' },
    {
      title: 'Services',
      submenu: [
        {
          title: 'Web Design',
          submenu: [{ title: 'UI/UX Design' }, { title: 'Responsive Design' }],
        },
        {
          title: 'SEO',
          submenu: [{ title: 'UI/UX ' }, { title: ' Design' }],
        },
        { title: 'Marketing' },
      ],
    },
    { title: 'Contact' },
  ];
  ngAfterViewInit() {    
    const sidebar = document.querySelector('#sidebar');
    if (sidebar) {
      this.isExpanded = sidebar.classList.contains('expand');
    }
  }

  toggleSubmenu(item: NavItem) {
    if (item.submenu) {
      item.isOpen = !item.isOpen;
    }
  }
  open() {    
    const hamBurger: HTMLElement | null = document.querySelector('.toggle-btn');

    if (hamBurger) {
      const sidebar = document.querySelector('#sidebar');
      if (sidebar) {
        sidebar.classList.toggle('expand');
        this.isExpanded = sidebar.classList.contains('expand');
      }
    }
  }

  toggleSidenav() {
    this.isOpened = !this.isOpened;
    this.isCollapsed = !this.isOpened; // Set collapsed state based on opened state
  }
}
