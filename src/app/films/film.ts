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
