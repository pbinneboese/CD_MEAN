import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsShowComponent } from './friends-show.component';

describe('FriendsShowComponent', () => {
  let component: FriendsShowComponent;
  let fixture: ComponentFixture<FriendsShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
