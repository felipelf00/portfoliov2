interface ContactFormProps {
  className?: string;
}

export default function ContactForm({ className }: ContactFormProps) {
  return (
    <section id="contact" className={`${className} `}>
      <h2 className="uppercase text-center text-7xl md:text-8xl font-bold mb-12">
        Contact me
      </h2>

      <form
        className="flex flex-col gap-4 max-w-xl mx-auto"
        action="https://formsubmit.co/f482dcda8ff4d9dbda15030d72670cda"
        method="POST"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Name</label>
          <input className="p-1.5 bg-inherit form-border" type="text" id="name" name="name" required />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input className="p-1.5 bg-inherit form-border" type="text" id="email" name="email" required />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="message">Message</label>
          <textarea className="p-1.5 bg-inherit form-border" name="message" id="message" rows={5} required></textarea>
        </div>
        <button className="btn-primary w-fit text-2xl px-4 py-2 mt-2" type="submit">Submit</button>
      </form>
    </section>
  );
}
