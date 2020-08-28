import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject  } from 'rxjs';
import {shareReplay, switchMap} from 'rxjs/operators';
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
    getEnroll(id : string): Observable< Enrollee >{
        return this._http.get<Enrollee >(`${this.baseUrl}/enrollees/${id}`);
    }
    updateEnroll(id : string ,enrollee: Enrollee):void{
        this._http.put<Enrollee >(`${this.baseUrl}/enrollees/${id}`, enrollee).pipe(
            switchMap((res: Enrollee) =>{
                return this.getAllEnrolls();;
            })
     )
     .subscribe((res)=>{});
    }

}