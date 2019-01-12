import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { BasicComponent } from '../../app-shared/abstracts/basic-component';
import { People } from '../people';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-people-info',
  templateUrl: './people-info.component.html',
  styleUrls: ['./people-info.component.less']
})
export class PeopleInfoComponent extends BasicComponent implements OnInit {
  @Input() peopleUrl: string;
  public currentPeople: People;

  constructor (
  	private peopleService: PeopleService
  ) {
  	super();
  	// set default values for parameters
  	this.currentPeople = null;
  }

  ngOnInit() {
    this.updateDataFromServices();
  }

  // PROTECTED REGION
  protected updateDataFromServices() {
  	this.showLoading('Loading info...');
  	if (!isNullOrUndefined(this.peopleUrl) && this.peopleUrl.length) {
  		this.peopleService.getOnePeopleFromUrl(this.peopleUrl).subscribe(
  			data => {
  				// console.log(data);
  				this.currentPeople = new People(data);
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
