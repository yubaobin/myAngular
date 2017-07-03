import angular from 'angular';
import uiRouter from 'angular-ui-router';
import appRouter from './config/app.router';
import components from './views';
import './css/main.css';

const appComponent = {
  restrict: 'E',
  template: require('./app.html'),
  controller: () => {
    console.log(123);
  }
}

export default angular.module('app', [uiRouter, components])
     .config(appRouter)
     .component('app', appComponent)
     .name;
