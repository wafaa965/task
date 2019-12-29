import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import {Events} from '../../eventModel';
import {EventService} from '../../event.service'

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-editevent',
  templateUrl: './editevent.component.html',
  styleUrls: ['./editevent.component.css']
})
export class EditeventComponent implements OnInit {

  events: Events = { _id: '', description: '', eventname:'',date : new Date(2017, 4, 4, 17, 23, 42, 11)}
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private ES:EventService ,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getEvents();
  }
  getEvents() {
    const id = this.route.snapshot.params.id;
    this.ES.getEventById(id).subscribe(
      data => 
        this.events = data
        );
  }
  EditEvent(updatedData) {
    const id = this.route.snapshot.params.id;
    this.ES.getEventById(id).subscribe(
      data => {
        this.events = data;
        this.ES.updateEventById(id, updatedData).subscribe();
      }
    );
    
    this.router.navigate([''])
  }


}

