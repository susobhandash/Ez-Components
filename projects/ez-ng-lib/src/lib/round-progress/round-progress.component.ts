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
  @Output() svgClick = new EventEmitter();

  @ViewChild('path') path;
  @ViewChild('circle') circle;
  @ViewChild('progressBg') progressBg;
  @ViewChild('text') textElem;

  private cx: number;
  private cy: number;
  private rad: number;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.progress = Number(changes.progress.currentValue);
    this.text = changes.text && !changes.text.firstChange && changes.text.currentValue ? changes.text.currentValue : this.text;
    this.myArc(Math.round(this.progress * 3.6));
    this.shouldShowText();
  }

  ngOnInit() {
    this.radius = this.radius ? this.radius : 50;

    this.cx = this.radius;
    this.cy = this.radius;
    this.rad = this.radius;

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
    this.text = this.text ? this.text : this.progress + '%';
    this.myArc(Math.round(this.progress * 3.6));
  }

  ngAfterViewInit() {
    this.shouldShowText();
  }

  clickSvg() {
    this.svgClick.emit({
      progress: this.progress,
      text: this.text
    });
  }

  shouldShowText() {
    if (this.showText && this.textElem) {
      this.textElem.nativeElement.setAttribute('x', this.rad + 5);
      this.textElem.nativeElement.setAttribute('y', this.rad + this.pathStrokeWdt + this.fontSize / 2 - 4);
      // this.textElem.nativeElement.setAttribute('x', this.cx - 5);
      // this.textElem.nativeElement.setAttribute('y', this.cy + this.pathStrokeWdt);
      this.textElem.nativeElement.setAttribute('fill', this.textColor);
      this.textElem.nativeElement.innerHTML = this.text;
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

        d = 'M ' + (this.rad + 5) + ' ' + this.pathStrokeWdt + ' a ' + (this.rad - 10) + ' ' + (this.rad - 10) +
        ' 0 0 1 0 ' + (this.rad * 2) + ' a ' + (this.rad - 10) + ' ' + (this.rad - 10) + ' 0 0 1 0 '  + (this.rad * -2);
        this.path.nativeElement.setAttribute('d', d);

        const dashArrMax = this.rad * 2 * 3.14159;
        const dashArrVal = this.progress * dashArrMax * 0.01;
        const strokeDashArray = dashArrVal + ', ' + dashArrMax;

        this.path.nativeElement.setAttribute('class', 'dot-round-progress-bar');
        this.path.nativeElement.setAttribute('stroke-dasharray', strokeDashArray);
    }
  }
}

