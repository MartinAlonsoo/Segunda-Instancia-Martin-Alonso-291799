import { expect, test, describe } from "@jest/globals";
import { Calendario } from "../Calendario";
import { Semana } from "../semana";

describe("Calendario class tests", () => {
  test("Crear un calendario y devolver el mes", () => {
    let calendario = new Calendario(3);
    let calendarioMes = calendario.getMes();
    expect(calendarioMes).toBe(3);
  });

  test("Crear un calendario y devolver la lista de semanas vacía", () => {
    let calendario = new Calendario(3);
    let calendarioSems = calendario.getSemanas();
    expect(calendarioSems.length).toBe(0);
  });

  test("Agregar una semana a la lista de semanas del calendario", () => {
    let calendario = new Calendario(3);
    let semana = new Semana(1);
    calendario.agregarSemana(semana);
    let calendarioSems = calendario.getSemanas();
    expect(calendarioSems.length).toBe(1);
  });

  test("Agregar una semana repetida a la lista de semanas del calendario", () => {
    let calendario = new Calendario(3);
    let semana = new Semana(1);
    calendario.agregarSemana(semana);
    let expectedErrorMessage =
      "No se pudo agregar. Esta semana ya está en la lista.";
    expect(() => calendario.agregarSemana(semana)).toThrow(
      expectedErrorMessage,
    );
  });

  test("Agregar una semana inválida a la lista de semanas del calendario", () => {
    let calendario = new Calendario(3);
    let semana = new Semana(null);
    let expectedErrorMessage = "La semana es inválida";
    expect(() => calendario.agregarSemana(semana)).toThrow(
      expectedErrorMessage,
    );
  });

  test("Calendario con mes null", () => {
    let calendario = new Calendario(null);
    let expectedErrorMessage = "El mes no es válido";
    expect(() => calendario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Calendario con mes undefined", () => {
    let calendario = new Calendario(undefined);
    let expectedErrorMessage = "El mes no es válido";
    expect(() => calendario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Mes no es un valor numérico", () => {
    let calendario = new Calendario("hola");
    let expectedErrorMessage = "El mes no es válido";
    expect(() => calendario.isValid()).toThrow(expectedErrorMessage);
  });

  test("Mes no es un valor numérico", () => {
    let calendario = new Calendario(3);
    expect(calendario.isValid()).toBe(true);
  });
});
