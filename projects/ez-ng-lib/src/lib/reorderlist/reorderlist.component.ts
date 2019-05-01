import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EzListBox } from '../component-dto';

@Component({
  selector: 'ez-reorderlist',
  templateUrl: './reorderlist.component.html',
  styleUrls: ['./reorderlist.component.less']
})
export class ReorderlistComponent implements OnInit {

  @Input() listData: EzListBox[] = [];
  @Output() onreorder = new EventEmitter();

  activeItemId: number ;
  iconExists = false;

  constructor() { }

  ngOnInit() {
    this.listData.forEach(item => {
      if (item.icon) {
        this.iconExists = true;
      }
    });
  }

  setActiveListItem(idx) {
    this.activeItemId = idx;
  }

  moveArrayItems(btnId) {
    const from = this.listData.indexOf(this.listData.filter((el, i, a) => i === this.activeItemId)[0]);
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

}

