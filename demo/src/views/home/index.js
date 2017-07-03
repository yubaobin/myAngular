/**
 * Created by yohouakira on 2017/6/21.
 */
import angular from 'angular';
import template from './template.html';

class HomeController {
  constructor() {
    console.log("HomeController created");
  }
}

export default angular.module('app.home', [])
  .component('home', {
    template    : template,
    controller  : HomeController
  })
  .name;

HomeController.$inject = [];