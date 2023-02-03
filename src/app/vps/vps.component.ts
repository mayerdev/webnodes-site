import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vps',
  templateUrl: './vps.component.html',
  styleUrls: ['./vps.component.less']
})
export class VpsComponent implements OnInit {
  public type: 'resources' | 'lowcost' = 'resources';

  constructor() { }

  ngOnInit(): void {
  }

}
