import { Injectable } from '@angular/core';
import { Course } from '../model/Course';
import { learningData } from '../data/learning.data';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  private learning:Course=learningData;
  constructor() { }

  getCourse():Course{
    return this.learning;
  }
}
