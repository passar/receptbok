import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // selection by <x></x>
  // selector:'[app-servers]', // selection by attribute <div x></div>
  // selector:'.app-servers', // val genom class
  templateUrl: './servers.component.html', // måste man ha
  // template: ` <!-- används för att kunna skriva flera rader i denna filen -->
  // <app-server></app-server><app-server></app-server>
  // <p>ifrån servers.components.ts</p>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false
  serverCreationStatus = 'No server was created!'
  serverName=""

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!'
  }

  onUpdateServerName(event: any) {
    //console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value
  }
}