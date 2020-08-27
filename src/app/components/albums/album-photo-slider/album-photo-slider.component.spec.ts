import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPhotoSliderComponent } from './album-photo-slider.component';

describe('AlbumPhotoSliderComponent', () => {
  let component: AlbumPhotoSliderComponent;
  let fixture: ComponentFixture<AlbumPhotoSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumPhotoSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPhotoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
