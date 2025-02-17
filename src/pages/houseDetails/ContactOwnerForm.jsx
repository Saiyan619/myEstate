import emailjs from "emailjs-com";

const ContactOwnerForm = ({ ownerEmail }) => {
  const sendEmail = (e) => {
    e.preventDefault();
    // lekeafolion@gmail.com

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    e.target,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log("✅ Email sent:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.error("❌ Email error:", error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <form onSubmit={sendEmail}>
      <input type="text" name="to_name" placeholder="to name"/>
      <input type="text" name="from_name" placeholder="Your Name" required />
      <input type="email" name="user_email" placeholder="from Email" required />
      <input type="email" hidden value='arokoyujr10@gmail.com' name="owner_email" placeholder="to Email" required />
      <textarea name="message" placeholder="Your Message" required />
      <button type="submit">Send Message</button>
    </form>
  );
};

export default ContactOwnerForm;
