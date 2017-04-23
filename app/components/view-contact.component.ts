import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from "../models/contact";
import { ContactService } from '../services/contact.service'
import { ContactHttpService } from '../services/contact.httpservice'

@Component({
    selector: "view-contact",
    templateUrl: "./templates/view-contact.html"
})

export class ViewContactComponent {
    private contact: Contact = new Contact();

    constructor(private service: ContactHttpService, activatedRoute: ActivatedRoute, private router:Router){
        activatedRoute.params.subscribe(params => {
            service.getContact(params["contact_id"])
                .then((contact:Contact) => {
                    this.contact=contact;
                });
        });
        
    }

    deleteButtonHandler(){
        if(!confirm("Are you sure you want to delete this contact?"))return;

        this.service.deleteContact(this.contact._id)
                    .then(()=>{
                        this.router.navigate(["/"])
                    })
                    .catch(err => console.error(err));
    }
}