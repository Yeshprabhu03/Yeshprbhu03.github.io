const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message" required />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact; 