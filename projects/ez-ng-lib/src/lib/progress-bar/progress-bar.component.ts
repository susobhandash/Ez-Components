import { Component, OnInit, Input, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { ProgressOptions } from '../component-dto';

@Component({
  selector: 'ez-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.less']
})
export class ProgressBarComponent implements OnChanges, OnInit, AfterViewInit {

  @Input() progress: number;
  intervalVar;

  @Input() progressOptions: ProgressOptions = {};

  int;
  up = true;
  shadowProgress = 0;
  width = 0;
  showProgress = true;

  constructor() { }

  ngOnInit() {
    this.progress = this.progress ? Number(this.progress) : 0;
    this.progressOptions.height = this.progressOptions.height ? this.progressOptions.height : 3;
    this.progressOptions.bgColor = this.progressOptions.bgColor ? this.progressOptions.bgColor : '#0366d6';
    this.progressOptions.textColor = this.progressOptions.textColor ? this.progressOptions.textColor : '#fff';
    this.progressOptions.progressBgColor = this.progressOptions.progressBgColor ? this.progressOptions.progressBgColor : 'transparent';
    this.progressOptions.time = this.progressOptions.time ? Number(this.progressOptions.time) : 300;
    this.progressOptions.displayValue = this.progressOptions.displayValue ? this.progressOptions.displayValue : false;
    this.progressOptions.timingFunc = this.progressOptions.timingFunc ? this.progressOptions.timingFunc : 'ease';
    this.progressOptions.striped = this.progressOptions.striped ? this.progressOptions.striped : false;
    this.progressOptions.stripeAnimated = this.progressOptions.stripeAnimated ? this.progressOptions.stripeAnimated : false;
    this.up = true;
    this.shadowProgress = 0;
  }

  ngAfterViewInit() {
    this.setWidth();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.showProgress = true;
    this.ResetInt();
    this.progress = Number(changes.progress.currentValue);
    this.progress = this.progress < 0 ? 0 : this.progress;
    this.progress = this.progress > 100 ? 100 : this.progress;
    this.setWidth();
  }

  setWidth() {
    this.intervalVar = setInterval(() => { this.PerformCalc(); }, (this.progressOptions.time / this.progress));
  }

  PerformCalc() {
    if (this.up === true && this.shadowProgress < this.progress && this.progress !== 0) {
      this.shadowProgress += 1;

      if (this.shadowProgress === 1) {
        this.width = this.progress;
      }

      if (this.shadowProgress === this.progress) {
          this.up = false;
          clearInterval(this.intervalVar);

          if (this.shadowProgress === 100) {
            setTimeout(() => {
              this.showProgress = false;
            }, this.progressOptions.time + 10);
          }
      }
    }
  }

  ResetInt() {
    clearInterval(this.intervalVar);
    this.up = true;
    this.shadowProgress = 0;
    this.progress = 0;
  }

}
