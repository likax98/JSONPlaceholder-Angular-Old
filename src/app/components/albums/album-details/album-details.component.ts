import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/core/services/albums.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit, OnDestroy {
  //
  isSlider = false;

  //
  photos: Photo[] = [];

  //
  imageObjects = [];

  //
  private unsubscribe$ = new Subject();

  //
  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
  ) {}

  //
  ngOnInit(): void {
    this.listenRoute();
  }

  //
  private listenRoute(): void {
    this.route.params.pipe(takeUntil(this.unsubscribe$)).subscribe((params) => {
      this.fetchPhotosByAlbum(+params['id']);
    });
  }

  //
  private fetchPhotosByAlbum(id: number): void {
    this.albumsService
      .fetchPhotoByAlbum(id)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((photos: Photo[]) => {
        this.photos = photos;
        this.imageObjects = photos.map((photo) => {
          return {
            image: photo.url,
            thumbImage: photo.thumbnailUrl,
            title: photo.title,
          };
        });
      });
  }

  //
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
