import { isNullOrUndefined } from 'util';

export class Film {
  title: string;
  episodeId: string;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: string;
  charactersUrls: string[];
  planetsUrls: string[];
  starshipsUrls: string[];
  vehiclesUrls: string[];
  speciesUrls: string[];
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
      this.title = json['title'];
      this.episodeId = json['episode_id'];
      this.openingCrawl = json['opening_crawl'];
      this.director = json['director'];
      this.producer = json['producer'];
      this.releaseDate = json['release_date'];
      this.charactersUrls = json['characters'];
      this.planetsUrls = json['planets'];
      this.starshipsUrls = json['starships'];
      this.vehiclesUrls = json['vehicles'];
      this.speciesUrls = json['species'];    
    } else {
      throw new Error(Film.name + ': fillDataFromJson: json with data is null!');
    }
  }
}
