import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { axiosClient } from 'src/axios.client';

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.css']
})
export class ProjectSectionComponent implements OnInit {

  ngOnInit(): void {
    // console.log(localStorage.getItem('project'))
  }
  constructor(      
    private router: Router,
    ){}

    async closeProject(){
      await axiosClient.delete('/produtopersonalizado/deleteProjeto')
      this.router.navigate(['/project-upload'])
    }
}
