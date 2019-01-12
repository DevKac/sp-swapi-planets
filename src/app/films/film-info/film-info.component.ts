import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { BasicComponent } from '../../app-shared/abstracts/basic-component';
import { Film } from '../film';
import { FilmsService } from '../films.service';

@Component({
  selector: 'app-film-info',
  templateUrl: './film-info.component.html',
  styleUrls: ['./film-info.component.less']
})
export class FilmInfoComponent extends BasicComponent implements OnInit {
  @Input() filmUrl: string;
  public currentFilm: Film;

  constructor (
  	private filmsService: FilmsService
  ) {
  	super();
  	// set default values for parameters
  	this.currentFilm = null;
  }

  ngOnInit() {
    this.updateDataFromServices();
  }

  // PROTECTED REGION
  protected updateDataFromServices() {
  	this.showLoading('Loading info...');
  	if (!isNullOrUndefined(this.filmUrl) && this.filmUrl.length) {
  		this.filmsService.getOneFilmFromUrl(this.filmUrl).subscribe(
  			data => {
  				// console.log(data);
  				this.currentFilm = new Film(data);
          this.hideLoading();
  			}, error => {
  				this.showError('Data could not be loaded, please try refreshing this page.', 0, true);
  			});
  	} else {
  		this.showError('This data could not be loaded, please try loading another page..', 0, true);
  	}
  }
  // End of PROTECTED REGION

}
