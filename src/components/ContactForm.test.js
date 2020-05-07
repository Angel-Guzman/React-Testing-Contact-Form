import React from "react";
import { render, fireEvent, getByTestId } from "@testing-library/react";
import ContactForm from './ContactForm';

test ('renders form component', () => {
    render(<ContactForm />);
});

// test ('contact form can be filled in and submitted', () => {
//     const { getByLabelText, getByText } = render(<ContactForm />);

//     fireEvent.change(getByLabelText(/first name/i), {target: { value: 'Cat' } });
//     fireEvent.change(getByLabelText(/last name/i), {target: { value: 'Dog' } });
//     fireEvent.change(getByLabelText(/email/i), {target: { value: 'pet@mail.com' } });
//     fireEvent.change(getByLabelText(/message/i), {target: { value: 'I love treats!' } });

//     expect(getByLabelText(/first name/i)).toHaveValue('Cat');
//     expect(getByLabelText(/last name/i)).toHaveValue('Dog');
//     expect(getByLabelText(/email/i)).toHaveValue('pet@mail.com');
//     expect(getByLabelText(/message/i)).toHaveValue('I love treats!');

//     fireEvent.click(getByText(/submit/i));
    
// })

test ('contact form can be filled in and submitted', () => {
    const { getByLabelText, getByText, getByTestId, getByRole } = render(<ContactForm />)

    const fNameInput = getByLabelText(/first name/i)
    const lNameInput = getByLabelText(/last name/i)
    const emailInput = getByLabelText(/email/i)
    const messageInput = getByLabelText(/message/i)
    const submitBtn = getByRole('button', {name: /submit/i})


    fireEvent.change(fNameInput, {target: {value: 'Cat' } })
    fireEvent.change(lNameInput, {target: {value: 'Dog' } })
    fireEvent.change(emailInput, {target: {value: 'pet@mail.com' } })
    fireEvent.change(messageInput, {target: {value: 'I love treats!' } })

    fireEvent.click(submitBtn)
})


// data-testid='button'