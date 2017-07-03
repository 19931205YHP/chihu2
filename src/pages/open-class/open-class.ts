import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Headers, Http } from '@angular/http';
/**
 * Generated class for the OpenClassPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-open-class',
  templateUrl: 'open-class.html',
})
export class OpenClassPage {

  iclass:any = '分类';
  items:any = []

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {
    this.iclass = this.navParams.get('class');
    this.getdata();
}

  getdata(){
    let url = "http://www.devonhello.com/chihu2/workclass";

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.post(url, "type=1" + "&len=" + this.items.length + "&iclass=" + this.iclass, {
      headers: headers
    })
      .subscribe((res) => {
        this.items = res.json();
        
      });
  }

  //打开作品
  pushArticlePage(_id) {
    this.navCtrl.push('ArticlePage', {
      _id: _id
    });
  }

}
