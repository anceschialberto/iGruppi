import angular from 'angular'
import 'restangular'
import 'angular-route'
import 'angular-sanitize'
import 'angular-local-storage'

import { routing, location, restangular, localStorage } from './app.config'
import homeController from './controllers/home.controller'
import signinController from './controllers/signin.controller';

import dataService from './services/data.service'

export default angular.module('Distribuzione', ['ngRoute', 'ngSanitize', 'restangular', 'LocalStorageModule'])
    .config(routing)
    .config(location)
    .config(restangular)
    .config(localStorage)
    .service('dataService', dataService)
    .controller('SigninController', signinController)
    .controller('HomeController', homeController)
    .name
