import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EventGetAllRes } from "projects/common/src/app/pojo/event/EventGetAllRes";
import { EventService } from "projects/common/src/app/service/event.service";
import { UserService } from "projects/common/src/app/service/user.service";
import { Subscription } from "rxjs";

@Component({
    selector: 'app-event-detail',
    templateUrl: './event-detail.component.html'
})

export class EventDetailComponent {

    private geEventDetail$?: Subscription
    getByEventId?: EventGetAllRes
    eventDelete$?: Subscription
    userId = this.userService.getidUser()

    constructor(
        private eventService: EventService,
        private router: ActivatedRoute,
        private userService: UserService

    ) {

    }

    ngOnInit(): void {
        this.router.params.subscribe(result1 => {

            this.geEventDetail$ = this.eventService.getByEventId(result1['id']).subscribe(result => {
                this.getByEventId = result
            })

        })
    }

    deleteEvent(event: EventGetAllRes) {
        console.log("Delete")
        this.eventDelete$ = this.eventService.delete(event.id).subscribe(res => {
            alert('Berhasil di hapus')
            this.ngOnInit()
        })
    }

}
