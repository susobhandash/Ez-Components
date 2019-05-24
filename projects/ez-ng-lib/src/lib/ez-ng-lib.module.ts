import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { EzNgLibComponent } from './ez-ng-lib.component';

import { TabbarComponent } from './tabbar/tabbar.component';
import { TabComponent } from './tab/tab.component';
import { ListboxComponent } from './listbox/listbox.component';
import { ReorderlistComponent } from './reorderlist/reorderlist.component';
import { RoundProgressComponent } from './round-progress/round-progress.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  declarations:
  [
    EzNgLibComponent,
    TabbarComponent,
    TabComponent,
    ListboxComponent,
    ReorderlistComponent,
    RoundProgressComponent,
    CheckboxComponent,
    RadioComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    EzNgLibComponent,
    TabbarComponent,
    TabComponent,
    ListboxComponent,
    ReorderlistComponent,
    RoundProgressComponent,
    CheckboxComponent,
    RadioComponent,
    ProgressBarComponent
  ]
})
export class EzNgLibModule { }
