import { useState } from "react";
import { Mail, MessageCircle, User, Briefcase } from "lucide-react";

import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const enquiryReasons = [
  "Website Development",
  "UI/UX Design",
  "Graphic Design",
  "Social Media Marketing",
  "Mobile App Development",
  "Other",
];

function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function sendToWhatsapp() {
    const phoneNumber = "233531350631"; // Replace with your WhatsApp number

    const text = `
Hello Tiyu Tech Solutions 👋

Name: ${formData.name}

Email:
${formData.email}

Reason for enquiry:
${formData.reason}

Message:
${formData.message}
`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");
  }

  return (
    <section
      id="contact"
      className="
      relative
      overflow-hidden
      bg-slate-950
      px-6
      py-24
      "
    >
      {/* Glow */}
      <div
        className="
      absolute
      left-1/2
      top-0
      h-96
      w-96
      -translate-x-1/2
      rounded-full
      bg-cyan-500/20
      blur-[120px]
      "
      />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <Badge
            className="
            border-cyan-400/30
            bg-cyan-400/10
            text-cyan-300
            "
          >
            Contact Me
          </Badge>

          <h2
            className="
          mt-5
          text-4xl
          font-bold
          text-white
          md:text-6xl
          "
          >
            Let&apos;s Build Something{" "}
            <span className="text-cyan-400">Great</span>
          </h2>

          <p
            className="
          mt-5
          text-slate-400
          "
          >
            Have a project idea? Send me a message and let&apos;s discuss how I
            can help your business grow online.
          </p>
        </div>

        <Card
          className="
          border-white/10
          bg-white/5
          backdrop-blur-xl
          "
        >
          <CardContent className="p-8">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Name
                </label>

                <div className="relative">
                  <User
                    className="
                  absolute
                  left-3
                  top-3
                  text-cyan-400
                  "
                    size={18}
                  />

                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="
                    border-white/10
                    bg-black/20
                    pl-10
                    text-white
                    "
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>

                <div className="relative">
                  <Mail
                    className="
                    absolute
                    left-3
                    top-3
                    text-cyan-400
                    "
                    size={18}
                  />

                  <Input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="
                    border-white/10
                    bg-black/20
                    pl-10
                    text-white
                    "
                  />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm text-slate-300">
                Reason for enquiry
              </label>

              <select
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="
                w-full
                rounded-md
                border
                border-white/10
                bg-black/20
                p-3
                text-white
                "
              >
                <option value="">Select a service</option>

                {enquiryReasons.map((item) => (
                  <option key={item} value={item} className="bg-slate-900">
                    {item}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-6">
              <label className="mb-2 block text-sm text-slate-300">
                Message
              </label>

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="
                min-h-32
                border-white/10
                bg-black/20
                text-white
                "
              />
            </div>

            <Button
              onClick={sendToWhatsapp}
              className="
              mt-8
              w-full
              bg-cyan-500
              py-6
              text-md
              font-bold
              text-black
              hover:bg-cyan-400
              "
            >
              <MessageCircle className="mr-2" />
              Send Message On WhatsApp
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default ContactSection;
