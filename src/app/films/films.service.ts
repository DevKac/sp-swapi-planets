import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class FilmsService {
  private getFilmEndPoint: string;

  constructor (
    private http: HttpClient
  ) {
    this.getFilmEndPoint = environment.backEndPath + 'api/films/';
  }

  public getOneFilmById(id: string) {
    let url = this.getFilmEndPoint;
    url += id;

    return this.getOneFilmFromUrl(url);
  }
  public getOneFilmFromUrl(url: string) {
    return this.http.get(url);
  }
}
