import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/core/services/albums.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss'],
})
export class AlbumDetailsComponent implements OnInit {
  public isGallery: boolean = false;
  public photos: Photo[] = [];
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
      .subscribe((photos: Photo[]) => (this.photos = photos));
  }
}
