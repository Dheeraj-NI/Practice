import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  @Input() value:string ='Nimap Infotech'

  constructor() {
    console.log("Constructor")
    console.log(this.value)
  }
  ngOnDestroy(): void {
    console.log("Destroy")
    
  }
  ngAfterViewChecked(): void {
    console.log("ViewChecked")
    
  }
  ngAfterViewInit(): void {
    console.log("ViewInit")
    
  }
  ngAfterContentChecked(): void {
    console.log("ContentChecked")
   
  }
  ngAfterContentInit(): void {
    console.log("ContentInit")
    
  }
  ngDoCheck(): void {
    console.log("DoCheck")
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("NgonChanges")
    console.log(changes)

  
  }

  
  ngOnInit(): void {
    console.log("Ng Oninit Called")
    console.log(this.value) 
    
  }
  

}
