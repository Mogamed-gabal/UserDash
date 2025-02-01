import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TapleComponent } from './taple.component';

describe('TapleComponent', () => {
  let component: TapleComponent;
  let fixture: ComponentFixture<TapleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TapleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
