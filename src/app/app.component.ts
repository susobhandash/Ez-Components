import { Component, OnInit } from '@angular/core';
import { EzListBox } from 'ez-ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'ez-lib-app';
  listData: EzListBox[] = [];
  progress: number;

  ngOnInit() {
    this.listData = [
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

    this.progress = 83;

    setTimeout(() => {this.progress = 55; }, 2000);
  }

  getData(event) {
    console.log(event);
  }

  getSelectedItems(event) {
    console.log(event);
  }

  clickOnSvg(event) {
    console.log(event);
  }
}
