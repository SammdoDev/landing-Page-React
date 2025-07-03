import Card from "../props/Card";

function Services() {
  type Services = {
    img: string;
    title: string;
    description: string;
  };

  const services: Services[] = [
    {
      img: "src/assets/headphones.png",
      title: "Virtual Development",
      description:
        "Refers to the creation, management, and optimization of digital solutions — such as websites, mobile apps, cloud platforms, and virtual environments — without requiring physical infrastructure.",
    },
    {
      img: "src/assets/chat.png",
      title: "Live text support",
      description:
        "refers to the creation, management, and optimization of digital solutions — such as websites, mobile apps, cloud platforms, and virtual environments — without requiring physical infrastructure.",
    },
    {
      img: "src/assets/schedule.png",
      title: "Scheduling",
      description:
        "refers to the creation, management, and optimization of digital solutions — such as websites, mobile apps, cloud platforms, and virtual environments — without requiring physical infrastructure.",
    },
  ];

  return (
    <>
      <div className="w-full p-8 flex flex-col">
        <h1 className="text-lg font-bold text-[#5EABD6]">Our Services</h1>
        <h1 className="text-xl md:text-2xl font-bold my-2">
          How our teams empowering your succes
        </h1>
        <p className="text-lg font-thin color-[#2F5249] md:w-1/2">
          We offer a range of professional services designed to support your
          business operations, enhance customer experience, and improve
          efficiency. Whether you need virtual receptionists, customer support,
          or business consulting — we’ve got you covered.
        </p>
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 mt-4 items-stretch">
          {services.map((service, index) => (
            <Card key={index}>
              <img src={service.img} alt={service.title} width={64} />
              <div className="flex flex-col justify-center items-start">
                <h1 className="text-lg font-bold mt-4">{service.title}</h1>
                <p className="mt-2">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
export default Services;
