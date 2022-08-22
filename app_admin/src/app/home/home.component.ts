import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(
  ) {
  }

  public isLoggedIn(): boolean {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/list-trips'])
      return true;
    };
    return false;
  }

}
