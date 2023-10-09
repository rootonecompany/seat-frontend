"use client";
import styled from "styled-components";

export default function LoginForm() {
    return (
        <Block>
            <h1>Login Form</h1>
            <Form>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </Form>
        </Block>
    );
}

const Block = styled.div`
    width: 500px;
    margin: 0 auto;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
