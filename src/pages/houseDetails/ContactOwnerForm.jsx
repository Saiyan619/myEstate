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
    <div className="p-4">
         <form className="rounded-md bg-white p-5 flex items-center justify-center flex-col" onSubmit={sendEmail}>     
         <span className="text-xl font-semibold text-left">Send Message to Owner</span>

        <label className="w-full max-w-xs mt-4">
  <div className="label">
    <span className="label-text">Your Name</span>
  </div>
  <input type="text" name="from_name" placeholder="Messenger's Name" required  className="input input-bordered w-full max-w-xs" />

        </label>

        
    

        <label className="w-full max-w-xs">
  <div className="label">
    <span className="label-text">Sending Email From:</span>
  </div>
  <input type="email" name="user_email" placeholder="Your Email" required className="input input-bordered w-full max-w-xs" />

        </label>

        {/* <label className="w-full max-w-xs">
  <div className="label">
    <span className="label-text">Send Messsage To</span>
  </div>
  <input type="text" name="to_name" placeholder="Reciever's Name" className="input input-bordered w-full max-w-xs" />
        </label> */}

        

        <label className="w-full max-w-xs">
        <div className="label">
    <span className="label-text">Send Email To:</span>
  </div>
  <input type="email" className="input" hidden value='arokoyujr10@gmail.com' name="owner_email" placeholder="to Email" required />
 
</label>

        
        <label>
  <div className="label">
    <span className="label-text">Send Message</span>
  </div>
  <textarea className="textarea textarea-bordered w-64 sm:w-80" name="message" placeholder="Your Message" required></textarea>

        </label>
        
      <button className="btn btn-primary mt-4" type="submit">Send Message</button>
    </form>
    </div>
  );
};

export default ContactOwnerForm;
