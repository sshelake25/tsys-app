import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserprofileService {

  constructor() {
    console.log('I am in service')
  }

  getUserName() {
    return 'TSYS';
  }

  getAddress() {

    let addr = {
      area: 'baner',
      pincode: 3131,
      locality: 'tower'
    };

    return addr;
  }

}
