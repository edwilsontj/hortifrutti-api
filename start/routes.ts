import Route from '@ioc:Adonis/Core/Route'

// Login para os 3 tipos de users
Route.post("/login", "AuthController.login");
Route.post("logout", "AuthController.logout");

Route.group(() => { 
  Route.get("auth/me", "AuthController.me")
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