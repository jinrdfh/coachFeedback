/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  //'/': { view: 'pages/homepage' },
  // 'GET /person/view/:id' : 'PersonController.view',
  // 'POST /person/delete/:id' : 'PersonController.delete',
  // '/person/update/:id' : 'PersonController.update',
  // '/person/create' : 'PersonController.create',
  // '/person/json' : 'PersonController.json',
  // '/person/index' : 'PersonController.index',
  // '/person/search' : 'PersonController.search',
  // '/person/paginate' : 'PersonController.paginate',


  // 'GET /' : 'RestaurantController.index',
  'GET /' : 'Course.index',
  'GET /restaurant' : 'RestaurantController.create',
  'POST /restaurant' : 'RestaurantController.create',
  // '/restaurant/create' : 'RestaurantController.create',
  'GET /restaurant/:id' : 'RestaurantController.view',
  // 'GET /restaurant/view/:id' : 'RestaurantController.view',
  // 'POST /delete/:id' : 'RestaurantController.delete',
  'DELETE  /restaurant/:id' : 'RestaurantController.delete',

  // 'POST /restaurant/delete/:id' : 'RestaurantController.delete',
  'GET /restaurant/update/:id' : 'RestaurantController.update',
  'PUT /restaurant/:id' : 'RestaurantController.update',
  // '/restaurant/update/:id' : 'RestaurantController.update',
  '/restaurant/admin' : 'RestaurantController.admin',
  '/restaurant/search' : 'RestaurantController.search',
  // '/restaurant/search' : 'RestaurantController.search',

  '/restaurant/json' : 'RestaurantController.json',

  'GET /user/login' : 'UserController.login',
  'POST /user/login' : 'UserController.login',
  'POST /user/logout' : 'UserController.logout',

  'GET /restaurant/:id/reservedBy': 'RestaurantController.populate',
  'GET /user/:id/reservationList': 'UserController.populate',
  'POST /user/:id/reservationList/add/:fk': 'UserController.add',
  'POST /user/:id/reservationList/remove/:fk': 'UserController.remove',


  'GET /user/:id/courseList': 'UserController.populateCourse',
  'GET /course/feedback': 'CourseController.create',


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
