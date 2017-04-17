import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPrivateComponent } from './notes-private.component';

describe('NotesPrivateComponent', () => {
  let component: NotesPrivateComponent;
  let fixture: ComponentFixture<NotesPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
