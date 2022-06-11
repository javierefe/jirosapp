import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container{
      margin: 10px;
    }
  `
  ]
})
export class HomeComponent implements OnInit {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  shouldRun: any = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
  reason: any = '';
  constructor() { }

  ngOnInit(): void {
  }
  close(reason : string){
    this.reason = reason;
    this.sidenav.close();
  }
}
