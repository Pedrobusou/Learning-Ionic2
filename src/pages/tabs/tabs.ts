import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { SettingsPage } from '../settings/settings';
import { NewTabPage } from '../newTab/newTab';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = SettingsPage;
  tab4Root: any = NewTabPage;

  constructor() {

  }
}
