import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoFullNameComponent } from './logo-full-name.component';

describe('LogoFullNameComponent', () => {
  let component: LogoFullNameComponent;
  let fixture: ComponentFixture<LogoFullNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoFullNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoFullNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
