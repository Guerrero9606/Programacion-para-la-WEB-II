import { render, screen, fireEvent } from "@testing-library/react";
import FormularioSaludo from "./FormularioSaludo";
import '@testing-library/jest-dom';
import { describe } from "vitest";

describe('Pruebas en <FormularioSaludo />', ()=>{
    test('Debe generar un saludo personalizado', ()=>{
        render(<FormularioSaludo/>);
        const input = screen.getByPlaceholderText('Ej: Ana');
        const boton = screen.getByRole('button', { name: 'Saludar' });

        fireEvent.change(input, {target: {value: 'Carlos'}});
        fireEvent.click(boton);

        const resultado = screen.getByText('¡Hola, Carlos! Bienvenido a React');
        expect(resultado).toBeInTheDocument();
    });
});