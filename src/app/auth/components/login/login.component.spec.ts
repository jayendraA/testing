import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginComponent);

      component = fixture.componentInstance; // LoginComponent test instance
      // query for the title <h1> by CSS element selector
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
    });;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.Is_submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    spyOn(component, 'onSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.onSubmit).toHaveBeenCalled();
  }));
  it(`form should be invalid`, async(() => {
    component.loginForm.controls['name'].setValue('');
    component.loginForm.controls['username'].setValue('');
    component.loginForm.controls['website'].setValue('');
    expect(component.loginForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.loginForm.controls['name'].setValue('name');
    component.loginForm.controls['username'].setValue('aada');
    component.loginForm.controls['text'].setValue('text');
    expect(component.loginForm.valid).toBeTruthy();
  }));
});
