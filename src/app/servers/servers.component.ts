import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // selection by <x></x>
  // selector:'[app-servers]', // selection by attribute <div x></div>
  // selector:'.app-servers', // val genom class
  templateUrl: './servers.component.html',
  // template: ` <!-- används för att kunna skriva flera rader i denna filen -->
  // <app-server></app-server><app-server></app-server>
  // <p>ifrån servers.components.ts</p>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true
    },2000)
  }

  ngOnInit() {
  }

}
