import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GithubapiService {

  private username:string;

  constructor(private http: HttpClient) {

    this.username='abugaaroni';
  }

  getGithubUser() {
    return this.http.get('https://api.github.com/users/' + this.username +'?access_token=' + ${environment.githubApiToken})
  }
}
