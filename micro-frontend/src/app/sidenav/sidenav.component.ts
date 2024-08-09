import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CommonModule } from '@angular/common';
import { NavigationEnd, NavigationStart, Router, RouterLink, RouterOutlet } from '@angular/router';
import { dummy } from './dummy-sidenav';


@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    MatNavList,
    MatListModule,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    RouterOutlet,
    RouterLink,
    MatInputModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent implements OnInit {
  @ViewChild('searchInput') searchBar!: ElementRef<HTMLInputElement>;
  submenuVisibility: boolean[] = [];
  menuItems = dummy;
  filterMenuList = this.menuItems;

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = false;  
  isShowing = false; 

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    // Check if the pressed key is '/'
    if (event.key === '/') {
      event.preventDefault(); // Prevent default action (optional)
      this.focusSearchBar();
    }
  }

  focusSearchBar() {
    if (this.searchBar) {
      this.searchBar.nativeElement.focus();
    }
  }
  
  constructor(private router: Router) {}  
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.isExpanded = false;
      this.isShowing = false;
      }
    });
  }
  

  toggleSubmenu(index: number): void {
    this.submenuVisibility.length = 0;
    this.submenuVisibility[index] = !this.submenuVisibility[index];
  }

  // menuItems = [
  //   {
  //     name: 'Patient Master Index',
  //   },
  //   {
  //     name: 'Emergency',
  //   },
  //   {
  //     name: 'ICU Dashboard',

  //   },
  //   {
  //     name: 'ADT',

  //   },
  //   {
  //     name: 'OPD Management',

  //   },
  //   {
  //     name: 'In Patient Billing',

  //   },
  //   {
  //     name: 'IP Patient Billing',

  //   },
  //   {
  //     name: 'Patient Query',

  //   },
  //   {
  //     name: 'Insurance',

  //   },
  //   {
  //     name: 'MIS',

  //   },
  //   {
  //     name: 'OP Package',

  //   },
  //   {
  //     name: 'Doctor Accounting',

  //   },
  //   {
  //     name: 'Supplier Bill Passing',

  //   },
  //   {
  //     name: 'Inventory',

  //   },
  //   {
  //     name: 'Inventory MIS',

  //   },
  //   {
  //     name: 'Medical Store Report',

  //   },
  //   {
  //     name: 'Equipment Maintainance',

  //   },
  //   {
  //     name: 'Nursing Workbench',

  //   },
  //   {
  //     name: 'OT Scheduling',

  //   },
  //   {
  //     name: 'Doctor Appointment Scheduling',

  //   },
  //   {
  //     name: 'Purchase Management',

  //   },
  //   {
  //     name: 'EMR',

  //   },
  //   {
  //     name: 'Doctor Workbench for outpatient',

  //   },
  // ];
 

  openClose() {
    if (this.isExpanded) {
      this.isExpanded = false;
      this.isShowing = false;
    } else {
      this.isExpanded = true;
      this.isShowing = true;
    }
  }
  filterMenuItems(searchProject: any) {
    if (searchProject != '' && searchProject != ' ') {
      this.filterMenuList = this.menuItems.filter((option: any) => {
        return option.name.toLowerCase().includes(searchProject.toLowerCase());
      });
    } else {      
      this.filterMenuList = this.menuItems;
    }
  }
  logout() {    
    this.router.navigate(['auth']);
  }
}
