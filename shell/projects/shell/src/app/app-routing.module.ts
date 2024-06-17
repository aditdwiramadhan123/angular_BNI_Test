import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'dashboard',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  },
  {
    path: 'list-user',
    loadChildren: () =>
      loadRemoteModule({
        type: 'manifest',
        remoteName: 'list-user',
        exposedModule: './Module',
      }).then((m) => m.AppModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
