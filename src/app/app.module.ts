import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FoooterComponent } from './foooter/foooter.component';
import { HighlightDirective } from './highlight.directive';
import { ImgurlPipe } from './imgurl.pipe';
import { UserprofileService } from './userprofile.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserComponent,
    ListUserComponent,
    MainContainerComponent,
    FoooterComponent,
    HighlightDirective,
    ImgurlPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [UserprofileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
