import { expect, test, describe } from "@jest/globals";
import { Usuario } from "../Usuario";
import { ListaUsuario } from "../listaUsuario";

describe("ListaUsuario class tests", () => {
  test("Crear una lista de usuarios vacío", () => {
    let listaUsuarios = new ListaUsuario();
    let expectedLength = 0;
    expect(listaUsuarios.getUsuarios().length).toBe(expectedLength);
  });

  test("Agregar alumno a la lista", () => {
    let listaUsuarios = new ListaUsuario();
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    listaUsuarios.add(usuario);
    let expectedLength = 1;
    expect(listaUsuarios.getUsuarios().length).toBe(expectedLength);
  });

  test("Agregar usuario repetido a la lista", () => {
    let listaUsuarios = new ListaUsuario();
    let usuario = new Usuario(
      "Lucas",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    listaUsuarios.add(usuario);
    let expectedErrorMessage =
      "No se pudo agregar. Lucas-Perez ya está en la lista.";
    expect(() => listaUsuarios.add(usuario)).toThrow(expectedErrorMessage);
  });

  test("Agregar un usuario inválido a la lista", () => {
    let listaUsuarios = new ListaUsuario();
    let usuario = new Usuario(
      "",
      "Perez",
      "lp@gmail.com",
      "5.123.432-1",
      91476810,
      "Maestro/a",
    );
    let expectedErrorMessage = "El nombre del usuario no puede ser vacío";
    expect(() => listaUsuarios.add(usuario)).toThrow(expectedErrorMessage);
  });
});
