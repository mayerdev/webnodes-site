import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.less']
})
export class StandardComponent implements OnInit {
  public type: 'standard' | 'vip' = 'standard';

  constructor() { }

  ngOnInit(): void {
  }

}
