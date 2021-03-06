import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';

/*
  Generated class for the CoughMeds page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';

@Component({
  selector: 'page-cough-meds',
  templateUrl: 'cough-meds.html'
})
export class CoughMedsPage {
  currentPage: number;
  AbsoluteURL: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController) {
  	this.menu = menu;
    this.AbsoluteURL = GlobalVars.getAbsoluteURL();
    this.currentPage = -1;
  }
  showMenu() {
  	this.menu.open();
  }
  transitPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CoughMedsPage');
  }

}
