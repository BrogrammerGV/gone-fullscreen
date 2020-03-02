import { Component, OnInit } from '@angular/core';
import {FullscreenDbService} from '../fullscreen-db.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  constructor(private dbService: FullscreenDbService) { }

  public str: string;
  ngOnInit(): void {
    this.dbService.getConfig().subscribe((data: string) =>  {
      console.log(data);
      this.str = data.toString();
    });
  }

}
