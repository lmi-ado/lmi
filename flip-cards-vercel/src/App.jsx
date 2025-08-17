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
      className="group relative h-48 w-full cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
      role="button"
      tabIndex={0}
      aria-pressed={flipped}
      aria-label={`Tarjeta ${idx + 1}: ${title}. ${flipped ? "Mostrar título" : "Mostrar contenido"}`}
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
              <p className="text-xs text-gray-500 mt-1">Click / Enter para voltear</p>
            </div>
          </div>

          {/* Reverso */}
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white text-gray-900 border border-blue-200 p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="text-center">
              <h4 className="text-sm font-medium text-blue-700 mb-2">Detalle</h4>
              <p className="text-sm leading-relaxed text-gray-700">{content}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function App() {
  const cards = [
    { title: "Objetivo del proyecto", content: "Crear una app simple con tarjetas que se voltean al hacer clic para mostrar información adicional." },
    { title: "Tecnologías", content: "React + Tailwind + Framer Motion. Accesible con teclado y ARIA, responsive y con animaciones suaves." },
    { title: "Cómo usar", content: "Haz clic, toca o presiona Enter/Espacio sobre una tarjeta para voltearla. Vuelve a hacerlo para regresar." },
    { title: "Personaliza", content: "Edita el arreglo 'cards' para cambiar títulos y textos. Ajusta estilos con clases Tailwind." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-10 px-4">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Tarjetas Flip (gris y azul)
          </h1>
          <p className="text-gray-600 mt-2">
            Interfaz limpia, animaciones fluidas y compatible con teclado para accesibilidad.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <FlipCard key={i} title={c.title} content={c.content} idx={i} />
          ))}
        </div>

        <footer className="mt-10 text-sm text-gray-500">
          <p>
            Tip: Puedes convertir esto en un componente reutilizable pasando <code>title</code> y <code>content</code> como props,
            o generar las tarjetas desde una API.
          </p>
        </footer>
      </div>
    </div>
  );
}
