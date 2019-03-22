import { Injectable } from '@angular/core';

/**
 * 	消息服务
 *
 *	@author 刘宏强
 */
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }

}
