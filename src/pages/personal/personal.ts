import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserServiceProvider } from '../../providers/user-service/user-service';
import { Headers, Http } from '@angular/http';

/**
 * Generated class for the PersonalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {

  isme: boolean = true;
  page1: any = 'PersonalDetailsPage';
  page2: any = 'PersonalHomePage';
  name: '';
  userimg: '';
  _id = 0;
  chatParams = {
    _id: this._id,
    tar: null
  };

  constructor(public UserService: UserServiceProvider, public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.get("_id")) {
      this._id = this.navParams.get("_id");
      this.chatParams._id = this._id;
      this.chatParams.tar = 'TA';
      this.getdata();
      this.isme = false;
    } else {
      this.chatParams._id = this.UserService._user._id;
      this.chatParams.tar = '我';
      this.name = this.UserService._user.nickname;
      this.userimg = this.UserService._user.userimg;
    }
    this.UserService.presentLoadingDefault();
  }


  getdata() {

    let url = "http://www.devonhello.com/chihu2/getuserdata";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this._id + '', {
      headers: headers
    })
      .subscribe((res) => {
        this.name = res.json()[0].name;
        this.userimg = res.json()[0].userimg;
      });
  }

}
