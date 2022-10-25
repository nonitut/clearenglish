import React from 'react';

function App() {
    return <h1>Hello World</h1>;
}


function ToDoList({ items }) {
    if (!items.length) {
        return <p>У вас нет TODO.</p>;
    }

    return (
        <div>
            {items.map(item => (
                <ToDoItem item={item}/>
            ))}
        </div>
    );
}

function ErrorMessage({ error }) {
    if (!error) {
        return null;
    }

    return <div className="error">{error.message}</div>;
}



const todos = [
    {text: "купить молоко", id: 0},
    {text: "выучить React", id: 1},
    {text: "погулять с собакой", id: 2 }
];

const ToDoItem = ({ text }) => <li>{text}</li>;

const ToDoList = () => (
    <ul>
        {todos.map(todo => (
            <ToDoItem key={todo.id} text={todo.text}/>
            ))}
    </ul>
);