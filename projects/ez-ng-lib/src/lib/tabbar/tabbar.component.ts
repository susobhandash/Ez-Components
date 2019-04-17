import {
  Component,
  ContentChildren,
  QueryList,
  AfterContentInit,
  OnInit,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'ez-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.less']
})
export class TabbarComponent implements OnInit, AfterContentInit {

  @Input() styleClass: string;
  @Input() headerStyleClass: string;
  @Input() bodyStyleClass: string;
  @Input() direction: string;
  @Input() scrollHt: number;
  @Input() height: number;
  @Output() tabSelect = new EventEmitter();

  constructor() { }
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  ngOnInit() {
    this.direction = this.direction ? this.direction : 'horizontal';
  }

  ngAfterContentInit() {
    const activeTabs = this.tabs.filter(tab => tab.active);

    if (activeTabs.length === 0) {
      this.selectTab(this.tabs.first);
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs.toArray().forEach(tabItem => (tabItem.active = false));

    tab.active = true;
    this.tabSelect.emit(this.tabs);
  }

  getType(tabTitle) {
    const title = tabTitle.toString();

    if (title.indexOf('[object Object]') > -1) {
      return true;
    }

    return false;
  }

}
