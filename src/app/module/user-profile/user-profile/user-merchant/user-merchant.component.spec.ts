import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMerchantComponent } from './user-merchant.component';

describe('UserMerchantComponent', () => {
  let component: UserMerchantComponent;
  let fixture: ComponentFixture<UserMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
