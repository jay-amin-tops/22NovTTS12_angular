import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExmaplesComponent } from './exmaples.component';

describe('ExmaplesComponent', () => {
  let component: ExmaplesComponent;
  let fixture: ComponentFixture<ExmaplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExmaplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExmaplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
