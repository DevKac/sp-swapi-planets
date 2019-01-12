import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-one-planet',
  templateUrl: './one-planet.component.html',
  styleUrls: ['./one-planet.component.less']
})
export class OnePlanetComponent implements OnInit {
  // id loaded from URL
	public currentId: string;

  constructor (
  	private route: ActivatedRoute
  ) {
  	this.currentId = null;
  }

  ngOnInit() {
  	this.route.params.subscribe(params => {
      this.currentId = params['id'];
    });
  }

}
