import { Component, OnInit, AfterViewInit } from '@angular/core';
// import { ProgressOptions } from 'ez-ng-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ez-lib-app';
  listData = [];
  progress: number;
  check = true;
  check1 = false;
  check2 = 'option1';
  shadowList = [];
  progressOptions = {};

  ngOnInit() {
    this.listData = [
      {
        label: 'First'
      }, {
        label: 'Second'
      }, {
        label: 'Thirds'
      }, {
        label: 'Fourth'
      }, {
        label: 'Home'
      }, {
        label: 'User'
      }, {
        label: 'Globe'
      }, {
        label: 'Clock'
      }
    ];

    this.progress = this.getProgress();

    this.progressOptions = {
      height: 20,
      bgColor: '#007bff',
      textColor: '#FFFFFF',
      progressBgColor: '#D4EEFF',
      time: 1000,
      displayValue: true,
      timingFunc: 'linear',
      striped: true,
      stripeAnimated: false
    };

    // setTimeout(() => {this.progress = 100; }, 2000);

    this.listData.forEach((el) => {
      el.icon = 'fa fa-home';
      el.command = event => this.refreshChart(event);
      this.shadowList.push(el);
    });
  }

  ngAfterViewInit() {

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

  printData(event) {
    console.log(event);
    console.log(this.check);
  }

  refreshChart(evt) {
    console.log(evt);
  }

  getProgress() {
    this.progress = Math.floor((Math.random() * 100) + 1);
    return this.progress;
  }
}
