import { TestBed } from '@angular/core/testing';

import { EnrolleeService } from '../enrollee.service';
// import { HttpClientModule } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { Enrollee } from '../enrollees';
import { Subject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

describe('EnrolleeService', () => {
  let service: EnrolleeService;
  let httpMock: HttpTestingController;
  let baseUrl: string = "http://localhost:8080";
  // let subject: Subject<Element []>;
  beforeEach(() =>{
    TestBed.configureTestingModule({
      imports:[ HttpClientTestingModule],
      providers: [EnrolleeService]
    })
    service = TestBed.get(EnrolleeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    const service: EnrolleeService = TestBed.get(EnrolleeService);
    expect(service).toBeTruthy();
  });
  it('Get all Enrollees data from backend', () =>{
    service.getAllEnrolls().pipe(
      switchMap(()=> service.database$)
    ).subscribe( enrollees =>{
      expect(enrollees).toEqual(dummy_data);
    })
      // service.database$
      // expect(enrollees.length).toBe(2);
      // expect(enrollees).toEqual(dummy_data);
    // })
    const request = httpMock.expectOne(`${baseUrl}/enrollees`);
    expect(request.request.method).toBe('GET');
    request.flush(dummy_data);
  })
  it('Get one Enrollees data from backend', () =>{
    service.getEnroll(dummy_data[0].id).subscribe( enrollee =>{
      expect(enrollee).toEqual(dummy_data[0]);
    })
    const request = httpMock.expectOne(`${baseUrl}/enrollees/${dummy_data[0].id}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummy_data[0]);
  })
  xit('Put update a Enrollees data from backend', () =>{
    dummy_data[0].name = "You";
    dummy_data[0].active = false;
    service.updateEnroll(dummy_data[0].id, dummy_data[0] );
    service.database$.subscribe(result =>{
      expect(result).toBe([]);
    })
    const request = httpMock.expectOne(`${baseUrl}/enrollees/${dummy_data[0].id}`);
    console.log(request.request.method)
    expect(request.request.method).toBe('PUT');
    request.flush(dummy_data[0]);
  })

  afterEach(()=>{
    httpMock.verify();
  })
});

const dummy_data: Enrollee [] = [{ 
    id: "janlasdfjs-sdfsdf-saf-safas",
    name:'first',
    dataOfBirth: '1986-26-2',
    active: true
},
{ 
  id: "sdfkassdf-sfs--sfsdfsdfs",
  name:'second',
  dataOfBirth: '1990-30-6',
  active: true
}]