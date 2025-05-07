'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.post('/student', 'StudentController.store');
Route.get('/student', 'StudentController.index');
Route.put('/student/:student_id', 'StudentController.update');
Route.delete('/student/:student_id', 'StudentController.delete');
