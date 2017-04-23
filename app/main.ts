import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './components/app.component';
import { AppHeaderComponent } from './components/app-header.component';
import { AppFooterComponent } from './components/app-footer.component';
import { ViewContactComponent } from './components/view-contact.component';
import { ContactService } from './services/contact.service';
import { ContactHttpService } from './services/contact.httpservice';
import { ContactListComponent } from './components/contact-list.component';
import { TitlePipe } from './pipes/title.pipe';
import { AgePipe } from './pipes/age.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AddContactComponent } from './components/add-contact.component';
import { EditContactComponent } from './components/edit-contact.component';
import { routes } from './app-routes';

@NgModule({
    imports: [
        // placeholder for other modules (internal or external)
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes, { useHash:true }),
        HttpModule
    ],
    declarations: [
        // placeholder for all your components, directives and pipes
        AppComponent,
        AppHeaderComponent,
        AppFooterComponent,
        ViewContactComponent,
        ContactListComponent,
        TitlePipe,
        AgePipe,
        FilterPipe,
        AddContactComponent,
        EditContactComponent
    ],
    providers: [
        // placeholder for all injectables (services)
        ContactService,
        ContactHttpService
    ],
    bootstrap: [
        //placeholder for all components used directly in index.html
        AppComponent
    ],
})
export class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule);