import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVueloComponent } from './update-vuelo.component';

describe('UpdateVueloComponent', () => {
  let component: UpdateVueloComponent;
  let fixture: ComponentFixture<UpdateVueloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateVueloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
