import { Component, OnInit , Output, EventEmitter} from '@angular/core';

import {EventService} from '../../event.service'
import { Router} from '@angular/router';
import {Events} from '../../eventModel'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
 
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  myData : Events[];
 

  constructor(private EventService:EventService , private router:Router) { 
    this.getData();
  }

  ngOnInit() {
    this.getData();
  }
  
 getData():void{
  this.EventService.getEvents().subscribe(
    data=>this.myData = data
  )
}
editEvent(id){
  this.EventService.updateEvent(id , true).subscribe()
  this.router.navigateByUrl('superadmin',{skipLocationChange:true});
}
deleteEvent(id){
  this.EventService.deleteEventById(id).subscribe();
  this.router.navigateByUrl('del')
}
}
