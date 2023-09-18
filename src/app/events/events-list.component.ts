import { Component } from '@angular/core'

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Sporting Events</h1>
            <hr>
            <event-thumbnail (eventClick)="handleEventClicked($event)" #thumbnail *ngFor="let event of events" [event]="event"></event-thumbnail>
        </div>
    ` 
})
export class EventsListComponent {
    events = [
        {
            id: 1,
            name: "Magic vs Wizards",
            date: '9/26/2023',
            time: '7:00 PM',
            price: 100,
            imageUrl: '/assets/images/angularconnect-shield.png',
            location: {
                address: '1057 West Street',
                city: 'Orlando',
                country: 'United States'
            }
        },
        {
            id: 2,
            name: "Knights vs Bears",
            date: '10/26/2023',
            time: '3:00 PM',
            price: 59.99,
            imageUrl: '/assets/images/angularconnect-shield.png',
            location: {
                address: '1057 West Street',
                city: 'Orlando',
                country: 'United States'
            }
        }
    ]

    handleEventClicked(data:any) {
        console.log('received:' + data);
    }
}
