import React from "react";
import { render, fireEvent, getByTestId, getByDisplayValue } from "@testing-library/react";
import ContactForm from './ContactForm';

test ('renders form component', () => {
    render(<ContactForm />);
});

test ('contact form can be filled in and submitted', () => {
    const { getByLabelText, getByDisplayValue, getByRole } = render(<ContactForm />)

    fireEvent.change(getByLabelText(/first name/i), {target: {value: 'Cat' } })
    fireEvent.change(getByLabelText(/last name/i), {target: {value: 'Dog' } })
    fireEvent.change(getByLabelText(/email/i), {target: {value: 'pet@mail.com' } })
    fireEvent.change(getByLabelText(/message/i), {target: {value: 'I love treats!' } })

    fireEvent.click(getByRole('button', {name: /submit/i}))

    expect(getByDisplayValue(/cat/i)).toBeInTheDocument();
    expect(getByDisplayValue(/dog/i)).toBeInTheDocument();
    expect(getByDisplayValue(/pet@mail.com/i)).toBeInTheDocument();
    expect(getByDisplayValue(/i love treats!/i)).toBeInTheDocument();
})