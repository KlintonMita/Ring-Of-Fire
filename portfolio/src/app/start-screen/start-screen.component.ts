import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MyWorkComponent } from '../my-work/my-work.component';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [MyWorkComponent, FooterComponent],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss'
})
export class StartScreenComponent {

  openNav() {
    const mySidenav = document.getElementById("mySidenav");
    const mySpanId = document.getElementById("spanid");
    if (mySidenav ) {
      mySidenav.style.width = "100%";
    }
    if (mySpanId ) {
      mySpanId.style.display = "none";
    }
  }
  
  closeNav() {
    const mySidenav = document.getElementById("mySidenav");
    const mySpanId = document.getElementById("spanid");
    if (mySidenav) {
      mySidenav.style.width = "0";
    }
    if (mySpanId ) {
      mySpanId.style.display = "block";
    }
  }
}
