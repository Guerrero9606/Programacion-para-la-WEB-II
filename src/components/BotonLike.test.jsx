import { render, screen, fireEvent } from "@testing-library/react";
import BotonLike from "./BotonLike";
import "@testing-library/jest-dom/vitest";
import { describe, expect, test } from "vitest";

describe('Pruebas en el componente <BotonLike />', ()=>{
    test('Debe mostrar el texto al dar Like', ()=>{
        render(<BotonLike/>);

        const boton = screen.getByRole('button');

        expect(boton.textContent).toBe(' Dar Like ');
    });

    test('Debe mostrar el mensaje de agradecimiento', ()=>{
        render(<BotonLike/>);
        const boton = screen.getByRole('button');
        fireEvent.click(boton);
        const mensaje = screen.getByText('¡Gracias por tu click!');
        expect(mensaje).toBeInTheDocument();
        expect(boton.textContent).toBe(' Quitar Like ');
    });
});
