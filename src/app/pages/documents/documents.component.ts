import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  standalone: true,
	imports: [NgbNavModule, NgbNavModule],
})
export class DocumentsComponent {
	active = 'top';

}
