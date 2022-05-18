import { Component } from '@angular/core';
import { UserprofileService } from './userprofile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'second';

  constructor(private myUserSrv: UserprofileService) {
    console.log('i am in app component')
    let myname = this.myUserSrv.getUserName();
    console.log(myname)
  }

}
