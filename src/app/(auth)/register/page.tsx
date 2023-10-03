"use client";

import { Form } from "@/interface";
import { useState } from "react";
import styled from "styled-components";

interface User {
    username: string;
    email: string;
    password: string;
    checkbox: boolean;
}

export default function Register() {
    const [user, setUser] = useState<User>({
        username: "",
        email: "",
        password: "",
        checkbox: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setUser({
            ...user,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = () => {};

    return (
        <Block>
            <FormBlock>
                <span>username</span>
                <input type="text" name="username" onChange={handleChange} />
            </FormBlock>
            <FormBlock>
                <span>email</span>
                <input type="text" name="email" onChange={handleChange} />
            </FormBlock>
            <FormBlock>
                <span>password</span>
                <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                />
            </FormBlock>
            <FormBlock>
                <span>동의하기</span>
                <input
                    type="checkbox"
                    name="checkbox"
                    onChange={handleChange}
                />
            </FormBlock>

            <button onClick={handleSubmit}>확인</button>
        </Block>
    );
}

const Block = styled.div`
    button {
        width: 500px;
        height: 50px;
        margin: auto auto;
        font-size: 1.2rem;
        border: 1px solid #ddd;
    }
`;
const FormBlock = styled.div`
    width: 500px;
    margin: auto auto;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    span {
        font-size: 1rem;
        font-weight: 500;
    }
    input {
        width: 100%;
        height: 50px;
        border-radius: 5px;
        border: 1px solid #ddd;
        padding: 0 1rem;
        font-size: 1rem;
    }
`;
