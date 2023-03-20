// import { BaseModel, column, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";
import { DateTime } from "luxon";
// import Endereco from "App/Models/Endereco";

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  public userId: number;

  @column()
  public nome: string;

  @column()
  public telefone: string;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  // @hasMany(() => Endereco, {
  //   localKey: "id",
  //   foreignKey: "clienteId",
  // })
  // public enderecos: HasMany<typeof Endereco>;
}
