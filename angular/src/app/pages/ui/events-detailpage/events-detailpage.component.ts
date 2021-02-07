import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { BasePageComponent } from '../../base-page/base-page.component';
import { HttpService } from '../../../services/http/http.service';
import { IAppState } from '../../../interfaces/app-state';



  export interface ProfileImage {
      _id: string;
      url: string;
      s3_url: string;
      created_at: Date;
      __v: number;
      id: string;
  }

  export interface Subscription {
      _id: string;
      expires_at?: any;
      created_at: Date;
      updated_at: Date;
      is_active: boolean;
      id: string;
  }

  export interface RootObject {
      _id: string;
      roles: string[];
      deleted: boolean;
      deleted_at?: any;
      first_name: string;
      last_name: string;
      nickname: string;
      email: string;
      date_of_birth: Date;
      gender: string;
      phone: string;
      location: string;
      created_at: Date;
      updated_at: Date;
      __v: number;
      profile_image: ProfileImage;
      address: string;
      business_association: string;
      country: string;
      house_number: number;
      subscription: Subscription;
      zipcode: string;
      id: string;
  }





@Component({
  selector: 'app-events-detailpage',
  templateUrl: './events-detailpage.component.html',
  styleUrls: ['./events-detailpage.component.scss']
})
export class EventsDetailpageComponent extends BasePageComponent implements OnInit, OnDestroy {
  eventDetails: [];

  constructor(
    store: Store<IAppState>,
    httpSv: HttpService,
    private route: ActivatedRoute,
  ) {
    super(store, httpSv);
    this.pageData = {
      title: 'EventDetailpage',
      loaded: true,
      // breadcrumbs: [
      //   {
      //     title: 'UI Kit',
      //     route: 'default-dashboard'
      //   },
      //   {
      //     title: 'Events'
      //   }
      // ]
    };
    this.eventDetails = []
  }



  ngOnInit() {
    this.getEventDetails()
    super.ngOnInit();
  }

  ngOnDestroy() {
    super.ngOnDestroy();
  }

  getEventDetails() {
    let eventName = this.route.snapshot.queryParams.event
    console.log(eventName)

    let url = "https://qub3z-api-test.herokuapp.com/v1/events"
    this.httpSv.getEvents(url).subscribe(
      data => {

       let eventData = data.filter(data => {
          return data.name == eventName

        })
        let eventDetails = eventData[0].attendees

        // eventDetails[0].date_of_birth = "sdsdsd"
    

         eventDetails.map(data => {
           
             let birthDate  = data.date_of_birth
             let dateToConvert = new Date(birthDate)
             let convertedDate = dateToConvert.toLocaleDateString()
             console.log(convertedDate)
             data.date_of_birth = convertedDate

         })
     this.eventDetails = eventDetails
        
        // let eventDetailsWithRightBirthDay = eventDetails.map(datas => {

        //   let birthDate  = datas.date_of_birth
        //   let dateToConvert = new Date(birthDate)
        //   let convertedDate = dateToConvert.toLocaleDateString()
        //   console.log(convertedDate)
        //   datas.date_of_birth = convertedDate
               
          
        })
// console.log(eventDetails)
//         this.eventDetails = eventDetailsWithRightBirthDay
 


        // console.log(this.eventDetails)
      }
    // )
  // }
}
