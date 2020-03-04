import { Component, OnInit, Input } from '@angular/core';
import {FullscreenDbService} from '../fullscreen-db.service';

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.sass']
})
export class TwitchComponent implements OnInit {

  constructor(private dbService: FullscreenDbService) { }

  @Input() userData: Array<{}>;
  @Input() userDataGeneral: Array<{}>;
  public twitchDataLarge;
  ngOnInit(): void {
   this.twitchDataLarge = this.userData;
    console.log(this.userData);
  }
  
  GrabTwitch(){
    return this.dbService.getTwitch().subscribe((data: string) =>  {
     this.twitchDataLarge = data;
   });
   }



   
   damn(wowzer){

    var x = wowzer;
    x = x.replace('{width}', 50).replace('{height}', 50);
return x;
   }

}
