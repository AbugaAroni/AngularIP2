import { Component, OnInit } from '@angular/core';
import { GithubapiService } from '../githubapi.service'

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  gitUser;

  constructor(private githubapiService: GithubapiService) { }

  ngOnInit(): void {
    this.githubapiService.getGithubUser()
    .subscribe(gitUser => this.gitUser = gitUser);
  }

}
