import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
    selector: 'event-thumbnail',
    template: `
        <div class="well hoverwell thumbnail">
            <h2>{{event.name}}</h2>
            <div>date: {{event.date}}</div>
            <div>time: {{event.time}}</div>
            <div>price: \${{event.price}}</div>
            <div>
                <span>location: {{event.location.address}}</span>
                <span>&nbsp;</span>
                <span class="pad-left">{{event.location.city}}, {{event.location.country}}</span>
            </div>
        </div>
    `,
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div {color: #bbb}
    `]
})
export class EventThumbnailComponent {
    @Input() event: any
}