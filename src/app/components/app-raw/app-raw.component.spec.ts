import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRawComponent } from './app-raw.component';

describe('AppRawComponent', () => {
  let component: AppRawComponent;
  let fixture: ComponentFixture<AppRawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppRawComponent]
    });
    fixture = TestBed.createComponent(AppRawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
