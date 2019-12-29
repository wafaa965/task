import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Events} from './eventModel';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl = 'http://localhost:3000/';
  constructor(private http :HttpClient) { }
  getEvents(){
    return this.http.get<Events[]>(this.baseUrl+'events')
  }
  addEvent( event :Events){
    return this.http.post(this.baseUrl+'events',event).subscribe();
  }
  deleteEventById(id : String){
    return this.http.delete(this.baseUrl+'events/'+id);
  }
  updateEvent(id:string , state:boolean){
    return this.http.patch(this.baseUrl+'events/'+id,{state:true})
  }
  getSingleEvent(state:boolean){
    return this.http.get<Events>(this.baseUrl + 'events/' + state)
  }
  getEventById(id :string){
    return this.http.get<Events>(this.baseUrl+'event/'+id)
  }
  updateEventById(id: string , event:any){
    return this.http.patch(this.baseUrl + 'event/'+id , event)
  }
  
}
