import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CustomerModule} from "./modules/customer/customer.module";
import {BasicInforCustomerModule} from "./modules/basic-infor-customer/basic-infor-customer.module";
import {CategoryModule} from "./modules/category/category.module";
import {ContractModule} from "./modules/contract/contract.module";
import {EmployeeModule} from "./modules/employee/employee.module";
import {ProductModule} from "./modules/product/product.module";
import {RoleModule} from "./modules/role/role.module";
import {StatusModule} from "./modules/status/status.module";
import {UserModule} from "./modules/user/user.module";
import {UserHasRoleModule} from "./modules/user-has-role/user-has-role.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CustomerModule,
    BasicInforCustomerModule,
    CategoryModule,
    ContractModule,
    EmployeeModule,
    ProductModule,
    RoleModule,
    StatusModule,
    UserModule,
    UserHasRoleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
