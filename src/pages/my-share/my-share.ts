import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';
/**
 * Generated class for the MySharePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-share',
  templateUrl: 'my-share.html',
})
export class MySharePage {

  data: any = [];
  uid: any;

  constructor(public http: Http, public UserService: UserServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.get("id")) {
      this.uid = this.navParams.get("id");
    } else {
      this.uid = this.UserService._user._id;
    }
    this.getdata();
  }

  getdata() {

    let url = "http://www.devonhello.com/chihu/my_share";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.uid, {
      headers: headers
    })
      .subscribe((res) => {
        this.data = res.json();

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySharePage');
  }

}
