import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';

export interface UserData {
  id: string;
  name: string;
  age:string;
  qualification:string;
  YearofGraduation:string,
  contactno:string;
  email:string;
  skills:string;
}

const users: UserData[] = [
{id:'1',name:'nathan',age:'23',qualification:'B.Tech',YearofGraduation:'2019',contactno:'8129878485', email:'nathan@gmail.com', skills:'HTML,CSS,Angular,Node,C,PHP,AI,RObotics'},
{id:'2',name:'doe', age:'21',qualification:'B.A',YearofGraduation:'2021',contactno:'8129878488', email:'doe@gmail.com', skills:'Angular,Node,C,PHP,AI,RObotics,MongoDB'},
{id:'3',name:'federik', age:'25',qualification:'B.Arch',YearofGraduation:'2015',contactno:'9061594904', email:'federik@gmail.com', skills:'CSS,Angular,Node,C,PHP,AI,RObotics'},
{id:'4',name:'baiju', age:'27',qualification:'M.Tech',YearofGraduation:'2014',contactno:'8075818385', email:'baiju@gmail.com', skills:'Bootstrap,HTML,CSS,Angular,Node,C,PHP,AI,RObotics'},
{id:'5',name:'miyas', age:'31',qualification:'BCA',YearofGraduation:'2011',contactno:'9633618567', email:'miyas@gmail.com', skills:'C++,HTML,CSS,Angular,Node,C,PHP,AI,RObotics'},
{id:'6',name:'biju', age:'30',qualification:'MCA',YearofGraduation:'2010',contactno:'9633393073', email:'biju@gmail.com', skills:'HTML,CSS,Angular,Node,C,PHP,AI,RObotics'},
{id:'7',name:'manoj', age:'33',qualification:'M.A',YearofGraduation:'2007',contactno:'9895446589', email:'manoj@gmail.com', skills:'HTML,CSS,Angular,Node,C,PHP,AI,RObotics'},
{id:'8',name:'kumar', age:'36',qualification:'M.Sc',YearofGraduation:'2004',contactno:'9633396025', email:'kumar@gmail.com', skills:'HTML,CSS,Angular,Node,C,PHP,AI,RObotics'},
{id:'9',name:'victor', age:'22',qualification:'B.Sc',YearofGraduation:'2021',contactno:'9995919963', email:'victor@gmail.com', skills:'HTML,CSS,Angular,Node,C,PHP,AI,RObotics'},
{id:'10',name:'david', age:'26',qualification:'B.Ed',YearofGraduation:'2015',contactno:'7736569626', email:'david@gmail.com', skills:'HTML,CSS,Angular,Node,C,PHP,AI,RObotics'},
{id:'11',name:'davis', age:'24',qualification:'B.E',YearofGraduation:'2013',contactno:'7356592936', email:'davis@gmail.com', skills:'HTML,CSS,Angular,Node,C,PHP,AI,RObotics'},
{id:'12',name:'manny', age:'29',qualification:'B.Tech',YearofGraduation:'2009',contactno:'9288102543', email:'manny@gmail.com', skills:'HTML,CSS,Angular,Node,C,PHP,AI,RObotics'},

];



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'age', 'qualification','YearofGraduation','contactdetails','skills','actions'];
  dataSource: MatTableDataSource<UserData>;
  expandedElement: UserData | null;

  @ViewChild(MatSort, {static: false})
  set sort(value: MatSort) {
    if (this.dataSource){
      this.dataSource.sort = value;
    }
  }
    @ViewChild(MatPaginator, {static: false})
    set paginator(value: MatPaginator) {
      if (this.dataSource){
        this.dataSource.paginator = value;
      }
    }

  constructor() { }

  ngOnInit(): void {
            // Assign the data to the data source for the table to render
            this.dataSource = new MatTableDataSource(users);

  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
