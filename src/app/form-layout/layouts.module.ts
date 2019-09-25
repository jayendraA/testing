import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutsRoutingModule } from './layouts-routing.module';

import { HeaderComponent } from './header/header.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { FooterComponent } from './footer/footer.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutsRoutingModule
  ],
  declarations: [HeaderComponent, LeftmenuComponent, FooterComponent, MainlayoutComponent],
  exports:[MainlayoutComponent]
})
export class LayoutsModule { }
