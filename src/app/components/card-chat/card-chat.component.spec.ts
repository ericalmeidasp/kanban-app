import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChatComponent } from './card-chat.component';

describe('CardChatComponent', () => {
  let component: CardChatComponent;
  let fixture: ComponentFixture<CardChatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardChatComponent]
    });
    fixture = TestBed.createComponent(CardChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
