import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { BasicComponent } from '../../app-shared/abstracts/basic-component';
import { Planet } from '../planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planet-details',
  templateUrl: './planet-details.component.html',
  styleUrls: ['./planet-details.component.less']
})
export class PlanetDetailsComponent extends BasicComponent implements OnInit {
	@Input() planetId: string;
	public currentPlanet: Planet;

  constructor (
  	private planetsService: PlanetsService
  ) {
  	super();
  	// set default values for parameters
  	this.currentPlanet = null;

  }

  ngOnInit() {
    this.updateDataFromServices();
  }

  // PROTECTED REGION
  protected updateDataFromServices() {
  	this.showLoading('Loading details...');
  	if (!isNullOrUndefined(this.planetId) && this.planetId.length) {
  		this.planetsService.getOnePlanetById(this.planetId).subscribe(
  			data => {
  				// console.log(data);
  				this.currentPlanet = new Planet(data);
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
