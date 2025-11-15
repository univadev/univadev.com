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
    quote: `Univa Dev gave me the opportunity to lead a team, build real projects, and connect with students from around the world. The skills I gained here directly helped me land my dream internship.`,
    source: "University of Waterloo CS '24",
  },
  {
    quote: `The hackathons and workshops are world-class. I've learned more practical skills through Univa Dev than in any classroom. Plus, the community is incredibly supportive and inspiring.`,
    source: "Imperial College London BSc '26",
  },
  {
    quote: `What sets Univa Dev apart is the focus on both technical excellence and leadership. I'm not just learning to code—I'm learning to lead teams and drive innovation.`,
    source: "Stanford CS '28",
  },
  {
    quote: `Being part of Univa Dev opened doors I didn't know existed. The mentorship, resources, and opportunities are unmatched. This organization truly invests in student success.`,
    source: "MIT Eng '28",
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
