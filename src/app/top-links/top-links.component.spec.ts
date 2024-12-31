import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLinksComponent } from './top-links.component';

describe('TopLinksComponent', () => {
  let component: TopLinksComponent;
  let fixture: ComponentFixture<TopLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopLinksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
