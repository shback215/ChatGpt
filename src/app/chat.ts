import { Component, Injectable, signal } from '@angular/core';
import { GoogleGenerativeAI } from '@google/generative-ai';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  messages = signal<Array<{ role: 'user' | 'assistant' | 'system', content: string }>>([]);
  private _loading: boolean = false; 

  // This ensures the secure .env key matches the variable name 'genAI' perfectly
  // private genAI = new GoogleGenerativeAI(import.meta.env['NG_APP_GEMINI_KEY'] || '');

  isLoading(): boolean {
    return this._loading;
  }
async sendMessage(userMessage: string) { 
  if (!userMessage || !userMessage.trim()) return; 
  
  this._loading = true; 
  this.messages.update(prev => [...prev, { role: 'user', content: userMessage }]); 
  
  try { 
    // This safely routes through your local backend proxy to bypass Angular's security block
    const response = await fetch('http://localhost:3000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: userMessage })
    });

    const data = await response.json();
    
    // Read the clean reply sent back by your server
    const replyText = data.reply || 'No text returned from server.';
    
    this.messages.update(prev => [...prev, { role: 'assistant', content: replyText }]); 
  } catch (error: any) { 
    console.error("Connection Error:", error); 
    this.messages.update(prev => [...prev, { role: 'system', content: 'Could not reach local backend.' }]); 
  } finally { 
    this._loading = false; 
  }
}
        
}

@Component({
  selector: 'app-chat',
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class ChatComponent {
  constructor(public chatService: ChatService) {}
}
