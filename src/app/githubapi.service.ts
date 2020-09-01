import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  gitUser = new BehaviorSubject<any>([]);
  repos = new BehaviorSubject<any>([]);

  private username:string;

  constructor(private http: HttpClient) {

    this.username='abugaaroni';
  }

  getGithubUser() {
    return this.http.get('https://api.github.com/users/' + this.username +'?access_token=' + environment.githubApiToken)
    .subscribe(gitUser => {
      this.gitUser.next(gitUser);
    });
  }

  getGithubRepo() {
    return this.http.get('https://api.github.com/users/' + this.username +'/repos?access_token=' + environment.githubApiToken)
    .subscribe(repo => {
      this.repos.next(repo);
    });
  }

  searchGithub(gitsearchName: string) {
    this.http.get('https://api.github.com/users/' + gitsearchName +'?access_token=' + environment.githubApiToken)
    .subscribe(gitUser => {
      this.gitUser.next(gitUser);
    });

    this.http.get('https://api.github.com/users/' + gitsearchName +'/repos?access_token=' + environment.githubApiToken)
    .subscribe(repo => {
      this.repos.next(repo);
    });
  }

  getUsers() {
    return this.gitUser.asObservable();
  }

  getRepos() {
    return this.repos.asObservable();
  }
}
