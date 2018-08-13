import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import {FormsModule} from '@angular/forms';//--
import { LoginService } from './login.service';//--
import {HttpClientModule} from '@angular/common/http';//--

@NgModule({
    imports: [CommonModule, LoginRoutingModule,FormsModule,HttpClientModule],
    declarations: [LoginComponent],
    providers:[LoginService],//--
})
export class LoginModule {}
