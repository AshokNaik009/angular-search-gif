import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSearchScreenComponent } from './app-search-screen.component';

describe('AppSearchScreenComponent', () => {
  let component: AppSearchScreenComponent;
  let fixture: ComponentFixture<AppSearchScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSearchScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSearchScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
