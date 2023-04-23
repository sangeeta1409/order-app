import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {
  @Input()visible:boolean =false;
  @Input()notFoundMessage:string ="Nothing Found !";
  @Input() resetLinkText:string ='Reset';
  @Input() resetLinkRoute:string ='/';
  constructor(){}
  ngOnInit(): void {
    
  }
}
