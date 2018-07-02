import { Injectable } from '@angular/core';
import { Config } from '../models/apiModels'

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  public config: Config = new Config();

  constructor() {
    this.config.apiUrl = "localhost:4200"
  }
}
