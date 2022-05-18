import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tsys-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  myApiData: any;

  myTitle = "SSSSS";


  constructor(private myhttp: HttpClient) { }

  ngOnInit(): void {
    const cmpyName = 'TSYS';


    this.myhttp.get('https://reqres.in/api/users?page=2')
      .subscribe(
        (mydata) => this.myApiData = mydata
      );
  }

}
