import { Component, Input } from '@angular/core';
import { Student } from '../../model/Student';

@Component({
  selector: 'tr [estudiantes-view]',
  standalone: true,
  imports: [EstudiantesViewComponent],
  templateUrl: './estudiantes-view.component.html',
 
})
export class EstudiantesViewComponent {
@Input() item!:Student
}
