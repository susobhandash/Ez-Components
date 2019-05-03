import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EzListBox } from '../component-dto';

@Component({
  selector: 'ez-listbox',
  templateUrl: './listbox.component.html',
  styleUrls: ['./listbox.component.less']
})
export class ListboxComponent implements OnInit {

  @Input() listData: EzListBox[] = [];
  @Input() selection = 'single';
  @Input() template;
  @Input() dataContext;
  @Input() styleClass = '';
  @Output() onselection = new EventEmitter();

  activeItemId: number;
  iconExists = false;
  selectedItems: EzListBox[] = [];
  filteredItems: EzListBox[] = [];

  constructor() { }

  ngOnInit() {
    this.listData.forEach((item, idx, a) => {
      if (item.icon) {
        this.iconExists = true;
      }
      item.index = idx;
    });
    this.filteredItems = this.listData;
  }

  setActiveListItem(item, idx) {
    this.activeItemId = idx;
    this.selectedItems[0] = item;
    this.onselection.emit({
      selectedData: this.selectedItems,
      originalData: this.listData
    });
  }

  updateSelectedItems(evt, item) {
    evt.stopPropagation();
    if (this.selectedItems.filter(el => el.index === item.index).length === 0) {
      this.selectedItems = [...this.selectedItems, item];
    } else {
      const indxToRemove = this.selectedItems.indexOf(this.selectedItems.filter(el => el.index === item.index)[0]);
      this.selectedItems.splice(indxToRemove, 1);
    }

    this.onselection.emit({
      selectedData: this.selectedItems,
      originalData: this.listData
    });
  }

  selectAllItems(event) {
    if (event.target.checked) {
      this.selectedItems = this.filteredItems;
    } else {
      this.selectedItems = [];
    }
  }

  filterItems(event) {
    const searchText = event.target.value;
    this.filteredItems = this.listData.filter(el => (el.label.indexOf(searchText) > -1));
  }

  getActiveStatus(index) {
    if (this.selectedItems.filter(el => el.index === index).length > 0) {
      return true;
    }

    return false;
  }

}

