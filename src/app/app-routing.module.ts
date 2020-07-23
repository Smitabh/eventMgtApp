import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { EditEventComponent } from './edit-event/edit-event.component';

const routes: Routes =([
  { path:'', component:LoginComponent},
  { path:'dashboard' ,component: DashboardComponent},
  { path:'createEvent',component:CreateEventComponent},
  { path:'AllEvents',component:AllEventsComponent},
  { path: 'EditEvent' , component:EditEventComponent}
   // {path:'user',component:UserComponent},
  //{path:'register',component:UserComponent}
]);


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
