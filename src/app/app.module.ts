import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FoooterComponent } from './foooter/foooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    ListUserComponent,
    MainContainerComponent,
    FoooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
