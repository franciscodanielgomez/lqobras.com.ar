import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {ArrowRight, Check} from "lucide-react";
import Link from "next/link";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "Proyecto y Dirección Técnica",
    popular: 0,
    price: 5000,
    description:
        "Servicio completo de gestión de proyectos y dirección técnica para asegurar que tu construcción se ejecute con precisión y cumpla con todos los estándares.",
    buttonText: "Contactar",
    benefitList: [
      "Planificación y diseño detallado",
      "Supervisión técnica durante la construcción",
      "Coordinación de subcontratistas",
      "Revisión y aprobación de materiales",
      "Informes periódicos de avance",
    ],
  },
  {
    title: "Relevamiento de Obra",
    popular: 1,
    price: 5000,
    description:
        "Evaluación exhaustiva del estado actual de la obra para identificar áreas de mejora y optimizar los recursos disponibles.",
    buttonText: "Contactar",
    benefitList: [
      "Inspección completa del sitio",
      "Análisis de estructura y materiales",
      "Identificación de problemas y riesgos",
      "Informe detallado de recomendaciones",
      "Asesoramiento para optimización",
    ],
  },
  {
    title: "Habilitación Comercial",
    popular: 0,
    price: 5000,
    description:
        "Asesoramiento y gestión para obtener la habilitación comercial necesaria para operar legalmente, cumpliendo con todos los requisitos reglamentarios.",
    buttonText: "Contactar",
    benefitList: [
      "Revisión de documentación legal",
      "Gestión de permisos y licencias",
      "Cumplimiento de normativas locales",
      "Asistencia en trámites administrativos",
      "Asesoramiento en regulaciones comerciales",
    ],
  },
];

export const PricingSection = () => {
  return (
      <section className="container py-24 sm:py-32">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Asesorías
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Asesoría profesional
        </h2>

        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
          Con un enfoque detallado y personalizado, garantizo que cada aspecto de tu proyecto reciba la
          atención y experiencia necesarias para alcanzar el éxito.
        </h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
          {plans.map(
              ({title, popular, price, description, buttonText, benefitList}) => (
                  <Card
                      key={title}
                      className={
                        popular === PopularPlan?.YES
                            ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                            : ""
                      }
                  >
                    <CardHeader>
                      <CardTitle className="pb-2">{title}</CardTitle>

                      <CardDescription className="pb-4">
                        {description}
                      </CardDescription>

                    </CardHeader>

                    <CardContent className="flex">
                      <div className="space-y-4">
                        {benefitList.map((benefit) => (
                            <span key={benefit} className="flex">
                      <Check className="text-primary mr-2"/>
                      <h3>{benefit}</h3>
                    </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter>
                      <Button className="w-full">
                        <Link
                            href="https://wa.me/5493704364290"
                            target="_blank"
                        >
                          Contacto
                        </Link>
                        <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1"/>
                      </Button>
                    </CardFooter>
                  </Card>
              )
          )}
        </div>
      </section>
  );
};
