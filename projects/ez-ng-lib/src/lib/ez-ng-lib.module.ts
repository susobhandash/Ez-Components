import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EzNgLibComponent } from './ez-ng-lib.component';

import { TabbarComponent } from './tabbar/tabbar.component';
import { TabComponent } from './tab/tab.component';

@NgModule({
  declarations: [EzNgLibComponent, TabbarComponent, TabComponent],
  imports: [
    CommonModule
  ],
  exports: [EzNgLibComponent, TabbarComponent, TabComponent]
})
export class EzNgLibModule { }
