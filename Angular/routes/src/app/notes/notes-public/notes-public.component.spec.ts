import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesPublicComponent } from './notes-public.component';

describe('NotesPublicComponent', () => {
  let component: NotesPublicComponent;
  let fixture: ComponentFixture<NotesPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
