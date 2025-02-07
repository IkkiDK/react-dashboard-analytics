import { use, useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(false);
  const [name, setName] = useState("Josnei")
  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim!</p>}
      {!x && <p>Agora x é falso</p>}
      {name === "Henrique" ? (
        <div>
          <p>O nome é Henrique.</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado.</p>
        </div>
      )}
      <button onClick={() => setName("Henrique")}>Clique aqui!</button>
    </div>
  );
};

export default ConditionalRender;
