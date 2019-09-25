import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {RenderComponent} from './login-layout/render/render.component';
import { MainlayoutComponent } from './form-layout/mainlayout/mainlayout.component';
import {AuthGuard} from './auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
  const routes: Routes = [
    {path : '', component : RenderComponent, loadChildren : './auth/auth.module#AuthModule'},
    {path : 'dashboard', canActivate : [AuthGuard], component : MainlayoutComponent, loadChildren : './dashboard/dashboard.module#DashboardModule'},
 ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule.forRoot(routes)

      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'practice'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('practice');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('practice app is running!');
  });
});
