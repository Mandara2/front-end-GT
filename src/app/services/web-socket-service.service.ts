import { EventEmitter, Injectable } from
'@angular/core';

import { Socket } from 'ngx-socket-io';

import { environment } from
'src/environments/environment';
import { SecurityService } from './security.service';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService extends Socket {
  callback: EventEmitter<any> = new EventEmitter();
  nameEvent: string;
  constructor(private securityService:SecurityService) {
    const userId = securityService.activeUserSession?.email || ''; // Asegúrate de que no sea nulo, Obtenemos el email
    super({ //Aqui nos conectamos al websocket
      url: environment.url_ms_cinema,
      options:{
        query:{ //Es como un body
          "user_id":userId
        }
      }
    })
    this.nameEvent = ""
    //this.listen()

  }
  setNameEvent(nameEvent: string) { //Cuando un usuario se loguee arranque un socket, este debe tener un nombre, aqui mandamos ese nombre
    this.nameEvent = nameEvent
    this.listen()
  }
  listen = () => { //Este pendiente a todo lo que pueda llegar del backend
    this.ioSocket.on(this.nameEvent, (res: any) => this.callback.emit(res))
  }
  // Para llamar este método es necesario inyectar el servicio
  // y enviar el payload
  // emitEvent=(payload={})=>{
  //   this.ioSocket.emit(this.nameEvent,payload)
  // }
}