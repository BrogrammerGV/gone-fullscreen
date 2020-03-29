import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class FullscreenDbService {
 
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Client-ID': '5vi5yk78mjfb8ohjtdtda6ljz3wwht'
    })
  };
  
  private key = '5442136064096fcb9bb8317cef392d72';
  private ticker = 'https://api.nomics.com/v1/currencies/ticker?key=' + this.key + '&ids=BTC,ETH,XRP&interval=1d,30d&convert=EUR';
  constructor(private http: HttpClient) {
    this.getConfig();
   }


  getConfig() {
    // now returns an Observable of Config
    return this.http.get(this.ticker);
  }

  auth(){
    var x = this.http.get(' https://id.twitch.tv/oauth2/validate', this.httpOptions);
    console.log(x);
    return x;
  }
    
  getUserContent(ids: string){
    var x = this.http.get('https://api.twitch.tv/helix/users?' + ids, this.httpOptions);
    console.log(x);
    return x;
  }
  getTwitch(){
    var x = this.http.get('https://api.twitch.tv/helix/streams?game_id=33214', this.httpOptions);
    console.log(x);
    return x;
  }

  getCats(){
    var x = this.http.get(' https://api.thecatapi.com/v1/images/search', this.httpOptions);
    console.log(x);
    return x;

  }
}
