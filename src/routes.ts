import {Routes} from '@angular/router';
import { CertHomeComponent } from './app/sections/cert-home/cert-home.component';
import { SectionDashBoardComponent } from './app/sections/section-dash-board/section-dash-board.component';
import { SectionHealthComponent } from './app/sections/section-health/section-health.component';
import { SectionLookupComponent } from './app/sections/section-lookup/section-lookup.component';


export const appRoutes: Routes = [
    {path: 'home',component: CertHomeComponent},
    {path: 'dashboard', component: SectionDashBoardComponent},
    {path: 'lookup', component:SectionLookupComponent},
    {path: 'health',component:SectionHealthComponent},

    {path: '',redirectTo: '/home',pathMatch: 'full'}
];