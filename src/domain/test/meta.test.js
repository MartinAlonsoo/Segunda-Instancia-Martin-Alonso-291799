import { expect, test, describe } from "@jest/globals";
import { Metas } from "../Metas.js";

describe("Metas class tests", () => {
  test("Crear una meta", () => {
    let meta = new Metas("saber sumar", "Primero");
    let descripcionMeta = meta.getDesc();
    let expectedDesc = "saber sumar";
    expect(descripcionMeta).toBe(expectedDesc);
  });

  test("Crear una meta 2", () => {
    let meta = new Metas("saber sumar", "Primero");
    let grupoMeta = meta.getGrupo();
    let expectedGrupo = "Primero";
    expect(grupoMeta).toBe(expectedGrupo);
  });

  test("Al crear la meta aparece como no se cumplió", () => {
    let meta = new Metas("saber sumar", "Primero");
    expect(meta.getCumplio()).toBe(false);
  });

  test("Marcar la meta como cumplida", () => {
    let meta = new Metas("saber sumar", "Primero");
    meta.cumplioMeta();
    expect(meta.getCumplio()).toBe(true);
  });

  test("Descripcion nula de meta", () => {
    let meta = new Metas(null, "Primero");
    let expectedErrorMessage = "La descripción de la meta no puede ser vacío";
    expect(() => meta.isValid()).toThrow(expectedErrorMessage);
  });

  test("Descripcion undefined de meta", () => {
    let meta = new Metas(undefined, "Primero");
    let expectedErrorMessage = "La descripción de la meta no puede ser vacío";
    expect(() => meta.isValid()).toThrow(expectedErrorMessage);
  });

  test("Descripcion vacía de meta", () => {
    let meta = new Metas("", "PrimeroD");
    let expectedErrorMessage = "La descripción de la meta no puede ser vacío";
    expect(() => meta.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grupo de meta nulo", () => {
    let meta = new Metas("saber sumar", null);
    let expectedErrorMessage = "La meta debe estar asignada a un grupo";
    expect(() => meta.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grupo de meta undefined", () => {
    let meta = new Metas("saber sumar", undefined);
    let expectedErrorMessage = "La meta debe estar asignada a un grupo";
    expect(() => meta.isValid()).toThrow(expectedErrorMessage);
  });

  test("Grupo de meta vacío", () => {
    let meta = new Metas("saber sumar", "");
    let expectedErrorMessage = "La meta debe estar asignada a un grupo";
    expect(() => meta.isValid()).toThrow(expectedErrorMessage);
  });

  test("Meta válida", () => {
    let meta = new Metas("saber sumar", "Primero");
    expect(meta.isValid()).toBe(true);
  });
});
