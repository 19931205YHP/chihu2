import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RongCloudProvider } from '../../providers/rong-cloud/rong-cloud';

/**
 * Generated class for the MessagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var document: any;
@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {

  data:any = [];
  eventSub;

  constructor( public rc: RongCloudProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.rc.getConversationList().then((list)=>{
      alert( JSON.stringify(list) );
    });
    this.eventSub = this.rc.rong_data.subscribe((message) => {
      alert('sub:'+JSON.stringify( message ));
    })
  }

  ionViewCanLeave(){
    if(this.eventSub){
      this.eventSub.unsubscribe();
    }
  }

  chat( targetId ){
    this.navCtrl.push('ChatPage',{
      targetId: targetId
    } );
  }

}
