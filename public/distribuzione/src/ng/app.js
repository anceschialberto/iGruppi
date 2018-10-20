import angular from 'angular'
import 'restangular'
import 'angular-route'
import 'angular-sanitize'

import { routing, location, restangular } from './app.config'
import homeController from './controllers/home.controller'
import signinController from './controllers/signin.controller';

import dataService from './services/data.service'
import modelService from './services/model.service'


export default angular.module('Distribuzione', ['ngRoute', 'ngSanitize', 'restangular'])
    .config(routing)
    .config(location)
    .config(restangular)
    .controller('SigninController', signinController)
    .controller('HomeController', homeController)
    .name
