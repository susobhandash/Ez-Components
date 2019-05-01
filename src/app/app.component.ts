import { Component, OnInit } from '@angular/core';
import { EzListBox } from 'ez-ng-lib';
import { ListboxComponent } from 'ez-ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ez-lib-app';
  data: EzListBox[] = [];

  ngOnInit() {
    this.data = [
      {
        label: 'First',
        icon: 'fa fa-home'
      }, {
        label: 'Second',
        icon: 'fa fa-user'
      }, {
        label: 'Thirds',
        icon: 'fa fa-globe'
      }, {
        label: 'Fourth',
        icon: 'fa fa-clock-o'
      }, {
        label: 'Home',
        icon: 'fa fa-home'
      }, {
        label: 'User',
        icon: 'fa fa-user'
      }, {
        label: 'Globe',
        icon: 'fa fa-globe'
      }, {
        label: 'Clock',
        icon: 'fa fa-clock-o'
      }
    ];
  }

  getData(event) {
    console.log(event);
  }
}
