import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  //går att binda till olika namn: property name alias
  @Input('srvElement') element: { type: string, name: string, content: string }
  // @Input() element: { type: string, name: string, content: string }

  constructor() { }

  ngOnInit() {
  }

}
