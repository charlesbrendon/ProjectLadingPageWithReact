import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="center">
          <div className="menu">
            <div className="logo">
              <h3>Charles.Code</h3>
            </div>
            <div className="item-menu">
              <a href="#">Login</a>
            </div>
          </div>

          <div className="form">
            <h2>Entre em Contato!</h2>
            <form>
              <div className="items-form">
                <input placeholder="Seu nome..." type="text" />
                <input placeholder="Seu nome..." type="text" />
                <input placeholder="Seu nome..." type="text" />
                <input placeholder="Seu nome..." type="text" />
                <input type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="conteudo">
        <div className="center">
          <div className="conteudo-single">
            <h3>Titulo da chamada</h3>
            <p>
              {" "}
              Aqui é o meu conteúdo de exemplo para aprendizado atraves do
              youtube! Estou gostando de consumir ese material
            </p>
          </div>
          <div className="conteudo-single">
            <h3>Titulo da chamada</h3>
            <p>
              {" "}
              Aqui é o meu conteúdo de exemplo para aprendizado atraves do
              youtube! Estou gostando de consumir ese material
            </p>
          </div>
          <div className="conteudo-single">
            <h3>Titulo da chamada</h3>
            <p>
              {" "}
              Aqui é o meu conteúdo de exemplo para aprendizado atraves do
              youtube! Estou gostando de consumir ese material
            </p>
          </div>
          <div className="conteudo-single">
            <h3>Titulo da chamada</h3>
            <p>
              {" "}
              Aqui é o meu conteúdo de exemplo para aprendizado atraves do
              youtube! Estou gostando de consumir ese material
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
