import { Jugador } from "../../src/models/jugador";

describe("Piedra papel o tijera", () => {
  /*
    ¿que es lo primero que hay que hacer?
    1.- asegurarse que hay un juego
    2.- ir por funciomnalidad más chica
    */
  let uno: Jugador;
  let dos: Jugador;
  it("pruebas piedra pepel o tijera", () => {
    
    // given_PedroYJuanQuierenJugar();
    var jugadores = when_CrearJugadores();
    then_TenemosLosJugadoresPedroYJuan(jugadores);
    
    given_PedroEligePiedra_JuanEligePapel();
    const ganador = when_ComparamosLasOpciones();
    then_JuanGana(ganador);
  });

  function when_CrearJugadores(): Jugador[] {
    uno = new Jugador("pedro");
    dos = new Jugador("juan");
    return [uno, dos];
  }

  
  function then_TenemosLosJugadoresPedroYJuan( ganadores: Jugador[]) {
    expect(ganadores.length).toEqual(2);
  }

//   function given_DosJugador_UnoEligePiedra_DosEligePapel() {
//     uno = new Jugador("uno", 'piedra');
//     dos = new Jugador("dos", 'pepel');
//   }

//   function when_ComparamosLasOpciones(): Jugador {
      

//       return ganador;
//   }

//   function then_JugadorDosGana( ganador: Jugador) {
//       expect(ganador.name).toEqual('dos');
//     }
});

