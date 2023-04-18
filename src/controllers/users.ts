import { RequestHandler } from "express";

import { Users } from "../models/users";

export const createToDo: RequestHandler = async (req, res, next) => {
  var todos = await Users.create({ ...req.body });
  return res
    .status(200)
    .json({ message: "Usuário criado com sucesso", data: todos });
};

export const deleteToDo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const deletedTodo: Users | null = await Users.findByPk(id);
  await Users.destroy({ where: { id } });
  return res
    .status(200)
    .json({ message: "Usuário deletado com sucesso", data: deletedTodo });
};

export const getAllToDo: RequestHandler = async (req, res, next) => {
  const allTodos: Users[] = await Users.findAll();
  return res
    .status(200)
    .json({ message: "Usuários adquiridos com sucesso", data: allTodos });
};

export const getTodoById: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  const todos: Users | null = await Users.findByPk(id);
  return res
    .status(200)
    .json({ message: "Usuário adquirido com sucesso", data: todos });
};

export const updateTodo: RequestHandler = async (req, res, next) => {
  const { id } = req.params;
  await Users.update({ ...req.body }, { where: { id } });
  const updatedTodos: Users | null = await Users.findByPk(id);
  return res
    .status(200)
    .json({ message: "Usuário atualizado com sucesso", data: updatedTodos });
};