import Route from '@ioc:Adonis/Core/Route'

Route.get('/cart', async () => {
  return { hello: 'cart' }
})
