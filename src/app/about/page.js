import HeroSection from "@/components/hero-section";

const About = () => {
  return (
    <>
      <HeroSection
        title={"About Us"}
        imgUrl={"/logo.jpg"}
        desc={
          "Joi is is a luxurious department store that carries designer clothes and accessories. They have an extensive collection of high-end fashion from top names like Prada, Gucci, and Chanel."
        }
      />
    </>
  );
};

export default About;
