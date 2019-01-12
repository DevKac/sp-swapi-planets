import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { AllPlanetsComponent } from './app-routes/all-planets/all-planets.component';
import { OnePlanetComponent } from './app-routes/one-planet/one-planet.component';
import { ErrorComponent } from './app-shared/alerts/error/error.component';
import { LoadingComponent } from './app-shared/alerts/loading/loading.component';
import { PlanetsTableComponent } from './planets/planets-table/planets-table.component';
import { PlanetDetailsComponent } from './planets/planet-details/planet-details.component';
import { PeopleInfoComponent } from './people/people-info/people-info.component';
import { FilmInfoComponent } from './films/film-info/film-info.component';
import { FilmsService } from './films/films.service';
import { PeopleService } from './people/people.service';
import { PlanetsService } from './planets/planets.service';


@NgModule({
  declarations: [
    AppComponent,
    AllPlanetsComponent,
    OnePlanetComponent,
    ErrorComponent,
    LoadingComponent,
    PlanetsTableComponent,
    PlanetDetailsComponent,
    PeopleInfoComponent,
    FilmInfoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    routing
  ],
  providers: [
    FilmsService,
    PeopleService,
    PlanetsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
