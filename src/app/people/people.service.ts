import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class PeopleService {
  private getPeopleEndPoint: string;

  constructor (
    private http: HttpClient
  ) {
    this.getPeopleEndPoint = environment.backEndPath + 'api/people/';
  }

  public getOnePeopleById(id: string) {
    let url = this.getPeopleEndPoint;
    url += id;

    return this.getOnePeopleFromUrl(url);
  }
  public getOnePeopleFromUrl(url: string) {
    return this.http.get(url);
  }
}
