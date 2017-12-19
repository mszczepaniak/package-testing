import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ClickOutsideModule } from 'ng-click-outside';

@NgModule({
  imports: [
    CommonModule,
    ClickOutsideModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
