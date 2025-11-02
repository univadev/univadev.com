"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Apple, Star } from "lucide-react";

const testimonials = [
  {
    quote: `Really fitting text that resonates with a global audience and
              highlights our values Really fitting text that resonates with a global audience and
              highlights our values Really fitting text that resonates with a global audience and
              highlights our values`,
    source: "University of Waterloo CS '24",
  },
  {
    quote: `Really fitting text that resonates with a global audience and
              highlights our values Really fitting text that resonates with a global audience and
              highlights our values Really fitting text that resonates with a global audience and
              highlights our values`,
    source: "Imperial College London BSc '26",
  },
  {
    quote: `Really fitting text that resonates with a global audience and
              highlights our values Really fitting text that resonates with a global audience and
              highlights our values Really fitting text that resonates with a global audience and
              highlights our values`,
    source: "Stanford CS '28",
  },
  {
    quote: `Really fitting text that resonates with a global audience and
              highlights our values Really fitting text that resonates with a global audience and
              highlights our values Really fitting text that resonates with a global audience and
              highlights our values`,
    source: "MIT Eng '28",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12 md:mb-20 tracking-tight !whitespace-pre-line">
          Backed by the best.
        </h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1 h-full">
                  <Card className="h-full border border-border rounded-xl shadow-none p-8 flex flex-col">
                    <CardContent className="p-0 flex-grow flex flex-col">
                      <div className="flex items-center mb-4">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-foreground fill-foreground"
                            />
                          ))}
                      </div>
                      <p className="text-foreground text-[16px] leading-[1.6] flex-grow">
                        “{testimonial.quote}”
                      </p>
                      <div className="flex items-center text-foreground mt-auto pt-4">
                        <span className="font-medium text-[15px] !h-6 !whitespace-pre-line !whitespace-pre-line">
                          — {testimonial.source}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute right-0 -bottom-20 hidden md:flex gap-4">
            <CarouselPrevious className="relative w-12 h-12 rounded-full border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background" />
            <CarouselNext className="relative w-12 h-12 rounded-full border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
