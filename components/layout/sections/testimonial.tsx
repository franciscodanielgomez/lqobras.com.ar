"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList = [
  {
    image: "https://github.com/shadcn.png",
    name: "Carlos Méndez",
    userName: "Propietario de Vivienda",
    comment:
        "Lourdes y su equipo hicieron un trabajo excepcional. Nuestra nueva vivienda es hermosa y funcional. ¡Recomendados al 100%!",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Ana Rodríguez",
    userName: "Gerente de Tienda",
    comment:
        "Lourdes nos ayudó a construir un local comercial que ha atraído a muchos clientes. El diseño y la calidad son inigualables.",
    rating: 4.8,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Javier Pérez",
    userName: "Dueño de Departamento",
    comment:
        "Estoy muy contento con el departamento que Lourdes y su equipo construyeron para nosotros. Cada detalle fue pensado cuidadosamente.",
    rating: 4.9,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "María López",
    userName: "Residente de Dúplex",
    comment:
        "Lourdes y el equipo hicieron un trabajo increíble con nuestro dúplex. Es espacioso y moderno, exactamente lo que queríamos.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Juan García",
    userName: "Propietario de Piscina",
    comment:
        "La piscina que Lourdes y su equipo construyeron es fantástica. Los materiales y la construcción son de primera calidad.",
    rating: 5.0,
  },
  {
    image: "https://github.com/shadcn.png",
    name: "Sofía Martínez",
    userName: "Cliente de Reforma",
    comment:
        "Lourdes realizó la reforma de nuestra casa junto con su equipo y no podríamos estar más satisfechos. El resultado superó nuestras expectativas.",
    rating: 4.9,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Testimonios
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Mira lo que mis clientes opinaron
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  {`"${review.comment}"`}
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://avatars.githubusercontent.com/u/75042455?v=4"
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
