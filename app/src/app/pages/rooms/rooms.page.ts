import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage implements OnInit {
  rooms: any = []
  constructor(private chatService: ChatService, private socket: Socket) {
    this.socket.connect()

  }

  ngOnInit() {
    this.socket.emit("getRooms", { msh: "ff" })
    this.socket.fromEvent('rooms').subscribe(s => {
      console.log(s);
      this.rooms = s
    })
  }
  unread(user) {
    console.log(user);

  }
}
