import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';

// import { AddHouseComponent } from './house/add-house/add-house.component';
// import { EditHouseComponent } from './house/edit-house/edit-house.component';
// import { ViewHouseComponent } from './house/view-house/view-house.component';
// import { AddLandComponent } from './land/add-land/add-land.component';
// import { EditLandComponent } from './land/edit-land/edit-land.component';
// import { ViewLandComponent } from './land/view-land/view-land.component';
// import { AddPaymentComponent } from './payment/add-payment/add-payment.component';
// import { EditPaymentComponent } from './payment/edit-payment/edit-payment.component';
// import { ViewPaymentComponent } from './payment/view-payment/view-payment.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent,  ]
})
export class LayoutModule {}
