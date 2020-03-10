import { Component, OnInit } from '@angular/core';
import { FullscreenDbService } from '../fullscreen-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private dbService: FullscreenDbService) { }
public text = "Say Something";
public changeText;
  public cats;
  ngOnInit(): void {
    this.getUsers();


  }

  getUsers(){
  this.dbService.getCats().subscribe((data: string) => { 
    console.log(data);
    this.cats = data[0]
    console.log(this.cats);
  });
    


}

changeTexter(){
  this.text = this.changeText;

}

}