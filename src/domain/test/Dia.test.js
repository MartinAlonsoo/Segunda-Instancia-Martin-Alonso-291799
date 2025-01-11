import { expect, test, describe } from "@jest/globals";
import { Dias } from "../Dia";
import { Metas } from "../Metas";

describe("Dias class tests", () => {
  test("Crear un día y devolver el día", () => {
    let dia = new Dias(28, 3, 1);
    let diaNum = dia.getDia();
    expect(diaNum).toBe(28);
  });

  test("Crear un día y devolver el mes", () => {
    let dia = new Dias(28, 3, 1);
    let diaMes = dia.getMes();
    expect(diaMes).toBe(3);
  });

  test("Crear un día y devolver a que semana pertenece", () => {
    let dia = new Dias(28, 3, 1);
    let diaSem = dia.getSemana();
    expect(diaSem).toBe(1);
  });

  test("Crear un día y devolver la lista de metas vacía", () => {
    let dia = new Dias(28, 3, 1);
    expect(dia.getMetas().length).toBe(0);
  });

  test("Agregar una meta a la lista de metas", () => {
    let dia = new Dias(27, 3, 1);
    let meta = new Metas("saber sumar", "Primero");
    dia.addMeta(meta);
    expect(dia.getMetas().length).toBe(1);
  });

  test("Agregar una meta repetida a la lista de metas", () => {
    let dia = new Dias(27, 3, 1);
    let meta = new Metas("saber sumar", "Primero");
    dia.addMeta(meta);
    let expectedErrorMessage =
      "No se pudo agregar. Esta meta ya está en la lista o es invalida.";
    expect(() => dia.addMeta(meta)).toThrow(expectedErrorMessage);
  });

  test("Día toString", () => {
    let dia = new Dias(27, 3, 1);
    let expectedString = "27/3 Semana 1";
    expect(dia.toString()).toBe(expectedString);
  });

  test("Valor Día null", () => {
    let dia = new Dias(null, 3, 1);
    let expectedErrorMessage = "El día de la fecha es inválida";
    expect(() => dia.isValid()).toThrow(expectedErrorMessage);
  });

  test("Valor Día undefined", () => {
    let dia = new Dias(undefined, 3, 1);
    let expectedErrorMessage = "El día de la fecha es inválida";
    expect(() => dia.isValid()).toThrow(expectedErrorMessage);
  });

  test("Valor Día no es un número", () => {
    let dia = new Dias("hola", 3, 1);
    let expectedErrorMessage = "El día de la fecha es inválida";
    expect(() => dia.isValid()).toThrow(expectedErrorMessage);
  });

  test("Valor mes null", () => {
    let dia = new Dias(27, null, 1);
    let expectedErrorMessage = "El mes de la fecha es inválida";
    expect(() => dia.isValid()).toThrow(expectedErrorMessage);
  });
  test("Valor mes undefined", () => {
    let dia = new Dias(27, undefined, 1);
    let expectedErrorMessage = "El mes de la fecha es inválida";
    expect(() => dia.isValid()).toThrow(expectedErrorMessage);
  });

  test("Valor mes no es un número", () => {
    let dia = new Dias(27, "hola", 1);
    let expectedErrorMessage = "El mes de la fecha es inválida";
    expect(() => dia.isValid()).toThrow(expectedErrorMessage);
  });

  test("Día válida", () => {
    let dia = new Dias(27, 3, 1);
    expect(dia.isValid()).toBe(true);
  });
});
