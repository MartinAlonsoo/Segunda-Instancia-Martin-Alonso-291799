import { expect, test, describe } from "@jest/globals";
import { Semana } from "../semana";
import { Dias } from "../Dia";

describe("Semana class tests", () => {
  test("Ingresar una semana y devolver el numero", () => {
    let semana = new Semana(1);
    let semanaNum = semana.getNumero();
    expect(semanaNum).toBe(1);
  });

  test("Ingresar una semana y devolver la lista de días vacía", () => {
    let semana = new Semana(1);
    expect(semana.getDias().length).toBe(0);
  });

  test("Agregar día a la lista dias", () => {
    let semana = new Semana(1);
    let dia = new Dias(27, 3, 1);
    semana.agregarDia(dia);
    expect(semana.getDias().length).toBe(1);
  });

  test("Agregar día repetido a la lista dias", () => {
    let semana = new Semana(1);
    let dia = new Dias(27, 3, 1);
    semana.agregarDia(dia);
    let expectedErrorMessage =
      "No se pudo agregar. Este día ya está en la lista o no es válida.";
    expect(() => semana.agregarDia(dia)).toThrow(expectedErrorMessage);
  });

  test("Agregar día inválida a la lista dias", () => {
    let semana = new Semana(1);
    let dia1 = new Dias(27, 3, 1);
    let dia2 = new Dias(2, 4, 2);
    semana.agregarDia(dia1);
    let expectedErrorMessage =
      "No se pudo agregar. Este día ya está en la lista o no es válida.";
    expect(() => semana.agregarDia(dia2)).toThrow(expectedErrorMessage);
  });

  test("Numero de semana null", () => {
    let semana = new Semana(null);
    let expectedErrorMessage = "La semana es inválida";
    expect(() => semana.isValid()).toThrow(expectedErrorMessage);
  });

  test("Numero de semana undefined", () => {
    let semana = new Semana(undefined);
    let expectedErrorMessage = "La semana es inválida";
    expect(() => semana.isValid()).toThrow(expectedErrorMessage);
  });

  test("Numero de semana no es un numero", () => {
    let semana = new Semana("hola");
    let expectedErrorMessage = "La semana es inválida";
    expect(() => semana.isValid()).toThrow(expectedErrorMessage);
  });

  test("Semana válida", () => {
    let semana = new Semana(1);
    expect(semana.isValid()).toBe(true);
  });
});
