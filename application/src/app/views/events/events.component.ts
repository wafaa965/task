import { Component, OnInit } from '@angular/core';
import { EventService } from '../../event.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  
  constructor(private EventService:EventService , private router :Router) {}
  ngOnInit() {
  }
  addNewEvent(obj){
    this.EventService.addEvent(obj);
    this.router.navigate(['/superadmin']);

  }

}
