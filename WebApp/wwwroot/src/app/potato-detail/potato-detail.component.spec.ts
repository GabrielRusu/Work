import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PotatoDetailComponent} from './potato-detail.component';

describe('PotatoDetailComponent', () => {
  let component: PotatoDetailComponent;
  let fixture: ComponentFixture<PotatoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PotatoDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotatoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
