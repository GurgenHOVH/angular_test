import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/service/notes-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private notesService: NotesService) { }

  ngOnInit() {
  }

  tooggleMenu() {
    alert('dwdwd');
    this.notesService.sidenavOpened = !this.notesService.sidenavOpened;
  }

}
