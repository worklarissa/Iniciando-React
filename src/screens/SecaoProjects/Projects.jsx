export default function Projects({nome,email, descricao}){
    return(
        <>
            <div key={personagem.id} className="card">
                    <img src={personagem.image}/>
                    <h1>{nome}</h1>
                    <div className="infos">
                        <p className="firstInfo"> {email} </p>
                        <p className="secondInfo"> {descricao} </p>
                    </div>
        </div>
        </>

    )
}