import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact()  {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_kf2rcaj', 'template_fzs5q4d', form.current, 'yfkATk4sA6T-5SxPo')
  .then((result) => {
    console.log(result.text);
    console.log("message sent");
}, (error) => {
    console.log(error.text);
});
};

return (
<div className="container_c"> 
<div className="contact_form">
<h1>Send me a message</h1> 
</div>
<form ref={form} onSubmit={sendEmail}>
 <div className="contact_me"> 
<label>Your Name</label>
<input type="text" name="user_name" />
<br/>
<label>Your Email</label>
<input type="email" name="user_email" />
<br/>
<label>Message</label>
<textarea name="message" />
<br/>
<input type="submit" value="Send" />
</div>  
</form>
</div> 
);
};