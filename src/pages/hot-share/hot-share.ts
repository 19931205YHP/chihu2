import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
import { UserServiceProvider } from '../../providers/user-service/user-service';

@IonicPage()
@Component({
  selector: 'page-hot-share',
  templateUrl: 'hot-share.html',
})
export class HotSharePage {

  data: any = [];

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.getdata();
  }

  getdata() {
    this.UserService.presentLoadingDefault();
    let url = "http://www.devonhello.com/chihu2/hot_share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "len=" + this.data.length, {
      headers: headers
    })
      .subscribe((res) => {
        this.UserService.presentLoadingDismiss();
        this.data = this.data.concat(res.json());
      });
  }

  doInfinite(infiniteScroll) {

    this.getdata();
    setTimeout(() => {
      infiniteScroll.complete();
    }, 1500);
  }

}
