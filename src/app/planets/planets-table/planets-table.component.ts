import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

import { BasicComponent } from '../../app-shared/abstracts/basic-component';
import { Planet } from '../planet';
import { PlanetsService } from '../planets.service';

@Component({
  selector: 'app-planets-table',
  templateUrl: './planets-table.component.html',
  styleUrls: ['./planets-table.component.less']
})
export class PlanetsTableComponent extends BasicComponent implements OnInit {
  public totalNumberOfPlanets: number;
  public numberOfPlanetsPerPage: number;
  public possibleNumberOfPlanetsPerPage: number[];
  public currentPage: number;
  public listOfPlanets: Planet[];
  public searchedValue: string;
  public searchActive: boolean;

  constructor (
    private planetsService: PlanetsService
  ) {
    super();
    // set default values for parameters
    this.totalNumberOfPlanets = 0;
    this.numberOfPlanetsPerPage = 10;
    this.possibleNumberOfPlanetsPerPage = [5, 10, 25, 100];
    this.currentPage = 1;
    this.listOfPlanets = [];
    this.searchedValue = '';
    this.searchActive = false;
  }

  ngOnInit() {
    this.updateDataFromServices();
  }

  // PROTECTED REGION
  protected updateDataFromServices() {
    this.showLoading('Loading planets...');
    this.getListOfPlanets();
  }
  // End of PROTECTED REGION

  // PRIVATE REGION
  private getListOfPlanets() {
    // reset the table before updating
    this.listOfPlanets.length = 0;
    // calculate at which index to start loading
    const startingIndex = this.numberOfPlanetsPerPage * (this.currentPage - 1) + 1;
    const startingPage = Math.floor(startingIndex / 10) + 1; // 10 comes from the fact that BE always returns 10 elements
    this.planetsService.getAllPlanets(startingPage, this.searchedValue).subscribe(
      data => {
        // console.log(data);
        if (data) {
          // set total number of planets
          this.totalNumberOfPlanets = data['count'];
          // fill table with results
          // skip first results if not needed
          const fromWhichIndexStartAdding = startingIndex - (startingPage - 1) * 10 - 1;
          for (const planetData of data['results'].slice(fromWhichIndexStartAdding)) {
            if (this.listOfPlanets.length < this.numberOfPlanetsPerPage) {
              this.listOfPlanets.push(new Planet(planetData));
            }
          }
          // get more results
          this.getMorePlanets(data['next']);
        } else {
          this.showError('Data could not be loaded, please try refreshing this page.', 0, true);
        }
      }, error => {
        console.log(error);
        this.showError('Data could not be loaded, please try refreshing this page.', 0, true);
      }
    );
  }
  private getMorePlanets(url: string = null) {
    // if there are more results and list is not full get them
    if (!isNullOrUndefined(url) && url.length && this.listOfPlanets.length < this.numberOfPlanetsPerPage) {
      this.planetsService.getAllPlanetsFromUrl(url).subscribe(
        data => {
          // console.log(data);
          if (data) {
            // fill table with results
            for (const planetData of data['results']) {
              if (this.listOfPlanets.length < this.numberOfPlanetsPerPage) {
                this.listOfPlanets.push(new Planet(planetData));
              }
            }
            // get more results
            this.getMorePlanets(data['next']);
          } else {
            this.showError('Data could not be loaded, please try refreshing this page.', 0, true);
          }
        }, error => {
          console.log(error);
          this.showError('Data could not be loaded, please try refreshing this page.', 0, true);
        }
      );
    } else {
      // loading is done, show results
      this.hideLoading();
    }
  }
  // End of PRIVATE REGION

  // PUBLIC REGION
  public searchValue(activate: boolean) {
    this.searchActive = activate;
    if (activate === false) {
      this.searchedValue = '';
    }
    // change to first page before search
    this.currentPage = 1;
    this.updateDataFromServices();
  }
  public changeNumberOfPlanetsOnPage(numberOfPlanetsOnPage: number) {
    this.numberOfPlanetsPerPage = numberOfPlanetsOnPage;
    if (this.numberOfPlanetsPerPage * (this.currentPage - 1) + 1 > this.totalNumberOfPlanets) {
      // page for given index does not exists, pagination component will switch pages and take care of updating data
    } else {
      // page exists for new number, update data
      this.updateDataFromServices();
    }
  }
  public changePage(pageNumber: number) {
    this.updateDataFromServices();
  }
  // End of PUBLIC REGION

}
