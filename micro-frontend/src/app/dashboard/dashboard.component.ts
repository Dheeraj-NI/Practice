import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatNavList, MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavigationHeaderComponent } from '../common/components/navigation-header/navigation-header.component';
import { TitleHeaderComponent } from '../common/components/title-header/title-header.component';
import { TopHeaderComponent } from '../common/components/top-header/top-header.component';
import { NavbarwithforloopComponent } from '../navbarwithforloop/navbarwithforloop.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { RouterModule, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SidenavComponent,
    RouterOutlet,
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
    NavbarwithforloopComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
