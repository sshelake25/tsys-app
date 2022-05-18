import { Component, OnInit } from '@angular/core';
import { UserprofileService } from '../userprofile.service';

@Component({
  selector: 'tsys-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userServ: UserprofileService) { }

  ngOnInit(): void {

    let myaddress = this.userServ.getAddress();

    console.log(myaddress);

  }

}
