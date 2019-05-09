import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EzNgLibComponent } from './ez-ng-lib.component';

import { TabbarComponent } from './tabbar/tabbar.component';
import { TabComponent } from './tab/tab.component';
import { ListboxComponent } from './listbox/listbox.component';
import { ReorderlistComponent } from './reorderlist/reorderlist.component';
import { RoundProgressComponent } from './round-progress/round-progress.component';

@NgModule({
  declarations:
  [
    EzNgLibComponent,
    TabbarComponent,
    TabComponent,
    ListboxComponent,
    ReorderlistComponent,
    RoundProgressComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    EzNgLibComponent,
    TabbarComponent,
    TabComponent,
    ListboxComponent,
    ReorderlistComponent,
    RoundProgressComponent
  ]
})
export class EzNgLibModule { }
