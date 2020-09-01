import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GithubUsersComponent} from './github-users/github-users.component';
import {GithubSearchComponent} from './github-search/github-search.component';
import {RepositoriesComponent} from './repositories/repositories.component';


const routes: Routes = [
  { path: 'Users', component: GithubUsersComponent},
  { path: 'Search', component: GithubSearchComponent},
  { path: 'Repos', component: RepositoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
