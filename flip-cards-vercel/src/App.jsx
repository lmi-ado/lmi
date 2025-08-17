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
          <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 text-gray-900 border border-gray-300 p-4 [backface-visibility:hidden]">
            <div className="mx-auto mb-3 px-4 py-2 rounded-xl bg-blue-600/10 text-blue-700 font-semibold text-base">
              {title}
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Click / Enter para voltear
            </p>
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
        "En el 84 cantó Like a Virgin fue en los primeros MTV Video Music Awards…\n\nSe le resbaló el zapato, y se tiró al suelo para fingir que estaba plane
