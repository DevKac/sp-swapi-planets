import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.less']
})
export class ErrorComponent implements OnInit {
  // text of the message
  @Input('message') message: string;

  constructor () { }

  ngOnInit() { }

}
