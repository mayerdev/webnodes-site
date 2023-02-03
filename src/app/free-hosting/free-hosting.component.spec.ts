import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeHostingComponent } from './free-hosting.component';

describe('FreeHostingComponent', () => {
  let component: FreeHostingComponent;
  let fixture: ComponentFixture<FreeHostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeHostingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreeHostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
