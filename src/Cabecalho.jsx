import './Cabecalho.css'

export function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-logo">
        <i className="fa-solid fa-bus-simple" aria-hidden="true"></i>
      </div>


      <div className="cabecalho-titulo-localizacao">
        <h1 className="cabecalho-titulo">Canoas Bus</h1>
        
        <div className="cabecalho-localizacao">
          <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
          <p>Canoas, RS</p>
        </div>
      </div>

    </header>
  );
}