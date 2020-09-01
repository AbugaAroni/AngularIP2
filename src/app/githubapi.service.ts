import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  gitUser = new BehaviorSubject<any>([]);

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
  searchGithub(gitsearchName: string) {
    return this.http.get('https://api.github.com/users/' + gitsearchName +'?access_token=' + environment.githubApiToken)
    .subscribe(gitUser => {
      this.gitUser.next(gitUser);
    });
  }

  getUsers() {
    return this.gitUser.asObservable();
  }
}
