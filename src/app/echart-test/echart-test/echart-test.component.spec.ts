import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartTestComponent } from './echart-test.component';

describe('EchartTestComponent', () => {
  let component: EchartTestComponent;
  let fixture: ComponentFixture<EchartTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
