import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MenuItem {
  title: string;
  icon: string;
  link: string;
  children?: MenuItem[]; // Optional for nested items
  isExpanded?: boolean; // For toggling
}

@Component({
  selector: 'app-navbarwithforloop',
  standalone: true,
  imports: [ CommonModule,],
  templateUrl: './navbarwithforloop.component.html',
  styleUrl: './navbarwithforloop.component.scss'
})
export class NavbarwithforloopComponent {
  isExpanded = true;
  menuItems: MenuItem[] = [
    { title: 'Profile', icon: 'lni-user', link: '#',isExpanded:false },
    { title: 'Task', icon: 'lni-agenda', link: '#',isExpanded:false },
    {
      title: 'Auth', icon: 'lni-protection', link: '#',isExpanded:false, children: [
        { title: 'Login', icon: '', link: '#',isExpanded:false },
        { title: 'Register', icon: '', link: '#',isExpanded:false }
      ]
    },
    {
      title: 'Multi Level', icon: 'lni-layout', link: '#',isExpanded:false, children: [
        {
          title: 'Two Links', icon: '', link: '#',isExpanded:false, children: [
            { title: 'Link 1', icon: '', link: '#',isExpanded:false },
            { title: 'Link 2', icon: '', link: '#',isExpanded:false }
          ]
        }
      ]
    },
    { title: 'Notification', icon: 'lni-popup', link: '#',isExpanded:false },
    { title: 'Setting', icon: 'lni-cog', link: '#',isExpanded:false },
    { title: 'Logout', icon: 'lni-exit', link: '#',isExpanded:false }
  ];

  toggleMenu(item: MenuItem): void {
    // item.isExpanded = false;
    
    if (item.children) {
      item.isExpanded = !item.isExpanded;
    }
  }
}
