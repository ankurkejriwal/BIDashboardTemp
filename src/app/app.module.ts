import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../routes'
import { ChartsModule } from 'ng2-charts';
 


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CertHomeComponent } from './sections/cert-home/cert-home.component';
import { SectionLookupComponent } from './sections/section-lookup/section-lookup.component';
import { SectionDashBoardComponent } from './sections/section-dash-board/section-dash-board.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { BarChartComponent } from './Charts/bar-chart/bar-chart.component';
import { LineChartComponent } from './Charts/line-chart/line-chart.component';
import { PieChartComponent } from './Charts/pie-chart/pie-chart.component';
//import { appRoutes } from 'src/routes';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    CertHomeComponent,
    SectionLookupComponent,
    SectionDashBoardComponent,
    SectionHealthComponent,
    BarChartComponent,
    LineChartComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
