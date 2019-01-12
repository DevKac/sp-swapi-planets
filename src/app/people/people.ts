import { isNullOrUndefined } from 'util';

export class People {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworldUrl: string;
  filmsUrls: string[];
  speciesUrls: string[];
  vehiclesUrls: string[];
  starshipsUrls: string[];
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
      this.name = json['name'];
      this.height = json['height'];
      this.mass = json['mass'];
      this.hairColor = json['hair_color'];
      this.skinColor = json['skin_color'];
      this.eyeColor = json['eye_color'];
      this.birthYear = json['birth_year'];
      this.gender = json['gender'];
      this.homeworldUrl = json['homeworldUrl'];
      this.filmsUrls = json['films'];
      this.speciesUrls = json['species'];
      this.vehiclesUrls = json['vehicles'];
      this.starshipsUrls = json['starships'];
    } else {
      throw new Error(People.name + ': fillDataFromJson: json with data is null!');
    }
  }
}
