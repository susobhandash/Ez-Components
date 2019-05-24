import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { EzListBox } from '../component-dto';
import { RadioComponent } from '../radio/radio.component';

@Component({
  selector: 'ez-reorderlist',
  templateUrl: './reorderlist.component.html',
  styleUrls: ['./reorderlist.component.less']
})
export class ReorderlistComponent implements OnChanges, OnInit, AfterViewInit {

  @Input() listData: EzListBox[] = [];
  @Input() styleClass = '';
  @Input() template;
  @Input() dataContext;
  @Output() onreorder = new EventEmitter();

  activeItemId: string ;
  iconExists = false;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.checkForIcon();
  }

  ngOnInit() {
    // this.checkForIcon();
  }

  ngAfterViewInit() {
    this.checkForIcon();
  }

  checkForIcon() {
    this.listData.forEach(item => {
      if (item.icon) {
        this.iconExists = true;
      }
    });
  }

  setActiveListItem(idx) {
    if (idx || idx === 0) {
      if (((idx).toString() !== this.activeItemId)) {
        this.activeItemId = (idx).toString();
      }
    }
  }

  moveArrayItems(btnId) {
    const from = this.listData.indexOf(this.listData.filter((el, i, a) => i.toString() === this.activeItemId)[0]);
    let to;

    switch (btnId) {
      case 1 :
        to = 0;
        break;
      case 2 :
        to = from !== 0 ? from - 1 : 0;
        break;
      case 3 :
        to = from !== this.listData.length - 1 ? from + 1 : this.listData.length - 1;
        break;
      case 4 :
        to = this.listData.length - 1;
        break;
    }
    this.listData.splice(to, 0, this.listData.splice(from, 1)[0]);
    this.setActiveListItem(to);
    this.onreorder.emit(this.listData);
  }

  getNum(n) {
    return Number(n);
  }

}

