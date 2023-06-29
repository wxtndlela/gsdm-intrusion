import { Component, OnInit } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { GlobalSettings } from '../../../services/global.service';
import { UserModal } from '../../../providers/user.modal';
import { AuthService } from '../../../services/auth.service';
import { ModalController } from '@ionic/angular';
import { ProfileComponent } from '../../user-pages/profile/profile.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [NgbDropdownConfig]
})

export class NavbarComponent implements OnInit {
  public iconOnlyToggled = false;
  public sidebarToggled = false;
  User: UserModal;

  constructor(
    config: NgbDropdownConfig,
    private global: GlobalSettings,
    public auth: AuthService,
    private modalCtrl: ModalController
  ) {
    config.placement = 'bottom-right';
  }

  ngOnInit() {
    this.global.get_User().subscribe(val => {
      this.User = val;
      // console.log('User', this.User)
    })
    
  }

  // toggle sidebar in small devices
  toggleOffcanvas() {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  // toggle sidebar
  toggleSidebar() {
    let body = document.querySelector('body');
    if ((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
      this.iconOnlyToggled = !this.iconOnlyToggled;
      if (this.iconOnlyToggled) {
        body.classList.add('sidebar-icon-only');
      } else {
        body.classList.remove('sidebar-icon-only');
      }
    } else {
      this.sidebarToggled = !this.sidebarToggled;
      if (this.sidebarToggled) {
        body.classList.add('sidebar-hidden');
      } else {
        body.classList.remove('sidebar-hidden');
      }
    }
  }

  // toggle right sidebar
  // toggleRightSidebar() {
  //   document.querySelector('#right-sidebar').classList.toggle('open');
  // }

  /**
   * open_profile
   */
  public async open_profile() {
    const modal = await this.modalCtrl.create({
      cssClass: 'modal-medium',
      component: ProfileComponent
    })

    return modal.present();
  }

}
