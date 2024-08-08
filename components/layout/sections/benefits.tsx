import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Blocks",
    title: "Proyecto",
    description:
        "Desarrollo integral del proyecto, desde la planificación hasta la ejecución, asegurando que cada detalle se adapte a tus necesidades.",
  },
  {
    icon: "LineChart",
    title: "Dirección técnica",
    description:
        "Supervisión y coordinación técnica durante toda la construcción, garantizando el cumplimiento de estándares y normativas.",
  },
  {
    icon: "Wallet",
    title: "Relevamiento de Obra",
    description:
        "Análisis y evaluación detallada del estado actual de la obra para optimizar recursos y mejorar la eficiencia en la construcción.",
  },
  {
    icon: "Sparkle",
    title: "Habilitación Comercial",
    description:
        "Asesoramiento y gestión para obtener la habilitación comercial necesaria, asegurando el cumplimiento de todos los requisitos legales.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Sobre Mí</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            María Lourdes Quiñonez
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Soy Maestro Mayor de Obras con más de 5 años de experiencia en el sector de la construcción. Mi
            especialización abarca una amplia gama de trabajos. Mi experiencia y compromiso me permiten ofrecer
            soluciones eficaces y personalizadas para cada proyecto, garantizando resultados de alta calidad y
            cumplimiento de todas las normativas vigentes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({icon, title, description}, index) => (
              <Card
                  key={title}
                  className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
              >
                <CardHeader>
                  <div className="flex justify-between">
                    <Icon
                        name={icon as keyof typeof icons}
                        size={32}
                        color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
