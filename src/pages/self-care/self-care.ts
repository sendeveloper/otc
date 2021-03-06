import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams, MenuController, Content } from 'ionic-angular';
import { AlertController, ToastController, LoadingController } from 'ionic-angular';

/*
  Generated class for the SelfCare page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
import { GlobalVars } from '../providers/globalvars';
import { AdultTakeMobileIntroPage } from '../adult-take-mobile-intro/adult-take-mobile-intro';
import { ChildTakeMobileIntroPage } from '../child-take-mobile-intro/child-take-mobile-intro';

@Component({
  selector: 'page-self-care',
  templateUrl: 'self-care.html'
})
export class SelfCarePage {
@ViewChild(Content) content: Content;
  dsearch: string;
  pmode: number;
  page: number;
  topPx: number;
  noscroll: boolean;
  CouponData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menu: MenuController,
              public alertCtrl: AlertController, public loadingCtrl: LoadingController, 
              public toastCtrl: ToastController, ) {
    this.dsearch = "";
    this.menu = menu;
    this.pmode = 0;
    this.page = 0;
    this.topPx = 0;
    this.noscroll = false;
  }
  showMenu() {
    this.menu.open();
  }
  hereGo() {
    if (this.dsearch == "")
      this.showToast("First name please.");
    else
    {
      this.pmode = 1;
      this.page = 0;
      this.noscroll = false;
    }
  }
  showWhy() {
    this.showToast("For a great conversational user experience. No information is stored.");
  }
  showToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
  gotoPage(p: number) {
    GlobalVars.setFirstname(this.dsearch);
    if (p == 0)
      this.navCtrl.push(AdultTakeMobileIntroPage);
    else
      this.navCtrl.push(ChildTakeMobileIntroPage);
  }
  transitPage(p: number){
    this.page = p;
    if (p > 0){
      this.noscroll = true;
      this.topPx = this.content.getContentDimensions().scrollTop;
    }
    else
      this.noscroll = false;
  }
  ionViewDidLoad() {
    // this.loadData();
    console.log('ionViewDidLoad DrugPage');
  }

}
