const TemplateExpression = () => {

    const name = "Henrique"
    const info = {
        idade: 25,
        profissão: "programador",

    }
    
    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {info.profissão}.</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}

export default TemplateExpression;