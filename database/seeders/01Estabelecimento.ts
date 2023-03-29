import { faker } from "@faker-js/faker";
import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Cidade from "App/Models/Cidade";
import CidadesEstabelecimento from "App/Models/CidadesEstabelecimento";
import Estabelecimento from "App/Models/Estabelecimento";
import Estado from "App/Models/Estado";
import User from "App/Models/User";

export default class EstabelecimentoSeeder extends BaseSeeder {
  public async run() {
    // const user = await User.create({
    //   email: "webevolui@email.com",
    //   password: "123456",
    //   tipo: "estabelecimentos",
    // });

    // await Estabelecimento.create({
    //   nome: faker.company.name(),
    //   logo: `https://picsum.photos/id/1/200/200`,
    //   online: true,
    //   bloqueado: false,
    //   userId: user.id,
    // });

    for (let i = 1; i <= 20; i++) {
      await User.create({
        email: `estabelecimento${i}@email.com`,
        password: "12345678",
        tipo: "estabelecimentos",
      });
    }

    for (let i = 1; i <= 20; i++) {
      await Estabelecimento.create({
        nome: faker.company.name(),
        logo: `https://picsum.photos/id/${i}/200/200`,
        online: faker.datatype.number({ min: 0, max: 1 }) == 1,
        bloqueado: false,
        userId: i,
      });
    }

    await Estado.createMany([
      {
        nome: "Minas Gerais",
        uf: "MG",
      },
      {
        nome: "Espírito Santo",
        uf: "ES",
      },
      {
        nome: "Rio de Janeiro",
        uf: "RJ",
      },
    ]);

    await Cidade.createMany([
      {
        nome: "Rio de Janeiro",
        estado_id: 3,
      },
      {
        nome: "Nova Iguaçu",
        estado_id: 3,
      },
      {
        nome: "São Gonçalo",
        estado_id: 3,
      },
      {
        nome: "Duque de Caxias",
        estado_id: 3,
      },
      {
        nome: "Aimorés",
        estado_id: 1,
      },
      {
        nome: "Colatina",
        estado_id: 2,
      },

    ]);

    for (let i = 1; i <= 20; i++) {
      await CidadesEstabelecimento.create({
        cidade_id: faker.datatype.number({ min: 1, max: 2 }),
        estabelecimento_id: i,
        custo_entrega: faker.datatype.float({
          min: 0,
          max: 3,
          precision: 0.5,
        }),
      });
    }
  }
}
