import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserpageComponent } from './userpage/userpage.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MasterComponent } from './master/master.component';
import { MessageComponent } from './message/message.component';
import { MessageviewComponent } from './messageview/messageview.component';
import { StaredMessageComponent } from './stared-message/stared-message.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    UserpageComponent,
    SidenavComponent,
    MasterComponent,
    MessageComponent,
    MessageviewComponent,
    StaredMessageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  BrowserAnimationsModule,  
    ToastrModule.forRoot(),
    FormsModule,ReactiveFormsModule,HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
