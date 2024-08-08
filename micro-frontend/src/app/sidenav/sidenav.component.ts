import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule, MatNavList } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

interface NavItem {
  title: string;
  submenu?: NavItem[];
  isOpen?: boolean;
}

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
export class SidenavComponent  {
  isOpened = true; 
  isCollapsed = false; 
  constructor(private router : Router){}
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

  // toggleSubmenu(item: NavItem) {
  //   if (item.submenu) {
  //     item.isOpen = !item.isOpen;
  //   }
  // }
  // isExpanded = false;
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
  showIcon: boolean = true;
  submenuVisibility: boolean[] = [];

  toggleSubmenu(index: number): void {
    this.submenuVisibility.length = 0;
    this.submenuVisibility[index] = !this.submenuVisibility[index];
  }
  // menuItems = [
  //   { name: 'Masters', link: '/home' },
  //   { name: 'Security', link: '/about' },
  //   { name: 'Accession', link: '/services' },
  //   { name: 'Sample Handling', link: '/contact' },
  //   { name: 'Departmental Work', link: '' },
  //   { name: 'Reporting', link: '' },
  //   { name: 'Isofplex', link: '' },
  //   { name: 'Control', link: '' },
  //   { name: 'Blood Bank', link: '' },
  //   { name: 'Reports', link: '' },
  //   { name: 'Maintainance', link: '' },
  //   { name: 'Inventory', link: '' },
  //   { name: 'Others', link: '' },
  //   { name: 'Toxicology', link: '' },
  //   { name: 'Histopathology Ops', link: '' },
  //   // Add more menu items as needed
  // ];
  menuItems = [
    {
      name: 'Patient Master Index',
    },
    {
      name: 'Emergency',
      submenu: [
        {
          name: 'Lab ',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
          ],
        },
        {
          name: 'OPD Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
          ],
        },
        {
          name: 'Histo Accession',
          childmenu: [
            {
              name: 'Name',
            },
            {
              name: 'Teasein',
            },
          ],
        },
      ],
    },
    {
      name: 'ICU Dashboard',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'ADT',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'OPD Management',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'In Patient Billing',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'IP Patient Billing',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Patient Query',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Insurance',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'MIS',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'OP Package',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Doctor Accounting',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Supplier Bill Passing',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Inventory',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Inventory MIS',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Medical Store Report',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Equipment Maintainance',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Nursing Workbench',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'OT Scheduling',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Doctor Appointment Scheduling',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Purchase Management',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'EMR',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
    {
      name: 'Doctor Workbench for outpatient',
      submenu: [
        {
          name: 'Lab Reception',
          childmenu: [
            {
              name: 'Hello',
            },
            {
              name: 'Test',
            },
            {
              name: 'Name',
            },
            {
              name: 'Change',
            },
          ],
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
        {
          name: 'OPD Reception',
        },
        {
          name: 'Histo Accession',
        },
      ],
    },
  ];
  filterMenuList = this.menuItems;

  @ViewChild('sidenav') sidenav!: MatSidenav;
  isExpanded = false;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;

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
      this.showIcon = false;
      this.filterMenuList = this.menuItems.filter((option: any) => {
        return option.name.toLowerCase().includes(searchProject.toLowerCase());
      });
    } else {
      this.showIcon = true;
      this.filterMenuList = this.menuItems;
    }
  }
  logout() {
    debugger
    this.router.navigate(['auth']);
  }
}
