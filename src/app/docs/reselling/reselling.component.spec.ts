import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResellingComponent } from './reselling.component';

describe('ResellingComponent', () => {
  let component: ResellingComponent;
  let fixture: ComponentFixture<ResellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResellingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
