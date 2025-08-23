import { useState } from "react";
import { motion } from "framer-motion";

function FlipCard({ title, content, idx }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = () => setFlipped((f) => !f);
  const onKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  };

  return (
    <div
      className="group relative h-96 w-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`Tarjeta ${idx + 1}: ${title}. ${
        flipped ? "Mostrar título" : "Mostrar contenido"
      }`}
      onClick={toggle}
      onKeyDown={onKeyDown}
    >
      <div className="[perspective:1000px] h-full w-full">
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-full w-full rounded-2xl shadow-lg [transform-style:preserve-3d]"
        >
          {/* Frente */}
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 border border-gray-300 p-4 [backface-visibility:hidden]">
            <div className="px-4 py-2 rounded-xl bg-blue-600/10 text-blue-700 font-semibold text-base text-center">
              {title}
            </div>
          </div>

          {/* Reverso */}
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white text-gray-900 border border-blue-200 p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="text-left space-y-2 overflow-y-auto">
              {content.split(/\n+/).map((p, i) => (
                <p key={i} className="text-sm leading-relaxed text-gray-700">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  const cards = [
    {
      title: "Stephen King..",
      content: `En su primera firma de Salem’s Lot (segundo libro) tenía solamente un cliente. Era un niño que dijo: ‘Oye amigo, ¿Sabes dónde hay algunos libros nazis?`
    },
    {
      title: "Margaret Atwood…",
      content: `Escritora de "El cuento de la criada" (entre otros), que ha vendido más de 8 millones de copias solo en inglés
Hizo una firma a la que nadie fue, excepto un tipo que quería comprar diurex… y pensó que ella era la que podía ayudarlo`
    },
    {
      title: "Neil Gaiman",
      content: `Escribió la serie de cómics The Sandman (entre otros)
Hizo una firma con un colega en Manhattan y NADIE fue`
    },
    {
      title: "Madonna",
      content: `En el 84 en los primeros MTV Video Music Awards cantó.
Se le resbaló el zapato, y se tiró al suelo para fingir que estaba planeado y que así era el baile
El vestido se le subió sin que ella se diera cuenta, y se le vio más de lo que estaba planeado. Su manager estaba furioso… y le dijo “TU CARRERA SE TERMINÓ CON ESTO”
Ahaaaaa… de hecho ese percance la ayudó
Después dijo en entrevista con Howard Stern:
“Cuando te pasan cosas así… año tras año… ya solo es ruido para ti”
Madonna tuvo que aprender a saber a quien escuchar`
    },
    {
      title: "HOWARD JONES",
      content: `A inicios de los 90s su disquera no quería seguir con el después de 5 álbumes.
Y dijo noooooo, ya no voy a poder seguir haciendo música
Casi que “esto es el final”
Pero no. Formó su disquera y empezó a agendar y vender sus shows y le fue super bien.
Si regresara el tiempo… le diría a su yo del pasado: “No te preocupes por esto, es solo una situación y va a pasar… y de hecho te va a ir mejor!”`
    },
    {
      title: "Cher",
      content: `Al principio no la querían en varios proyectos porque su voz era demasiado grave
Los productores le decían que no era comercial, que no encajaba con lo que se escuchaba en ese momento.
Ella nunca trató de cambiarla.
Y miren nada más dónde terminó… ganadora del Óscar, del Grammy, del Emmy
Vendiendo millones de discos y llenando estadios.
Esa voz grave que antes le cerraba puertas… fue la que terminó abriéndole todas.
A veces lo que nos dicen que es nuestra debilidad, en realidad es lo que nos hace únicos.`
    },
    {
      title: "Ganis Antetokounmpo..",
      content: `Un reportero le pregunto… si veía esta temporada como un fracaso
En resumen, contestó:
A ver, ¿cada año q trabajas tienes te promueven? No..
¿Y entonces el año fue un fracaso? No… 
No es un fracaso… son paso hacia el éxito..  y siempre hay pasos que seguir.. 
Michael jordan. Jugo 15 años.. y ganó 6 campeonatos… ¿y los otros 9 años fueron un fracaso?
Esa no es la pregunta correcta…
No hay fracasos en los deportes.. 
Hay días buenos.. días malos… hay veces q es tu turno…  a  veces no… 
A veces le toca a alguien más ganar…  y el año que entra trataremos de tener mejores hábitos y  jugar mejor… `
    },
    {
      title: "MICHAEL JORDAN",
      content: `“He fallado más de 9000 tiros en mi carrera. 
He perdido casi 300 juegos. 
26 veces me han confiado el tiro ganador del juego y lo he fallado. 
He fracasado una y otra vez en mi vida y ESO ES POR LO QUE TENGO ÉXITO”
Nunca vio sus “fracasos como derrotas” y por eso siguió
Y cada vez que se hechaba un tiro lo hacía sin saber si la pelota iba para adentro de la canasta o no…`
    },
    {
      title: "The beatles",
      content: `George … Paul.. John y Pete Best en ese entonces.. componían y tocaban.. 
Brian Epstein los escuchó y supo que ahí había talento… 
Y poco tiempo después… les consiguió una prueba  con la disquera Decca.
No les fue bien.
Para la disquera tenían un sonido mediocre, y el ejecutivo a cargo creía que las bandas con guitarras iban en camino a la extinción.
Eso no los detuvo ni a ellos ni a Epstein, que después les consiguió una audición con Emi.. y ahí firmaron con la disquera.`
    },
    {
      title: "Walt Dinsey",
      content: `Cuando era joven trabajó como editor del Kansas City Star
