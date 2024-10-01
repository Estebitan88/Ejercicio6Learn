import { Component, OnInit } from '@angular/core';
import { LearningService } from '../../services/learning.service';
import { Course } from '../../model/Course';

@Component({
  selector: 'app-learning',
  standalone: true,
  imports: [],
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
