import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dogList = [{
    "id" : 1,
    "name" : "Oscar",
    "age" : "3",
    "sex" : "M",
    "image": "dog.jpg",
    "breed" : "Labrador",
    "characteristics" : "Friendly and fun loving."
  },{
    "id" : 2,
    "name" : "Nutella",
    "age" : "5",
    "sex" : "F",
    "image": "dog.jpg",
    "breed" : "Labrador",
    "characteristics" : "Friendly and fun loving."
  },{
    "id" : 3,
    "name" : "Ruby",
    "age" : "1",
    "sex" : "F",
    "image": "dog.jpg",
    "breed" : "Labrador",
    "characteristics" : "Friendly and fun loving."
  },{
    "id" : 4,
    "name" : "Honey",
    "age" : "8",
    "sex" : "F",
    "image": "dog.jpg",
    "breed" : "Labrador",
    "characteristics" : "Friendly and fun loving."
  },{
    "id" : 5,
    "name" : "Toffee",
    "age" : "2",
    "sex" : "M",
    "image": "dog.jpg",
    "breed" : "Labrador",
    "characteristics" : "Friendly and fun loving."
  }];



  constructor(public navCtrl: NavController, private modal : ModalController) {

  }

  imageClicked(petSelected){
    console.log('petSelected' + petSelected);
    const myModal = this.modal.create('ModalPage',{data : petSelected});
    myModal.present();
  }

}
