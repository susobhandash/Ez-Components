import { Component, OnInit, AfterViewInit, Input, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ez-round-progress',
  templateUrl: './round-progress.component.html',
  styleUrls: ['./round-progress.component.css']
})
export class RoundProgressComponent implements OnChanges, OnInit, AfterViewInit {

  @Input() progress: number;
  @Input() radius: number;
  @Input() fontSize: number;
  @Input() showText: boolean;
  @Input() fontColor: string;
  @Input() progressStrokeWdt: number;
  @Input() pathStrokeWdt: number;
  @Input() innerCircleRad: number;
  @Input() textCircleColor: string;
  @Input() progressColor: string;
  @Input() progressBgColor: string;
  @Input() textColor: string;
  @Input() text: string;
  @Input() timingFunc: string;
  @Output() svgClick = new EventEmitter();

  @ViewChild('path') path;
  @ViewChild('circle') circle;
  @ViewChild('progressBg') progressBg;
  @ViewChild('text') textElem;

  private cx: number;
  private cy: number;
  private rad: number;
  shadowProgress: number;
  textToShow: string;
  intervalVar;
  finalPosition = 600;
  time: any = {
    start: performance.now()
  };
  animation;
  animFunc = animFunc;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.time.start = performance.now();
    this.time.total = this.getTotalTime();
    this.shadowProgress = 0;
    this.progress = Number(changes.progress.currentValue);
    if (this.showText && !changes.text && !this.text) {
      this.textToShow = this.progress + '%';
    } else {
      this.textToShow = changes.text && !changes.text.firstChange && changes.text.currentValue ? changes.text.currentValue : this.text;
    }
    this.myArc(Math.round(this.progress * 3.6));
    this.shouldShowText();
  }

  ngOnInit() {
    this.radius = this.radius ? this.radius : 50;

    this.cx = this.radius;
    this.cy = this.radius;
    this.rad = this.radius;
    this.shadowProgress = 0;

    this.fontSize = this.fontSize ? this.fontSize : 20;
    this.fontColor = this.fontColor ? this.fontColor : '#fff';
    this.progressStrokeWdt = this.progressStrokeWdt ? this.progressStrokeWdt : 3;
    this.pathStrokeWdt = this.pathStrokeWdt ? this.pathStrokeWdt : 5;
    this.innerCircleRad = this.innerCircleRad ? this.innerCircleRad : this.rad - 5;
    this.textCircleColor = this.textCircleColor ? this.textCircleColor : '#0366d6';
    this.progressColor = this.progressColor ? this.progressColor : '#0366d6';
    this.progressBgColor = this.progressBgColor ? this.progressBgColor : '#ccc';
    this.textColor = this.textColor ? this.textColor : '#fff';
    this.showText = this.showText ? this.showText : true;
    this.textToShow = this.text ? this.text : this.progress + '%';
    this.timingFunc = this.timingFunc ? this.timingFunc : 'easeOut';
  }

  ngAfterViewInit() {
    this.myArc(Math.round(this.progress * 3.6));
    this.shouldShowText();
  }

  clickSvg() {
    this.svgClick.emit({
      progress: this.progress,
      text: this.textToShow
    });
  }

  shouldShowText() {
    if (this.showText && this.textElem) {
      this.textElem.nativeElement.setAttribute('x', this.rad + 5);
      this.textElem.nativeElement.setAttribute('y', this.rad + this.pathStrokeWdt + this.fontSize / 2 - 4);
      // this.textElem.nativeElement.setAttribute('x', this.cx - 5);
      // this.textElem.nativeElement.setAttribute('y', this.cy + this.pathStrokeWdt);
      this.textElem.nativeElement.setAttribute('fill', this.textColor);
      this.textElem.nativeElement.innerHTML = this.textToShow;
    }
  }

  myArc(max: number) {
    const e = this.path.nativeElement.getAttribute('d');

    this.path.nativeElement.setAttribute('stroke', this.progressColor);
    this.path.nativeElement.setAttribute('stroke-width', this.pathStrokeWdt);

    if (this.cx && this.cy && this.rad) {
        this.circle.nativeElement.setAttribute('fill', this.textCircleColor);
        this.circle.nativeElement.setAttribute('cx', this.cx + 5);
        this.circle.nativeElement.setAttribute('cy', this.cy + this.pathStrokeWdt);
        this.circle.nativeElement.setAttribute('r', this.innerCircleRad);

        this.progressBg.nativeElement.setAttribute('cx', this.cx + 5);
        this.progressBg.nativeElement.setAttribute('cy', this.cy + this.pathStrokeWdt);
        this.progressBg.nativeElement.setAttribute('r', this.rad);
        this.progressBg.nativeElement.setAttribute('stroke', this.progressBgColor);
        this.progressBg.nativeElement.setAttribute('stroke-width', this.progressStrokeWdt);

        let d = ' M ' + (this.cx + this.radius) + ' ' + this.cy;

        this.path.nativeElement.setAttribute('d', d);

        d = 'M ' + (this.radius + 5) + ' ' + this.pathStrokeWdt + ' a ' + (this.radius - 10) + ' ' + (this.radius - 10) +
        ' 0 0 1 0 ' + (this.radius * 2) + ' a ' + (this.radius - 10) + ' ' + (this.radius - 10) + ' 0 0 1 0 '  + (this.radius * -2);
        this.path.nativeElement.setAttribute('d', d);

        this.animation = requestAnimationFrame(this.tick);

        this.path.nativeElement.setAttribute('class', 'dot-round-progress-bar');
    }
  }

  tick = now => {
    this.time.total = this.getTotalTime();
    this.time.elapsed = now - this.time.start;
    const progress = Math.min(this.time.elapsed / this.time.total, 1);
    let easing;
    if (this.timingFunc === 'easeOut') {
      easing = this.easeOut(progress);
    } else if (this.timingFunc === 'easeInOut') {
      easing = this.easeInOut(progress);
    } else if (this.timingFunc === 'easeOutElastic') {
      easing = this.easeOutElastic(progress);
    }

    this.shadowProgress = easing * this.progress;
    this.PerformCalc();
    if (progress < 1) {
      requestAnimationFrame(this.tick);
    }
  }

  PerformCalc() {
    const dashArrMax = this.rad * 2 * 3.14159;
    const dashArrVal = this.shadowProgress * dashArrMax * 0.01;
    const strokeDashArray = dashArrVal + ', ' + dashArrMax;

    this.path.nativeElement.setAttribute('stroke-dasharray', strokeDashArray);

    if (this.shadowProgress >= this.progress) {
      cancelAnimationFrame(this.animation);
    }
  }

  easeOut(progress) {
    return Math.pow(--progress, 5) + 1;
  }

  easeInOut(progress) {
    return (progress * 2) < 1
    ? .5 * Math.pow(progress, 5)
    : .5 * ((progress -= 2) * Math.pow(progress, 4) + 2);
  }

  easeOutElastic(progress) {
    return Math.pow(2, -10 * progress) * Math.sin((progress - .1) * 5 * Math.PI) + 1;
  }

  getTotalTime() {
    let totalTime;

    switch (this.timingFunc) {
      case 'easeOut':
        totalTime = this.animFunc.easeOut;
        break;

      case 'easeInOut':
        totalTime = this.animFunc.easeInOut;
        break;

      case 'easeOutElastic':
        totalTime = this.animFunc.easeOutElastic;
        break;
    }

    return totalTime;
  }
}

export enum animFunc {
  easeOut = 2000,
  easeInOut = 2000,
  easeOutElastic = 10000
}
