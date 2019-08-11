import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeClientsComponent } from './analyze-clients.component';

describe('AnalyzeClientsComponent', () => {
  let component: AnalyzeClientsComponent;
  let fixture: ComponentFixture<AnalyzeClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyzeClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyzeClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
