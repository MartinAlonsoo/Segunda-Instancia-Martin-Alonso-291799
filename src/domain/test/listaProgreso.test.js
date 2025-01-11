import { expect, test, describe } from "@jest/globals";
import { ListaProgreso } from "../listaProgreso";
import { progresoGeneral } from "../Progreso_general";

describe("ListaProgreso class tests", () => {
  test("Crear una lista de progresos vacía", () => {
    let listaProgresos = new ListaProgreso();
    let expectedLength = 0;
    expect(listaProgresos.getProgresos().length).toBe(expectedLength);
  });

  test("Agregar un progreso a la lista", () => {
    let listaProgresos = new ListaProgreso();
    let progreso = new progresoGeneral(
      "Primero",
      "Viene cumpliendo todas las metas",
    );
    listaProgresos.add(progreso);
    let expectedLength = 1;
    expect(listaProgresos.getProgresos().length).toBe(expectedLength);
  });

  test("Agregar progreso repetido a la lista", () => {
    let listaProgresos = new ListaProgreso();
    let progreso = new progresoGeneral(
      "Primero",
      "Viene cumpliendo todas las metas",
    );
    listaProgresos.add(progreso);
    let expectedErrorMessage =
      "No se pudo agregar. El progreso de este grupo ya está documentado o es inválido, pero puede actualizarlo.";
    expect(() => listaProgresos.add(progreso)).toThrow(expectedErrorMessage);
  });

  test("Agregar un progreso inválido a la lista", () => {
    let listaProgresos = new ListaProgreso();
    let progreso = new progresoGeneral(
      null,
      "Viene cumpliendo todas las metas",
    );
    let expectedErrorMessage = "El progreso debe estar asignado a un grupo";
    expect(() => listaProgresos.add(progreso)).toThrow(expectedErrorMessage);
  });
});
