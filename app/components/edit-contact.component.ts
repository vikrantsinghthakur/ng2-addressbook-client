import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Contact } from '../models/contact'
import { ContactService } from '../services/contact.service'
import { ContactHttpService } from '../services/contact.httpservice'

@Component({
    selector: "edit-contact",
    templateUrl: "./templates/contact-form.html"
})

export class EditContactComponent implements OnInit{

    private contact:Contact = new Contact();

    constructor(private service: ContactHttpService,
                private activatedRoute:ActivatedRoute,
                private router:Router){}

    ngOnInit(){
        this.activatedRoute.params.subscribe(params => {
        this.service.getContact(params['contact_id'])
            .then(contact=>{
                this.contact=contact;
            })
            .catch(err=>console.log(err))
        });
    } 


    btnSaveClickHandler(){
        this.service.updateContact(this.contact)
            .then(contact => {
                this.router.navigate(['/view-contact',this.contact._id])
            })
            .catch(err => {});
    }
}