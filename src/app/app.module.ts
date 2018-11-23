import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // utan filändelse!

@NgModule({ // unik startup
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // här kopplas bs in
  bootstrap: [AppComponent] 
})
export class AppModule { }
// export class ServerComponent {}