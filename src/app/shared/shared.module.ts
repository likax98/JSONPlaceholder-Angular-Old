import { LoaderComponent } from './loader/loader.component';
import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';

const components = [NavbarComponent, TableComponent, LoaderComponent];

@NgModule({
  declarations: components,
  imports: [CommonModule, RouterModule],
  exports: components,
})
export class SharedModule {}
