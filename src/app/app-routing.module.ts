import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserpageComponent } from './userpage/userpage.component';
import { MasterComponent } from './master/master.component';
import { authGuard } from './guards/auth.guard';
import { MessageComponent } from './message/message.component';
import { MessageviewComponent } from './messageview/messageview.component';
import { StaredMessageComponent } from './stared-message/stared-message.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'users',component:UserpageComponent,canActivate:[authGuard]},
  {path:'admin',component:MasterComponent,canActivate:[authGuard]},
  {path:'viewDetails/:id',component:MessageviewComponent},
  {path:'stared',component:StaredMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
