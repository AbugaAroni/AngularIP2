import { Component, OnInit } from '@angular/core';
import { GithubapiService } from '../githubapi.service'

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

  constructor(private githubapiService: GithubapiService) { }

  ngOnInit(): void {
  }

  search(searchName: string) {
    if (searchName !== '') {
      this.githubapiService.searchGithub(searchName); 
    }

  }

}
