import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsEditComponent } from './friends-edit.component';

describe('FriendsEditComponent', () => {
  let component: FriendsEditComponent;
  let fixture: ComponentFixture<FriendsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
