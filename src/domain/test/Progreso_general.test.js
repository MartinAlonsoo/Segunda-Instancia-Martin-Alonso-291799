import { expect, test, describe } from "@jest/globals";
import { progresoGeneral } from "../Progreso_general";

describe("Progreso_general class tests", () => {
  test("Crear un progreso y devolver el grupo", () => {
    let progreso = new progresoGeneral(
      "Primero",
      "Vienen cumpliendo todas las metas",
    );
    let expectedGrupo = "Primero";
    expect(progreso.getGrupo()).toBe(expectedGrupo);
  });

  test("Crear un progreso y devolver el grupo", () => {
    let progreso = new progresoGeneral(
      "Primero",
      "Vienen cumpliendo todas las metas",
    );
    let expectedDesc = "Vienen cumpliendo todas las metas";
    expect(progreso.getDesc()).toBe(expectedDesc);
  });

  test("Actualizar la descripción", () => {
    let progreso = new progresoGeneral(
      "Primero",
      "Vienen cumpliendo todas las metas",
    );
    progreso.setDesc("Vienen atrasados con las metas");
    let expectedDesc = "Vienen atrasados con las metas";
    expect(progreso.getDesc()).toBe(expectedDesc);
  });

  test("Progreso toString", () => {
    let progreso = new progresoGeneral(
      "Primero",
      "Viene cumpliendo todas las metas",
    );
    let expectedString =
      "Grupo: Primero - Descripción: Viene cumpliendo todas las metas";
    expect(progreso.toString()).toBe(expectedString);
  });

  test("Grupo de progreso vacío", () => {
    let progreso = new progresoGeneral("", "Viene cumpliendo todas las metas");
    let expectedErrorMessage = "El progreso debe estar asignado a un grupo";
    expect(() => progreso.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grupo de progreso null", () => {
    let progreso = new progresoGeneral(
      null,
      "Viene cumpliendo todas las metas",
    );
    let expectedErrorMessage = "El progreso debe estar asignado a un grupo";
    expect(() => progreso.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grupo de progreso undefined", () => {
    let progreso = new progresoGeneral(
      undefined,
      "Viene cumpliendo todas las metas",
    );
    let expectedErrorMessage = "El progreso debe estar asignado a un grupo";
    expect(() => progreso.isValid()).toThrow(expectedErrorMessage);
  });

  test("Descripción de progreso vacía", () => {
    let progreso = new progresoGeneral("Primero", "");
    let expectedErrorMessage = "La descripción no puede ser vacía";
    expect(() => progreso.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grupo de progreso null", () => {
    let progreso = new progresoGeneral("Primero", null);
    let expectedErrorMessage = "La descripción no puede ser vacía";
    expect(() => progreso.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grupo de progreso undefined", () => {
    let progreso = new progresoGeneral("Primero", undefined);
    let expectedErrorMessage = "La descripción no puede ser vacía";
    expect(() => progreso.isValid()).toThrow(expectedErrorMessage);
  });

  test("Progreso válido", () => {
    let progreso = new progresoGeneral(
      "Primero",
      "Viene cumpliendo todas las metas",
    );
    expect(progreso.isValid()).toBe(true);
  });
});
