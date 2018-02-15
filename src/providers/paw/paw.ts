import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

/*
  Generated class for the PawProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PawProvider {

  constructor(public http: Http) {
    console.log('Hello PawProvider Provider');
  }

  bookNewAppointment(data){
    console.log('Hello PawProvider Providerssss');
    return this.http.get("/JsonData/bookJson.json").map(res => res.json());
  }

}
