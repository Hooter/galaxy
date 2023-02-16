import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardResolver } from './resolver/dashboard.resolver';
import * as fromServices from './services';
import * as fromComponents from './components';

@NgModule({
  declarations: [DashboardComponent, fromComponents.components],
  imports: [SharedModule, DashboardRoutingModule],
  providers: [fromServices.services, DashboardResolver],
})
export class DashboardModule {}
