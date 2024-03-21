import { useState } from "react";
import Button from "../../components/Button/Button";
import "./style.css";
import Projects from "../SecaoProjects/Projects";

export default function Home({ title, color }) {
    const [personagens, setPersonagens] = useState([]);

    async function handlePersonagens() {
        await fetch("https://bobsburgers-api.herokuapp.com/characters/?limit=9&skip=265")
            .then(res => res.json())
            .then(setPersonagens)
    }

    function showPersonagens() {
        console.log(personagens)
    }

    function deleteAll() {
        setPersonagens([]);
    }

    return (
        <>
            <button onClick={handlePersonagens}>mostrar</button>
            <Button personagens={personagens} color="yellow" handleClick={handlePersonagens} />
            <Button title="Mostrar" color="green" handleClick={showPersonagens} />
            <Button title="Deletar" color="red" handleClick={deleteAll} />
            
            {/* presentinho para voces pesquisarem e tentarem entender kk */}
            {personagens.map(personagem => (
               <Projects nome="Projeto Galeria" email="sala4@gmail.com" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor purus quam, sed convallis arcu gravida eget. Etiam tempus est sit amet sollicitudin dignissim."/> 
               <Projects nome="Projeto Tutorial" email="sala4@gmail.com" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor purus quam, sed convallis arcu gravida eget. Etiam tempus est sit amet sollicitudin dignissim."/>
               <Projects nome="Projeto Tutorial" email="sala4@gmail.com" descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor purus quam, sed convallis arcu gravida eget. Etiam tempus est sit amet sollicitudin dignissim."/>
               /*<div key={personagem.id} className="card">
                /<img src={personagem.image}/>
                    <h1>{personagem.name}</h1>
                    <div className="infos">
                        <p className="firstInfo"> {personagem.gender} </p>
                        <p className="secondInfo"> {personagem.hair} </p>
                    </div>
                </div>*/
            ))}
        </>
    )
}