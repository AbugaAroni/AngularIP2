import { Component, OnInit } from '@angular/core';
import { GithubapiService } from '../githubapi.service'

@Component({
  selector: 'app-github-users',
  templateUrl: './github-users.component.html',
  styleUrls: ['./github-users.component.css']
})
export class GithubUsersComponent implements OnInit {

  constructor(private githubapiService: GithubapiService) { }

  ngOnInit(): void {
    this.githubapiService.getGithubUser()
    .subscribe((response: any) =>{
      console.log('Data', response);
    });
  }

}
