import { Component, OnInit } from '@angular/core';
import { LearningService } from '../../services/learning.service';
import { Course } from '../../model/Course';
import { MateriaViewComponent } from "../materia-view/materia-view.component";
import { EstudiantesViewComponent } from "../estudiantes-view/estudiantes-view.component";

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [MateriaViewComponent, EstudiantesViewComponent],
  templateUrl: './learning.component.html',
  
})
export class LearningComponent implements OnInit {

  course!:Course;
  constructor(private service:LearningService){

  }
  ngOnInit(): void {
    this.course=this.service.getCourse  ();
  }
}
