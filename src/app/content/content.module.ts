import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartByTimeComponent } from './chart/chart-by-time/chart-by-time.component';

@NgModule({
  declarations: [ContentComponent, ChartByTimeComponent],
  imports: [CommonModule, ContentRoutingModule, NgChartsModule],
  providers: [],
})
export class ContentModule {}
