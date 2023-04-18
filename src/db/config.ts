import { Sequelize } from "sequelize-typescript";
import { Users } from "../models/users";

const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: "root",
  password: "12345678",
  database: "users",
  logging: false,
  models: [Users],
});

export default connection;