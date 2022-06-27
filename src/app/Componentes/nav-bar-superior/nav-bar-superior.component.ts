import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-superior',
  templateUrl: './nav-bar-superior.component.html',
  styleUrls: ['./nav-bar-superior.component.css']
})
export class NavBarSuperiorComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  irALogin(){
    this.router.navigate([`login`]);
  }

}
