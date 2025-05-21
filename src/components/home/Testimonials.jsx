import React from "react";
import Container from "../common/Container";
import Title from "../common/Title";
import TestimonialCard from "../testimonials/TestimonialCard";
import { Fade } from "react-awesome-reveal";

const testimonials = [
  {
    name: "Lena Rivera",
    image: "https://i.ibb.co/0pqQXwns/gardener-3.jpg",
    location: "Austin, TX",
    role: "Organic Gardener",
    message:
      "This community has completely transformed the way I garden. The tips and support are invaluable — I've even started composting thanks to a guide here!",
  },
  {
    name: "Marcus Johnson",
    image: "https://i.ibb.co/pvDmbTht/gardener-10.jpg",
    location: "Portland, OR",
    role: "Urban Farmer",
    message:
      "The knowledge shared here helped me turn my small balcony into a thriving vegetable garden. I'm harvesting fresh produce weekly now!",
  },
  {
    name: "Sophia Chen",
    image: "https://i.ibb.co/BHxrjHg7/gardener-7.jpg",
    location: "Denver, CO",
    role: "Sustainability Advocate",
    message:
      "I've been able to reduce my carbon footprint significantly with the eco-friendly gardening practices I've learned here. Amazing community!",
  },
];

const Testimonials = () => {
  return (
    <section className="mt-6 bg-foreground">
      <Fade>
        <Container className="py-8 md:py-16">
          <Title text="What our community says" highlight="community" />
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {testimonials?.length > 0 &&
              testimonials.map((test, i) => (
                <TestimonialCard
                  key={i}
                  name={test.name}
                  image={test.image}
                  location={test.location}
                  role={test.role}
                  message={test.message}
                />
              ))}
          </div>
        </Container>
      </Fade>
    </section>
  );
};

export default Testimonials;
