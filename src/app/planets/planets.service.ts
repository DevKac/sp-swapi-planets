import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { isNullOrUndefined } from 'util';

@Injectable()
export class PlanetsService {
  private getPlanetsEndPoint: string;

  constructor (
    private http: HttpClient
  ) {
    this.getPlanetsEndPoint = environment.backEndPath + 'api/planets/';
  }

  public getAllPlanets(pageNumber: number = 1, searchedValue: string = null) {
    let url = this.getPlanetsEndPoint;
    url += '?page=' + pageNumber;
    if (!isNullOrUndefined(searchedValue) && searchedValue.length) {
      url += '&search=' + searchedValue;
    }

    return this.getAllPlanetsFromUrl(url);
  }
  public getAllPlanetsFromUrl(url: string = null) {
    if (isNullOrUndefined(url)) {
      url = this.getPlanetsEndPoint;
    }

    return this.http.get(url);
  }
  public getOnePlanetById(id: string) {
    let url = this.getPlanetsEndPoint;
    url += id;

    return this.getOnePlanetFromUrl(url);
  }
  public getOnePlanetFromUrl(url: string) {
    return this.http.get(url);
  }

}
