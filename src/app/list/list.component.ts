import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  beers:Object;
  constructor(private http: HttpService) { }

  ngOnInit() {
    this.http.Getbeer().subscribe(data =>
      {
      this.beers = data;
      console.log(this.beers);
    });
  }

}
