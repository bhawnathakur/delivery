import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { DriverComponent } from './driver/driver.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { UsersComponent } from './admin/users/users.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { OrderService } from './services/order.service';
import { UserService } from './services/user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { OrderlistComponent } from './admin/orders/orderlist/orderlist.component';
import { UserslistComponent } from './admin/users/userslist/userslist.component';
import { NeworderComponent } from './admin/orders/neworder/neworder.component';
import { NewuserComponent } from './admin/users/newuser/newuser.component';
import { EdituserComponent } from './admin/users/edituser/edituser.component';
import { ConstantsService } from './services/constants.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DetailsorderComponent } from './admin/orders/detailsorder/detailsorder.component';
import { EditorderComponent } from './admin/orders/editorder/editorder.component';
import { DeliveredComponent } from './driver/orders/delivered/delivered.component';
import { UndeliveredComponent } from './driver/orders/undelivered/undelivered.component';
import { DeliveredDialogComponent } from './driver/orders/delivered-dialog/delivered-dialog.component';
import { DatePipe } from '@angular/common';
import { DetailsComponent } from './driver/orders/details/details.component';
import { NavdriverComponent } from './driver/orders/navdriver/navdriver.component';
import { UploadService } from './services/upload.service';
import { UploadComponent } from './upload/upload.component';
import { DeletedialogComponent } from './admin/orders/orderlist/deletedialog/deletedialog.component';
import { OrdersDeliveredComponent } from './admin/orders/orders-delivered/orders-delivered.component';
import { OrdersUnDeliveredComponent } from './admin/orders/orders-un-delivered/orders-un-delivered.component';
import { CheckeddialogComponent } from './admin/orders/orderlist/checkeddialog/checkeddialog.component';
import { CheckedComponent } from './admin/orders/orderlist/checked.component';
import { UncheckeddialogComponent } from './admin/orders/orderlist/uncheckeddialog/uncheckeddialog.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    AdminComponent,
    DriverComponent,
    OrdersComponent,
    UsersComponent,
    OrderlistComponent,
    UserslistComponent,
    NeworderComponent,
    NewuserComponent,
    EdituserComponent,
    DetailsorderComponent,
    EditorderComponent,
    DeliveredComponent,
    UndeliveredComponent,
    DeliveredDialogComponent,
    DetailsComponent,
    NavdriverComponent,
    UploadComponent,
    DeletedialogComponent,
    OrdersDeliveredComponent,
    OrdersUnDeliveredComponent,
    CheckeddialogComponent,
    CheckedComponent,
    UncheckeddialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule,
    FontAwesomeModule,
    MatProgressSpinnerModule,
    NgSelectModule

  ],
  providers: [OrderService, UserService, ConstantsService, DatePipe, UploadService],
  entryComponents: [ DeliveredDialogComponent,
    DeletedialogComponent,
    CheckeddialogComponent,
    UncheckeddialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
