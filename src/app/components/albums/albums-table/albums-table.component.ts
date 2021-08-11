import { Component, OnInit } from '@angular/core';
import { Photo } from 'src/app/models/photo';
import { UsersService } from 'src/app/core/services/users.service';
import { AlbumsService } from './../../../core/services/albums.service';
import { Observable, Subject } from 'rxjs';
import { User } from 'src/app/models/user';
import { Album } from 'src/app/models/album';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-albums-table',
  templateUrl: './albums-table.component.html',
  styleUrls: ['./albums-table.component.scss'],
})
export class AlbumsTableComponent implements OnInit {
  //
  album$: Observable<Album[]>;

  //
  users: User[] = [];

  //
  photos: Photo[] = [];

  //
  tableHeaders: string[] = ["album's user", 'title', 'Number of Photos'];

  //
  private unsubscribe$ = new Subject();

  //
  constructor(
    private albumsService: AlbumsService,
    private usersService: UsersService
  ) {}

  //
  ngOnInit(): void {
    this.fetchUsers();
    this.album$ = this.albumsService.fetchAlbums();
  }

  //
  private fetchUsers(): void {
    this.usersService
      .fetchUsers()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((users) => {
        this.users = users;
        for (let user of this.users) {
          this.albumsService.fetchPhotoByAlbum(user.id).subscribe((photos) => {
            this.photos = photos;
            user.photoCount = photos.length;
          });
        }
      });
  }

  //
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
