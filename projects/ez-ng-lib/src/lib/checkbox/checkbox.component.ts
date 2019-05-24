import { Component, Input, forwardRef, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export function MakeProvider(type: any) {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}

@Component({
  selector: 'ez-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less'],
  providers: [MakeProvider(CheckboxComponent)]
})
export class CheckboxComponent implements OnInit, ControlValueAccessor {

  @Input() label = '';
  @Input() disabled: boolean;
  @Input() styleClass = '';
  @Input() slideToggle: boolean;
  @Output() onchange = new EventEmitter();
  @ViewChild('inputElem') inputElem: HTMLInputElement;

  private val: boolean;
  get value(): boolean { return this.val; }

  set value(v: boolean) {
    if (v !== this.val) {
      this.val = v;
      // this.onChange(v);
      this.changed(v);
    }
  }

  writeValue(value: boolean) {
    this.val = value;
    // this.onChange(value);
    this.changed(value);
  }

  onChange = (_) => {};

  changed(v) {
    this.onchange.emit(v);
  }

  onTouched = () => {};
  registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }

  constructor() { }

  ngOnInit() {
    // this.disable = this.disable === true ? true : null;
  }

}