Ahí lo corrieron por “falta de creatividad e imaginación y porque no tenía buenas ideas"
El no se compró esa idea… y creó un imperio con la creatividad… q definitivamente no le faltaba…  
Este despido marcó el inicio de su camino hacia la creación de un imperio en la animación. 
Más de 50 años después de su muerte seguimos rodeados de sus creaciones`
    },
    {
      title: "Jk rowling",
      content: `La autora Harry potter ha vendido más de 500 millones de copias
Ella trabajaba en Amnistía Internacional
La corrieron por que se ponía a escribir historias infantiles en horario laboral y la cacharon varias veces… 
Estuvo un rato viviendo de su liquidación y beneficios estatales y ahí enmpezó con harry Potter
12 editoriales le dijeron q no… 
Y 1 Bloomsbury le dijo que si 
De todas maneras el presidente le recomendó que buscara trabajo, porque no se gana bien con libros para niños
Mmmmmm
En 5 años era multimullonaria`
    },
    {
      title: "Bon Jovi",
      content: `Con Runaway trataron de conseguir contrato con una disquera… 
Las personas dedicadas a encontrar talento le decían que no y que no 
Fueron  muchas veces
Pivotearon
Jon Bon Jovi pensó  “hay un dj… que se pasa la vida sentado en un cuartito hablando por el micrófono y poniendo música entre 4 y 6 horas al día. Este cuate debe de amar la música”
Le llevó su canción, le gustó y la empezó a poner
A la gente le empezó a  gustar y las disqueras se empezaron a interesar en ellos
No siempre los expertos… tienen toda la verdad… ni tu solo un camino para hacer lo que quieres…`
    },
    {
      title: "Robert smith",
      content: `Alguna vez su disquera lo rechazó.
No querían publicar el álbum Desintegration
En esa época el estaba pasando depresión fuerte
Al final si lo publicaron… vendieron más de 2.7 millones de copias en un año… y este álbum los llevó a otro nivel`
    },
    {
      title: "Bruno Mars",
      content: `Después de 1 año de firmar con Motown.. le dijeron Adios… lo despidieron
Y eso no fue el fin de su carrera.
Tampoco es el fin de la tuya`
    },
    {
      title: "Elvis Presley",
      content: `Elvis Presley en la escuela lo bulleaban  y cuando tocaba la guitarra se burlaban de el, de como era.. de como se veía... 
En la materia de música le iba muy mal y su miss le decía que no tenía aptitudes para el cantó
Un día consigió una presentación en una estación de radio y le fue fatal
Salio de la secundaria y trabajaba manejando camiones
Una vez en un show, el encargado le dijo que mejor siguiera manejando camiones y así hubo varias
Que fueron parte del camino que recorrió para convertirse en el rey del Rock & Rol `
    },
    {
      title: "George Lucas y Star Wars",
      content: `Muchos estudios rechazaron el proyecto, hasta que 20th Century fox decidió darle oportunidad
George Lucas negoció su sueldo como director a cambio del 40% de las ganancias en taquilla.
Un movimiento listo, basado en la fe que tenía en el y en su creación, a pesar del rechazo y falta de fe de los otros estidios`
    },
    {
      title: "Melanie Perkins",
      content: `Fue a Silicon Valley...para lanzar su proyecto...
MÁS DE 100 INVERSIONISTAS con los que se reunió rechazaron su propuesta
3 años después de la creación de su empresa, consiguió la primera ampliación de capital....
Actualmente  vale millones de dolares… 
la CEO y cofundadora de la empresa se convirtió en la segunda mujer más rica de toda Australia
la empresa se llama  CANVA
más de 100 personas le dijeron no… y ella dijo… si… `
    },
    {
      title: "Meryl Streep",
      content: `La rechazaron para un papel en King Kong... por ser demasiado fea... 
Es la actriz con más nominaciones en la historia de los Premios Oscar, 21 nominaciones	
Ha ganado 3 veces, es la segunda actriz con más premios Oscar
Y en alguna entrevista ella dijo: 
Aquella malintencionada opinión podía haber roto mis sueños de convertirme en actriz o forzarme a recomponerme y a creer en mí misma. Tomé aire y dije: 'Siento que pienses que soy demasiado fea para tu película… pero la tuya es sólo una opinión entre miles'.`
    },
    {
      title: "Bono U2",
      content: `El día que bono cumplía 19 años recibió una carta de la disquera RSO RECORDS que decía:
"Querido Sr. P. Hewson. Gracias por enviar su cinta de U2 a RSO, la escuchamos con cuidadosa consideración, pero sentimos que no es adecuada para nosotros en este momento. Deseamos que tengan suerte en su futura carrera"
La disquera que mandó la carta cerró el año en que esta banda publicó su tercer álbum.
Nada está escrito, más bien nosotros lo escribimos`
    },
    {
      title: "?",
      content: `Había un hombre que fracasó en los negocios a los 21 años 
Fue derrotado en una carrera legislativa a los 22 años 
A los 24 años volvió a fracasar en los negocios 
Tuvo un colapso nervioso a los 27 
Perdió cuando competía por el Congreso a los 34 
Perdió cuando iba para senador a los 45 años 
Trató de ser vicepresidente a los 47 pero claro que no lo logró 
A los 52 años ¿Qué creen? quedó como presidente de los Estados Unidos 
Éste hombre se llamaba Abraham Lincoln`
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Historias de perseverancia</h1>
          <p className="text-gray-600 mt-2">Da clic en una tarjeta para leer el contenido.</p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <FlipCard key={i} title={c.title} content={c.content} idx={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
