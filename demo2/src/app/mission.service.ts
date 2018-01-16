import { Injectable } from '@angular/core';

@Injectable()
export class MissionService {

  mission = [];
  constructor() { console.log('注册服务'); }

  setMission(mission:string) {
    this.mission.push(mission);
  }
  getMission() {
    return this.mission;
  }
}
