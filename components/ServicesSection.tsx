import {
  Code2,
  Palette,
  Megaphone,
  PenTool,
  ShoppingCart,
  Smartphone,
  Search,
  Wrench,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import { Badge } from "./ui/badge";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, fast and responsive websites that help businesses build credibility and attract more customers online.",
    icon: Code2,
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful user interfaces designed with great user experience, smooth interactions and modern design principles.",
    icon: Palette,
  },
  {
    title: "Graphic Design",
    description:
      "Professional logos, flyers, posters and brand visuals that make your business stand out.",
    icon: PenTool,
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategic content and campaigns designed to grow your audience and increase brand awareness.",
    icon: Megaphone,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Online stores that allow businesses to sell products and manage customers digitally.",
    icon: ShoppingCart,
  },
  {
    title: "Mobile App Development",
    description:
      "Custom mobile applications built to solve problems and improve customer experiences.",
    icon: Smartphone,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your visibility on Google and help potential customers discover your business.",
    icon: Search,
  },
  {
    title: "Website Maintenance",
    description:
      "Continuous updates, improvements and technical support to keep your website running smoothly.",
    icon: Wrench,
  },
];

function ServicesSection() {
  return (
    <section
      className="relative overflow-hidden bg-slate-950 px-6 py-24 "
      id="services"
    >
      {/* Glow Effects */}
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <Badge
            className="
            border-cyan-400/30
            bg-cyan-400/10
            text-cyan-300
            "
          >
            My Services
          </Badge>

          <h2
            className="
          mt-5
          text-4xl
          font-extrabold
          text-white
          md:text-6xl
          "
          >
            Digital Solutions That Help Businesses{" "}
            <span className="text-cyan-400">Grow Online</span>
          </h2>

          <p
            className="
          mt-6
          text-lg
          leading-8
          text-slate-400
          "
          >
            I create websites, designs and digital experiences that help
            businesses build trust, attract customers and compete online.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
        grid
        gap-6
        md:grid-cols-2
        lg:grid-cols-4
        "
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                className="
                group
                border-white/10
                bg-white/5
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-cyan-400/60
                hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]
                "
              >
                <CardHeader>
                  <div
                    className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-cyan-400/10
                    text-cyan-400
                    transition-all
                    duration-300
                    group-hover:bg-cyan-400
                    group-hover:text-slate-950
                    "
                  >
                    <Icon size={28} />
                  </div>

                  <CardTitle
                    className="
                    mt-5
                    text-xl
                    text-white
                    "
                  >
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p
                    className="
                  leading-7
                  text-slate-400
                  "
                  >
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
