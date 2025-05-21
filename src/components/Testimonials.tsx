
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Homeowner",
      text: "Custom Electric exceeded all our expectations, delivering exceptional service and phenomenal results. Their expertise and attention to detail made our electrical upgrade truly remarkable.",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      text: "Working with Custom Electric has been transformative for our commercial property. Their professional team completed the work on time and within budget, with minimal disruption to our business.",
    },
  ];

  return (
    <Carousel className="max-w-4xl mx-auto">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="p-6">
              <blockquote className="text-xl text-estate-600 mb-6">
                "{testimonial.text}"
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div>
                  <div className="font-semibold text-estate-800">{testimonial.name}</div>
                  <div className="text-estate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default Testimonials;
