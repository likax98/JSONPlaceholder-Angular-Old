import { AlbumsService } from './../../../core/services/albums.service';
import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/core/services/users.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { Album } from 'src/app/models/album';

@Component({
  selector: 'app-albums-table',
  templateUrl: './albums-table.component.html',
  styleUrls: ['./albums-table.component.scss'],
})
export class AlbumsTableComponent implements OnInit {
  public album$: Observable<Album[]>;
  public users: User[] = [];
  public photos: Photo[] = [];
  public tableHeaders: string[] = ["album's user", 'title', 'Number of Photos'];

  private usersSubscription: Subscription;
  private photosSubscription: Subscription;

  constructor(
    private albumsService: AlbumsService,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.fetchUsers();
    this.album$ = this.albumsService.fetchAlbums();
  }

  public fetchUsers() {
    this.usersService.fetchUsers().subscribe((users) => {
      this.users = users;
      for (let user of this.users) {
        this.albumsService.fetchPhotoByAlbum(user.id).subscribe((photos) => {
          this.photos = photos;
          user.photoCount = photos.length;
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }
    if (this.photosSubscription) {
      this.photosSubscription.unsubscribe();
    }
  }
}
