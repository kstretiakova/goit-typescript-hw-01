interface User {
    name: string;
    age: number;
    email: string;
    address?: { city: string; country: string };
}

const poly = {
    name: "Mango",
    age: 30,
    email: "john@example.com",
};