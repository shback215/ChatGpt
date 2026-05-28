import { Component } from '@angular/core';
import { ChatComponent } from './chat'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChatComponent], // Changed from ChatService to ChatComponent
  template: `<app-chat></app-chat>` // Fixed the broken HTML tag
})
export class App {}
