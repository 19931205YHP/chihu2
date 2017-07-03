import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NoticePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {

  page1: any = 'NoticeInformPage';
  page2: any = 'NoticeThankPage';
  page3: any = 'NoticeForkPage';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

}
