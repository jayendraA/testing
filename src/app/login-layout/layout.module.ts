import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RenderComponent } from './render/render.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent,  RenderComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
exports:[RenderComponent]
})
export class LayoutModule { }
