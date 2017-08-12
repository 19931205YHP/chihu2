import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-collect-answer',
  templateUrl: 'collect-answer.html',
})
export class CollectAnswerPage {

  //数据存储
  items = [];
  id;

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.id = this.navParams.data._id;
    this.getdata();
  }

  //获取数据
  getdata() {

    let url = "http://www.devonhello.com/chihu2/my_collect_question";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "id=" + this.id + "&type=0", {
      headers: headers
    })
      .subscribe((res) => {

        this.items = this.items.concat(res.json());
      });
  }

}
