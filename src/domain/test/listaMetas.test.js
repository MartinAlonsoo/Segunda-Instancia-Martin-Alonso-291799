import { expect, test, describe } from "@jest/globals";
import { ListaMeta } from "../listaMetas";
import { Metas } from "../Metas";

describe("ListaMetas class tests", () => {
  test("Crear una lista de metas vacía", () => {
    let listaMetas = new ListaMeta();
    let expectedLength = 0;
    expect(listaMetas.getMetas().length).toBe(expectedLength);
  });

  test("Agregar una meta a la lista", () => {
    let listaMetas = new ListaMeta();
    let meta = new Metas("saber sumar", "Primero");
    listaMetas.add(meta);
    let expectedLength = 1;
    expect(listaMetas.getMetas().length).toBe(expectedLength);
  });

  test("Agregar meta repetida a la lista", () => {
    let listaMetas = new ListaMeta();
    let meta = new Metas("saber sumar", "Primero");
    listaMetas.add(meta);
    let expectedErrorMessage =
      "No se pudo agregar. Esta meta ya está en la lista o es inválida.";
    expect(() => listaMetas.add(meta)).toThrow(expectedErrorMessage);
  });

  test("Agregar una meta inválido a la lista", () => {
    let listaMetas = new ListaMeta();
    let meta = new Metas("", "Primero");
    let expectedErrorMessage = "La descripción de la meta no puede ser vacío";
    expect(() => listaMetas.add(meta)).toThrow(expectedErrorMessage);
  });
});
