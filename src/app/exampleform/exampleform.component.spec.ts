import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleformComponent } from './exampleform.component';

describe('ExampleformComponent', () => {
  let component: ExampleformComponent;
  let fixture: ComponentFixture<ExampleformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
