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
