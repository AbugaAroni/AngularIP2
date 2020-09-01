import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubapiService } from '../githubapi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit, OnDestroy {

  gitUser;
  subscription: Subscription;

  constructor(private githubapiService: GithubapiService) { }

  ngOnInit(): void {
    this.githubapiService.getGithubUser();
    this.subscription = this.githubapiService.getUsers()
    .subscribe(gitUser => this.gitUser = gitUser);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();

  }

}
