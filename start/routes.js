'use strict'


/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')

// Qoutes  routes
Route.get('/','QuoteController.index').as('index')
Route.get('/view-quote/:id','QuoteController.show').as('view.quote')

// Auth routes
Route.get('/register','AuthController.registrationView').as('register.create')
//.validator('Register')
Route.post('/register-store','AuthController.postRegister').as('register.store')
Route.get('/login','AuthController.loginView').as('login.create')
Route.post('/login-store','AuthController.postLogin').as('login.store')


Route.group(() => {
    Route.get('/create-quote','QuoteController.create').as('create.quote')
    Route.post('/store-quote','QuoteController.store').as('store.quote')
    Route.get('/edit-quote/:id','QuoteController.edit').as('edit.quote')
    Route.post('/update-quote/:id','QuoteController.update').as('update.quote')
    Route.get('/delete-quote/:id','QuoteController.destroy').as('delete.quote')

    // Auth(Logout routes) 
    Route.post('/logout','AuthController.logout').as('logout')
}).middleware(['auth'])