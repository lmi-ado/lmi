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
      className="group relative h-64 w-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
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
            <div className="text-center">
              <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-blue-600/10 grid place-items-center text-blue-700 font-bold">
                {idx + 1}
              </div>
              <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
              <p className="text-xs text-gray-500 mt-1">
                Click / Enter para voltear
              </p>
            </div>
          </div>

          {/* Reverso */}
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white text-gray-900 border border-blue-200 p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-y-auto">
            <div className="text-left space-y-2">
              {content.split("\n\n").map((p, i) => (
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
      title: "Stephen King",
      content: "En su primera firma de Salem’s Lot (segundo libro) tenía solamente un cliente. Era un niño que dijo: ‘Oye amigo, ¿Sabes dónde hay algunos libros nazis?",
    },
    {
      title: "Margaret Atwood",
      content:
        "Escritora de \"El cuento de la criada\" (entre otros), que ha vendido más de 8 millones de copias solo en inglés\n\nHizo una firma a la que nadie fue, excepto un tipo que quería comprar diurex… y pensó que ella era la que podía ayudarlo",
    },
    {
      title: "Neil Gaiman",
      content:
        "Escribió la serie de cómics The Sandman (entre otros)\n\nHizo una firma con un colega en Manhattan y NADIE fue",
    },
    {
      title: "Madonna",
      content:
        "En el 84 cantó Like a Virgin fue en los primeros MTV Video Music Awards…\n\nSe le resbaló el zapato, y se tiró al suelo para fingir que estaba planeado y así era el baile.\n\nEl vestido se le subió sin que se diera cuenta, y se le vio más de lo que estaba planeado. Su manager estaba furioso y le dijo: “TU CARRERA SE TERMINÓ CON ESTO”.\n\nAhaaaaa… de hecho ese percance la ayudó. Después dijo en entrevista con Howard Stern: “Cuando te pasan cosas así… año tras año… ya solo es ruido para ti”.\n\nMadonna tuvo que aprender a saber a quién escuchar.",
    },
    {
      title: "Howard Jones",
      content:
        "A inicios de los 90s su disquera no quería seguir con él después de 5 álbumes.\n\nDijo: noooooo… ya no voy a poder seguir haciendo música.\n\nPero no. Formó su disquera, empezó a vender sus shows y le fue super bien.\n\nSi regresara el tiempo, le diría a su yo del pasado: “No te preocupes por esto. Esto es solo una situación y va a pasar… y de hecho te va a ir mejor!”",
    },
    {
      title: "Cher",
      content:
        "Al principio no la querían en varios proyectos porque su voz era demasiado grave.\n\nLos productores le decían que no era comercial.\n\nElla nunca trató de cambiarla. Y miren dónde terminó: ganadora del Óscar, del Grammy, del Emmy.\n\nEsa voz grave que antes le cerraba puertas fue la que terminó abriéndole todas.",
    },
    {
      title: "Giannis Antetokounmpo",
      content:
        "Un reportero le preguntó si veía esta temporada como un fracaso.\n\nContestó: A ver, ¿cada año que trabajas te promueven? No. ¿Entonces el año fue un fracaso? No… Son pasos hacia el éxito.\n\nMichael Jordan jugó 15 años y ganó 6 campeonatos. ¿Los otros 9 fueron un fracaso? No.\n\nNo hay fracasos, hay días buenos, días malos. El año que entra trataremos de tener mejores hábitos.",
    },
    {
      title: "Michael Jordan",
      content:
        "“He fallado más de 9000 tiros en mi carrera. He perdido casi 300 juegos. 26 veces me han confiado el tiro ganador y lo he fallado. He fracasado una y otra vez en mi vida y ESO ES POR LO QUE TENGO ÉXITO”.\n\nNunca vio sus fracasos como derrotas, sino como pasos más.\n\nCada tiro era un riesgo. Si lo ves como derrota, se acabó. Si lo ves como un paso, solo es cuestión de tiempo.",
    },
    {
      title: "The Beatles",
      content:
        "George, Paul, John y Pete Best tocaban juntos.\n\nBrian Epstein los escuchó y les consiguió una prueba con la disquera Decca.\n\nNo les fue bien. El ejecutivo pensaba que las guitarras iban a desaparecer.\n\nEso no los detuvo. Poco después firmaron con EMI.",
    },
    {
      title: "Walt Disney",
      content:
        "Cuando era joven trabajó como editor del Kansas City Star.\n\nLo corrieron por “falta de creatividad e imaginación”.\n\nNo se compró esa idea. Creó un imperio con su creatividad. Hoy, más de 50 años después de su muerte, seguimos rodeados de sus creaciones.",
    },
    {
      title: "J.K. Rowling",
      content:
        "Trabajaba en Amnistía Internacional. La corrieron porque escribía historias en horario laboral.\n\n12 editoriales le dijeron que no. Una le dijo que sí (Bloomsbury). El presidente incluso le recomendó buscar trabajo.\n\nEn 5 años era multimillonaria con Harry Potter.",
    },
    {
      title: "Bon Jovi",
      content:
        "Con Runaway trataron de conseguir contrato y siempre les decían que no.\n\nPivotearon: Jon Bon Jovi llevó la canción a un DJ. A la gente le gustó y las disqueras empezaron a interesarse.\n\nNo siempre los expertos tienen la verdad.",
    },
    {
      title: "Robert Smith (The Cure)",
      content:
        "Su disquera no quería publicar Disintegration.\n\nÉl estaba en depresión. Al final sí lo publicaron: vendió más de 2.7 millones de copias en un año y los llevó a otro nivel.",
    },
    {
      title: "Bruno Mars",
      content:
        "Después de 1 año de firmar con Motown lo despidieron.\n\nEso no fue el fin de su carrera.",
    },
    {
      title: "Elvis Presley",
      content:
        "En la escuela lo bulleaban y le decían que no servía para cantar.\n\nLe fue mal en su primera presentación en radio. Trabajó como chofer de camiones.\n\nLe dijeron que mejor siguiera manejando. Todas esas caídas fueron parte del camino que lo convirtió en el Rey del Rock & Roll.",
    },
    {
      title: "George Lucas y Star Wars",
      content:
        "Muchos estudios rechazaron el proyecto. 20th Century Fox lo aceptó.\n\nLucas negoció quedarse con el 40% de las ganancias. Creyó en sí mismo, aunque otros no.",
    },
    {
      title: "Melanie Perkins (Canva)",
      content:
        "Fue a Silicon Valley. Más de 100 inversionistas rechazaron su idea.\n\n3 años después consiguió inversión. Hoy Canva vale miles de millones y ella es de las mujeres más ricas de Australia.",
    },
    {
      title: "Meryl Streep",
      content:
        "La rechazaron para King Kong por ser 'demasiado fea'.\n\nHoy es la actriz con más nominaciones al Oscar (21) y 3 premios ganados.\n\nElla misma dijo: esa opinión podía romper mis sueños, pero decidí creer en mí.",
    },
    {
      title: "Bono (U2)",
      content:
        "Cuando tenía 19 años recibió una carta de RSO Records rechazando a U2.\n\nLa disquera cerró el mismo año en que la banda lanzó su tercer álbum.\n\nNada está escrito: nosotros lo escribimos.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Historias de perseverancia
          </h1>
          <p className="text-gray-600 mt-2">
            Haz clic en una tarjeta para descubrir cómo el rechazo y los
            tropiezos fueron parte del éxito.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <FlipCard
              key={i}
              title={c.title}
              content={c.content}
              idx={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
