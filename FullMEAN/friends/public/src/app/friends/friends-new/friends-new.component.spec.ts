import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendsNewComponent } from './friends-new.component';

describe('FriendsNewComponent', () => {
  let component: FriendsNewComponent;
  let fixture: ComponentFixture<FriendsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
