import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ez-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {

  @Input() tabTitle;
  @Input() active = false;
  @Input() tabBody;
  @Input() dataContext;

  constructor() { }

  ngOnInit() {}

}

