import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllPlanetsComponent } from './app-routes/all-planets/all-planets.component';
import { OnePlanetComponent } from './app-routes/one-planet/one-planet.component';

// Route Configuration
export const routes: Routes = [
  {
    path: '',
    component: AllPlanetsComponent
  },
  {
    path: 'planets',
    component: AllPlanetsComponent
  },
  {
    path: 'planet/:id',
    component: OnePlanetComponent
  },
  // otherwise redirect to index
  {
    path: '**',
    redirectTo: ''
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
