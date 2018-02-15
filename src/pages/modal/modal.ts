import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  petSelected = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private view:ViewController) {
  }

  ionViewDidLoad() {
    this.petSelected = this.navParams.data.data;
  }

  closeModal(){
    this.view.dismiss();

  }


  bookAppointment(){
    console.log('bookAppointment bookAppointment' + this.petSelected);
    this.navCtrl.push("AppointmentPage",{data : this.petSelected});
  }

}
