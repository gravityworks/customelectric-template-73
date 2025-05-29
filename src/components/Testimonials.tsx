
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
      name: "Jay Hull",
      role: "General Contractor",
      text: "I'm a GC with Hull Designs llc and like to use Custom Electric on our projects. Jase and CJ did a great job keeping job site clean and on schedule. They ran a new line to 2nd story opposite end of main box. We installed lights and moved locations of lights and added a Panasonic wiper exhaust fan with tru heat option. Also ran line for heated flooring. Great company to work with great prices and good employees.",
    },
    {
      name: "Gennene",
      role: "Homeowner",
      text: "I can't even begin to convey how great their service is. We use Custom Electric at my place of business, and they have always been quick and affordable. I had a problem at home, I texted on a Sunday with an emergency. Got a quick response and was immediately scheduled. The weather was horrible, and I felt so bad, but the problem was promptly solved. Thanks to everyone involved!",
    },
    {
      name: "Peggy",
      role: "Local Resident",
      text: "I manage the quality dairy in holt and have a lot of custom electric guys that come in. They are all so friendly and nice. I have never had any of them grumpy or mean. I just wanted to let you know this because it's nice to have customers like that",
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
