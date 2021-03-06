import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubapiService } from '../githubapi.service';
import { Subscription } from 'rxjs';
import { Repos } from '../repos';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit, OnDestroy {

  repos: Repos;
  subscription: Subscription;

  constructor(private githubapiService: GithubapiService) { }

  ngOnInit(): void {
    this.githubapiService.getGithubRepo();
    this.subscription = this.githubapiService.getRepos()
    .subscribe(repo => this.repos = repo);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

}
