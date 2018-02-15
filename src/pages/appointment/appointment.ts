import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { DatePickerModule } from 'ionic3-datepicker';
import { DatePicker } from '@ionic-native/date-picker';
import { PawProvider } from '../../providers/paw/paw';

/**
 * Generated class for the AppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

// @ViewChild(DatePickerDirective) private datepickerDirective:DatePickerDirective;
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {
  date;
  latitude;
  longitude;
  location;
  time;
  message;
  appointmentStatus;

  constructor(private pawProvider:PawProvider, public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation, private datePicker: DatePicker) {


  }

  showDatePicker(){

        this.datePicker.show({
          date: new Date(),
          mode: 'date',
          androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(
          date => console.log('Got date: ', date),
          err => console.log('Error occurred while getting date: ', err)
        );
  }


  // public closeDatepicker(){
  //      this.datepickerDirective.modal.dismiss();
  //  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage' + this.navParams);
  }

  book(){
    console.log('Book');
    var data = {
      "date" : this.date,
      "latitude" : this.latitude,
      "longitude" : this.longitude,
      "location" : this.location,
      "time" : this.time,
      "message" : this.message
    }

    console.log("DATA" + data);

    this.pawProvider.bookNewAppointment(data).subscribe(appointment => {
      this.appointmentStatus = appointment.status;
      console.log("appointmentStatus" + this.appointmentStatus);
    });
  }

  detectLocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
        console.log('getCurrentPosition AppointmentPage' +  resp.coords.latitude);
        console.log('getCurrentPosition AppointmentPage' +  resp.coords.longitude);
        this.longitude = resp.coords.longitude;
        this.latitude = resp.coords.latitude;
        this.location = this.longitude + " " +this.latitude ;
     // resp.coords.latitude
     // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }



}
