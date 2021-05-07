import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallFrameComponent } from './small-frame.component';

describe('SmallFrameComponent', () => {
  let component: SmallFrameComponent;
  let fixture: ComponentFixture<SmallFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
