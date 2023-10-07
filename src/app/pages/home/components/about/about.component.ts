import { Component, OnInit, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit , AfterViewInit {

  stat1Value: number = 0;
  stat2Value: number = 0;
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.animateNumberCounters();
  }
  ngAfterViewInit(): void {
    this.startAnimation();
  }
  startAnimation() {
    // Trigger the animation by adding the CSS class
    this.renderer.addClass(this.el.nativeElement.querySelector('.stats-bar'), 'animate-stats');
  }
  
  
  animateNumberCounters() {
    const targetStat1Value = 100; // Set your target value
    const targetStat2Value = 200; // Set your target value

    const increment1 = targetStat1Value / 100;
    const increment2 = targetStat2Value / 100;

    const interval = setInterval(() => {
      if (this.stat1Value >= targetStat1Value && this.stat2Value >= targetStat2Value) {
        clearInterval(interval);
      } else {
        this.stat1Value += increment1;
        this.stat2Value += increment2;
      }
    }, 20); // Adjust the interval as needed
  }

}
