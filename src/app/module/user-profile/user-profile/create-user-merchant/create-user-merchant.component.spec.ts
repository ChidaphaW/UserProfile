import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserMerchantComponent } from './create-user-merchant.component';

describe('CreateUserMerchantComponent', () => {
  let component: CreateUserMerchantComponent;
  let fixture: ComponentFixture<CreateUserMerchantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserMerchantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserMerchantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
