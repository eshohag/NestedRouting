import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundAdminComponent } from './page-not-found-admin.component';

describe('PageNotFoundAdminComponent', () => {
  let component: PageNotFoundAdminComponent;
  let fixture: ComponentFixture<PageNotFoundAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNotFoundAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotFoundAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
