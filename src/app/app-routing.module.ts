import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DriverComponent } from './driver/driver.component';
import { OrderlistComponent } from './admin/orders/orderlist/orderlist.component';
import { NeworderComponent } from './admin/orders/neworder/neworder.component';
import { UserslistComponent } from './admin/users/userslist/userslist.component';
import { NewuserComponent } from './admin/users/newuser/newuser.component';
import { DetailsorderComponent } from './admin/orders/detailsorder/detailsorder.component';
import { EdituserComponent } from './admin/users/edituser/edituser.component';
import { UndeliveredComponent } from './driver/orders/undelivered/undelivered.component';
import { DeliveredComponent } from './driver/orders/delivered/delivered.component';
import { EditorderComponent } from './admin/orders/editorder/editorder.component';
import { DetailsComponent } from './driver/orders/details/details.component';
import { OrdersDeliveredComponent } from './admin/orders/orders-delivered/orders-delivered.component';
import { OrdersUnDeliveredComponent } from './admin/orders/orders-un-delivered/orders-un-delivered.component';
import { CheckeddialogComponent } from './admin/orders/orderlist/checkeddialog/checkeddialog.component';
import { CheckedComponent } from './admin/orders/orderlist/checked.component';


const routes: Routes = [
{
  path: "",
  component: LoginComponent
},


{
  path: "admin",
  component: AdminComponent,
  children: [
    {
      path: "",
      component: OrderlistComponent
    },
    {
      path: "new",
      component: NeworderComponent
    },
    {
      path: "delivered",
      component: OrdersDeliveredComponent
    },
    {
      path: "undelivered",
      component: OrdersUnDeliveredComponent
    },
    {
      path: "checked",
      component: CheckedComponent
    },
    {
      path: "edit/:id",
      component: EditorderComponent
    }
  ]
},
{
  path: "admin/users",
  component: AdminComponent,
  children: [
    {
      path: "",
      component: UserslistComponent
    },
    {
      path: "new",
      component: NewuserComponent
    },
    {
      path: "edit/:id",
      component: EdituserComponent
    }
  ]
},


{
  path: "driver",
  component: DriverComponent,
  children: [
    {
      path: "",
      component: UndeliveredComponent
    },

    {
      path: "delivered",
      component: DeliveredComponent
    },

    {
      path: "details/:id",
      component: DetailsComponent
    }
  ]
},
{path: '404', component: LoginComponent},
{path: '**', redirectTo: '/404'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
