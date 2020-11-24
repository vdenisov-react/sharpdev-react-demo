import React from 'react';

type Props = {
    message: string;
};

export function Test({ message }: Props) {
    return <h1>{message}</h1>;
}
