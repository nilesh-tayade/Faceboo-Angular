import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCoverComponent } from './update-cover.component';

describe('UpdateCoverComponent', () => {
  let component: UpdateCoverComponent;
  let fixture: ComponentFixture<UpdateCoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
