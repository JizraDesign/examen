import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigatorScreenComponent } from './navigator-screen.component';

describe('NavigatorScreenComponent', () => {
  let component: NavigatorScreenComponent;
  let fixture: ComponentFixture<NavigatorScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavigatorScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigatorScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
