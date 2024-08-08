import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Viviendas",
    description:
      "Realización de proyectos de construcción de viviendas unifamiliares, abarcando desde la planificación hasta la entrega final, garantizando calidad y cumplimiento de normativas.",
  },
  {
    icon: "BadgeCheck",
    title: "Departamentos",
    description:
      "Desarrollo de edificios de departamentos, incluyendo diseño arquitectónico, construcción, y acabados de alta calidad, con especial atención a la eficiencia espacial y funcionalidad.",
  },
  {
    icon: "Goal",
    title: "Duplex",
    description:
      "Construcción de dúplex modernos y funcionales, proporcionando espacios de convivencia amplios y bien distribuidos, ideales para familias que buscan comodidad y estilo.",
  },
  {
    icon: "PictureInPicture",
    title: "Piscinas",
    description:
      "Diseño y construcción de piscinas personalizadas, adaptadas a las necesidades y preferencias del cliente, utilizando materiales de primera calidad y tecnología avanzada para asegurar durabilidad y estética.",
  },
  {
    icon: "MousePointerClick",
    title: "Locales comerciales",
    description:
      "Creación de espacios comerciales atractivos y funcionales, desde tiendas hasta oficinas, optimizando el diseño para maximizar la visibilidad y accesibilidad, y cumplir con las exigencias del mercado.",
  },
  {
    icon: "Newspaper",
    title: "Reformas y ampliaciones",
    description:
      "Ejecución de reformas y ampliaciones en estructuras existentes, mejorando la funcionalidad y estética del espacio, y adaptándolo a nuevas necesidades o tendencias, siempre con un enfoque en la calidad y el detalle.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Servicios
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
       Conoce mis principales servicios
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Ofrezco asesoramiento técnico y gestión integral de proyectos de construcción. Aseguro calidad, precisión y cumplimiento normativo en cada etapa del proceso, garantizando resultados exitosos y eficientes.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
