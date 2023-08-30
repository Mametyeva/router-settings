import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppWebComponent } from './app-web.component';

describe('AppWebComponent', () => {
  let component: AppWebComponent;
  let fixture: ComponentFixture<AppWebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppWebComponent]
    });
    fixture = TestBed.createComponent(AppWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
