import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdgInputComponent } from './cdg-input.component';

describe('CdgInputComponent', () => {
  let component: CdgInputComponent;
  let fixture: ComponentFixture<CdgInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CdgInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdgInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
