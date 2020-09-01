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
  private url:string;

  constructor(private http: HttpClient) {

    this.username='abugaaroni';
    this.url = 'https://api.github.com/users/';
  }

  getGithubUser() {
    return this.http.get(this.url + this.username +'?access_token=' + environment.githubApiToken)
    .subscribe(gitUser => {
      this.gitUser.next(gitUser);
    });
  }

  getGithubRepo() {
    return this.http.get(this.url + this.username +'/repos?access_token=' + environment.githubApiToken)
    .subscribe(repo => {
      this.repos.next(repo);
    });
  }

  searchGithub(gitsearchName: string) {
    this.http.get(this.url+ gitsearchName +'?access_token=' + environment.githubApiToken)
    .subscribe(gitUser => {
      this.gitUser.next(gitUser);
    });

    this.http.get(this.url + gitsearchName +'/repos?access_token=' + environment.githubApiToken)
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
