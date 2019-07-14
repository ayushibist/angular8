import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleTemplateFormComponent } from './sample-template-form.component';

describe('SampleTemplateFormComponent', () => {
  let component: SampleTemplateFormComponent;
  let fixture: ComponentFixture<SampleTemplateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleTemplateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
