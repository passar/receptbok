import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!' }];
  //newServerName = '';
  //newServerContent = '';

  // ska hämta ut data från cockpit hit.
  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    // this.serverCreated.push({
    //   serverName: this.serverName, serverContent: this.serverContent
    // })
    //
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {

    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
} // AppComponent slut

