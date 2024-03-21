import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-rotes-handle',
  templateUrl: './rotes-handle.component.html',
  styleUrls: ['./rotes-handle.component.css']
})
export class RotesHandleComponent {
  constructor(private activer: ActivatedRoute) { }

  router: string | null = null

  ngOnInit() {
    console.log()
    this.router = this.activer.snapshot.paramMap.get('routes')
    console.log(this.router)

  }
}
