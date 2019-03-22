import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

/**
 * 	消息组件
 *
 *	@author 刘宏强
 */
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
