import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"title"
})

export class TitlePipe implements PipeTransform{

    transform(gender: string): string{
        if(!gender){
            return "";
        }
        switch(gender.toLowerCase()){
            case 'm':case 'male': return "Mr.";
            case 'f': case 'female': return "Ms.";
            default: return "";
        }
    }
}