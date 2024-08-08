import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "¿Qué incluye el servicio de Proyecto y Dirección Técnica?",
    answer: "El servicio incluye planificación detallada, supervisión técnica durante la construcción, coordinación de subcontratistas, revisión y aprobación de materiales, e informes periódicos de avance.",
    value: "item-1",
  },
  {
    question: "¿Qué es un Relevamiento de Obra y por qué es importante?",
    answer: "Un Relevamiento de Obra es una evaluación exhaustiva del estado actual del sitio de construcción. Es importante porque identifica problemas y riesgos, permite optimizar recursos y proporciona recomendaciones para mejorar la eficiencia y seguridad del proyecto.",
    value: "item-2",
  },
  {
    question: "¿Cómo puedo obtener la Habilitación Comercial para mi proyecto?",
    answer: "La habilitación comercial se obtiene mediante una revisión de documentación legal, gestión de permisos y licencias, cumplimiento de normativas locales, asistencia en trámites administrativos y asesoramiento en regulaciones comerciales.",
    value: "item-3",
  },
  {
    question: "¿Cuánto tiempo suele tomar la dirección técnica de un proyecto?",
    answer: "La duración de la dirección técnica depende del tamaño y complejidad del proyecto. En general, se realiza una supervisión continua durante todo el proceso de construcción hasta su finalización.",
    value: "item-4",
  },
  {
    question: "¿Qué tipo de soporte está incluido en el servicio de Relevamiento de Obra?",
    answer: "El servicio incluye un informe detallado de recomendaciones, asesoramiento para optimización, y una evaluación completa del sitio para identificar problemas y riesgos potenciales.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
         Preguntas frecuentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
