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

const testimonials = [

  {
    quote: `What sets Univa Dev apart is the focus on both technical excellence and leadership.`,
    source: "Biochemistry Student, Oxford University '28",
  },
  {
    quote: `I feel like Univa Dev's community keeps me accountable and motivated to learn and grow.`,
    source: "Grade 11 Student, Merivale High School",
  },
  {
    quote: `Univa Dev takes anyone with a laptop and a dream and turns them into a world-class builder.`,
    source: "CS Student, UCLA '29",
  },
  {
    quote: `Univa Dev is the new pipeline of next generation cracked talent.`,
    source: "Engineering Student, Tsinghua University '29",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="bg-background py-20 lg:py-32">
      <div className="container mx-auto px-5 md:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-12 md:mb-20 tracking-tight !whitespace-pre-line">
          Trusted by students worldwide
        </h2>

        <Carousel
          opts={{ align: "start", loop: true }}
          className="relative w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-2 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-0.5 h-full">
                  <Card className="h-full border border-border rounded-xl shadow-none p-8 flex flex-col">
                    <CardContent className="p-0 flex-grow flex flex-col">
                      <p className="text-foreground text-[16px] leading-[1.6] flex-grow">
                        "{testimonial.quote}"
                      </p>
                      <div className="flex items-center text-foreground mt-auto pt-4">
                        <span className="font-medium text-[15px] !h-6 !whitespace-pre-line !whitespace-pre-line">
                          {testimonial.source}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute left-5 md:left-auto md:right-0 -bottom-20 flex items-center gap-0.5">
            <CarouselPrevious className="!left-0 !top-auto !-translate-y-0 relative w-12 h-12 rounded-full border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background [&>svg]:text-foreground [&>svg]:hover:text-background" />
            <CarouselNext className="!right-0 !left-auto !top-auto !-translate-y-0 relative w-12 h-12 rounded-full border-2 border-foreground bg-background text-foreground hover:bg-foreground hover:text-background [&>svg]:text-foreground [&>svg]:hover:text-background" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
