import { isNullOrUndefined } from 'util';

export class Planet {
  id: string;
  name: string;
  rotationPeriod: string;
  orbitalPeriod: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surfaceWater: string;
  population: string;
  residentsUrls: string[];
  filmsUrls: string[];
  // todo
  /*
  "created": "2014-12-10T11:35:48.479000Z",
  "edited": "2014-12-20T20:58:18.420000Z",
  "url": "https://swapi.co/api/planets/2/"
  */

  constructor(json: any = null) {
    if (!isNullOrUndefined(json)) {
      this.fillDataFromJson(json);
    }
  }

  public fillDataFromJson(json: any) {
    if (!isNullOrUndefined(json)) {
      if (!isNullOrUndefined(json['url'])) {
        // todo: make it cleaner
        this.id = json['url'].split('/').slice(-2)[0];
      }
      this.name = json['name'];
      this.rotationPeriod = json['rotation_period'];
      this.orbitalPeriod = json['orbital_period'];
      this.diameter = json['diameter'];
      this.climate = json['climate'];
      this.gravity = json['gravity'];
      this.terrain = json['terrain'];
      this.surfaceWater = json['surface_water'];
      this.population = json['population'];
      this.residentsUrls = json['residents'];
      this.filmsUrls = json['films'];
    } else {
      throw new Error(Planet.name + ': fillDataFromJson: json with data is null!');
    }
  }
}
