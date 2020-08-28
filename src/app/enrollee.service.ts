import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject  } from 'rxjs';
import {shareReplay, switchMap, catchError} from 'rxjs/operators';
import { Enrollee } from './enrollees';


@Injectable({
    providedIn: "root"
})
export class EnrolleeService{

    private baseUrl: string = "http://localhost:8080";
    public database$: Subject<Enrollee []> = new Subject();

    constructor(private _http:HttpClient){}

    // use this to update the value after clicking from the dialog
    getAllEnrolls(): Observable<Enrollee []>{
        this._http.get<Enrollee []>(`${this.baseUrl}/enrollees`).subscribe(res=>{
            // need to update infromation same time
            this.database$.next(res);
        });
        return this.database$;
    }
    getEnroll(id : string): (Observable< Enrollee>|Observable<unknown>){
        return this._http.get<Enrollee >(`${this.baseUrl}/enrollees/${id}`).pipe(
            catchError((error) => {
                console.error("error happens when updating enrollee: "+id );
                console.error('error loading the list of users', error);
                prompt("Something happened when fetching data from backend.");
                return of();
            })
        );
    }
    updateEnroll(id : string ,enrollee: Enrollee):void{
        this._http.put<Enrollee >(`${this.baseUrl}/enrollees/${id}`, enrollee).pipe(
            catchError((error) => {
                console.error("error happens when updating enrollee: "+id );
                console.error('error loading the list of users', error);
                alert("Something happened when fetching data from backend.");
                return of();
            }),
            switchMap((res: Enrollee) =>{
                return this.getAllEnrolls();;
            })
     )
     .subscribe((res)=>{});
    }

}