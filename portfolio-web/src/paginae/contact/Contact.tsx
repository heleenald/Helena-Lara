import { useState } from "react";
import { Footer } from "../../components";


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // SE SIMULA QUE SE HA MANDADO LA INFO
    setFormData({ name: "", email: "", message: "" });
    
    
    alert("Mensaje enviado con éxito!");

  };
  
  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg flex flex-col md:flex-col items-center mt-32 w-[95%] md:w-auto">
      <h2 className="text-xl font-bold md:w-1/3 text-center mb-10 md:mb-8">Don't be shy and say hi!</h2>
      <form onSubmit={handleSubmit} className="flex flex-col w-full space-y-4 md:w-2/3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-[var(--color-pink)] transition-all hover:bg-gray-100 w-full"
          required
          aria-required="true"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-[var(--color-pink)] transition-all hover:bg-gray-100 w-full"
          required
          aria-required="true"
        />
        <textarea
          name="message"
          placeholder="Your message :)"
          value={formData.message}
          onChange={handleChange}
          className="p-3 border rounded-lg focus:ring-2 focus:ring-[var(--color-pink)] transition-all hover:bg-gray-100 w-full"
          rows={4}
          required
          aria-required="true"
        ></textarea>
        <button
          type="submit"
          className="bg-[var(--color-pink)] text-white p-3 rounded-lg hover:bg-[var(--color-favred)] transition-all w-full cursor-pointer"
        >
          Send
        </button>
      </form>
      <Footer></Footer>
    </div>
    
  );
};
