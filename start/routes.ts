import Route from '@ioc:Adonis/Core/Route'

// Login para os 3 tipos de users
Route.post("/login", "AuthController.login");
Route.post("logout", "AuthController.logout");

Route.post("/cliente/cadastro", "ClientesController.store");

Route.get("/cidades", "CidadesController.index");
Route.get("/cidades/:id/estabelecimentos", "CidadesController.estabelecimentos");

Route.get("/estabelecimentos/:id", "EstabelecimentosController.show");

Route.group(() => { 
  Route.get("auth/me", "AuthController.me")

  Route.resource("/enderecos", "EnderecosController").only([
    "store",
    "index",
    "update",
    "destroy"
  ])

  Route.post("/pedidos","PedidosController.store")
  Route.get("/pedidos","PedidosController.index")
  Route.get("/pedidos/:hash_id","PedidosController.show")

  Route.get("/Estabelecimento/pedidos","EstabelecimentosController.pedidos")

  Route.put("/cliente","ClientesController.update");
}).middleware("auth")

Route.get('/', async () => {
  // User.create({
  //   email: 'admin@email.com',
  //   password: '123456',
  //   tipo: 'admin',
  // })
  return {
    hortifrutti: "Curso!",
  }
});

// Route.post('/gettoken', async ({request, response, auth}: HttpContextContract ) => {
//   const email = request.input("email");
//   const password = request.input("password");
  
//   const user = await User.findBy("email",email);

//   if (user == null) {
//     return response.notFound("Usuário não encontrado")
//   }
  
//   const token = await auth.use('api').attempt(email, password);

//   return response.ok(token)
// });

// Route.get('/auth', async ({ auth, response }: HttpContextContract ) => {
//   return response.ok("Somente usuários autenticados!")
// }).middleware("auth");