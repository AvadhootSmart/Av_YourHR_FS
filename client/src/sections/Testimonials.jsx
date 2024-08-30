import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Software Engineer",
      testimonial:
        "YourHR helped me find the perfect job in no time! The process was smooth, and I was able to upload my resume easily. Highly recommend this platform!",
    },
    {
      name: "Jane Smith",
      role: "Data Analyst",
      testimonial:
        "I was impressed by the user-friendly interface of YourHR. Uploading my resume was a breeze, and I quickly got matched with several job opportunities.",
    },
    {
      name: "Michael Brown",
      role: "Product Manager",
      testimonial:
        "YourHR is the best job search platform I have ever used. The resume matching feature is top-notch, and I landed my dream job thanks to this service.",
    },
  ];

  return (
    <div className="bg-zinc-900 py-16 px-8">
      <h2 className="text-4xl font-bold text-white text-center mb-12">
        What Our Users Say
      </h2>
      <div className="max-w-5xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-zinc-700 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-white mb-6">
              "{testimonial.testimonial}"
            </p>
            <div className="flex items-center">
              <div className="ml-4">
                <p className="text-xl font-semibold text-white">
                  {testimonial.name}
                </p>
                <p className="text-base text-gray-400">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
