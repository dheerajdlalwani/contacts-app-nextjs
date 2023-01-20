import { useState } from 'react';

function Header({title}) {
    return <h1>{title}</h1>;
}

export default function HomePage() {
    const awesomePeople = ['Dheeraj Lalwani', 'Tushar Nankani', 'Harsh Kapadia', 'Mihika Gaonkar', 'Pranav Dani', 'Vivek Namaye', 'Harsh Shah']

    const [hiFis, setHiFis] = useState(0);

    function handleClick() {
        console.log("Hi-Fi back at ya!")
        setHiFis(hiFis+1)
    }

    return (
        <div>
            <Header title="Awesome People" />
            <ul>
                {awesomePeople.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <button onClick={handleClick} >Hi-Fi count: {hiFis}</button>
        </div>
    );
}
