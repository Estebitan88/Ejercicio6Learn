import { Component, Input } from '@angular/core';
import { Course } from '../../model/Course';

@Component({
  selector: 'materia-view',
  standalone: true,
  imports: [MateriaViewComponent],
  templateUrl: './materia-view.component.html',
 
})
export class MateriaViewComponent {
@Input() course!:Course
}
