import { Component, OnInit, IterableDiffers } from '@angular/core';
import {FullscreenDbService} from '../fullscreen-db.service';
import { TwitchComponent} from '../twitch/twitch.component';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  constructor(private dbService: FullscreenDbService) { }

  public apiData;
  public twitchData;
  public str: string;
  public idUrl:string;
  public keys;
  public userIds;
  ngOnInit(): void {
    this.dbService.getConfig().subscribe((data: string) =>  {
      console.log(data);
 
      this.apiData = data;
      this.str = data.toString();
    });
    this.GrabTwitch();
    console.log(this.userIds)
  }



  // tslint:disable-next-line: no-trailing-whitespace
  GrabTwitch(){
   return this.dbService.getTwitch().subscribe((data) =>  {
      var x = data['data'];
       x.forEach(element => {
         this.idUrl += 'id=' + element.user_id + '&';
         
       });
     this.twitchData = data;
     this.idUrl = this.idUrl.replace('undefined', '').substring(0, this.idUrl.length - 2);
     console.log(this.idUrl);

     this.getUsers();
     console.log(this.twitchData);
    });
  }


  getUsers(){
      let x = this.idUrl;
    return this.dbService.getUserContent(x).subscribe((data: string) => { console.log(data)});
  
  }


  KeyField(pie): string {
    return Object.keys(this.apiData[pie])[pie];
 }
  // tslint:disable-next-line: no-trailing-whitespace

  dataChecker(name){
    if(name != undefined){
      return name;
    }
    else return {};
  }

  }

