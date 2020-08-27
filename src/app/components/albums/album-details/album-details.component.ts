import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/core/services/albums.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit, OnDestroy {
  public isSlider: boolean = false;
  public photos: Photo[] = [];
  public imageObjects: any = [];

  private albumsSubscription: Subscription;

  constructor(
    private albumsService: AlbumsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      this.fetchPhotosByAlbum(id);
    });
   
  }

  public fetchPhotosByAlbum(id: number): void {
    this.albumsService
      .fetchPhotoByAlbum(id)
      .subscribe((photos: Photo[]) =>
        {
          this.photos = photos;
         this.imageObjects = photos.map(photo => {
            return {
              image: photo.url,
              thumbImage: photo.thumbnailUrl,
              title: photo.title
            }
          })
          
        }
      );
  }
 
  ngOnDestroy(): void {
    if (this.albumsSubscription) {
      this.albumsSubscription.unsubscribe();
    }
    
  }

}
