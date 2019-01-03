import { Component } from "@angular/core";

@Component({  // kallas för decorator som börjar med @
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online {
        color: white;
    }
    `]
})

export class ServerComponent {
    serverId: number = 10
    serverStatus: string = 'offline'

    constructor(){
        this.serverStatus= Math.random() > 0.5 ? 'online' : 'offline'
    }


    getServerStatus() {
        return this.serverStatus
    }

    getColor(){
        // grön eller röd. ? är en avancerad | som tar första som sant och andra som falskt
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}
