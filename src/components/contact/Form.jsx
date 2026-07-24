import { useState } from 'react';

export default function Form() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "2408ebef-f09d-441f-8d62-a9082ab16ef7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" required/>
      <input type="email" name="email" required/>
      <textarea name="message" required></textarea>
      <button type="submit">Submit Form</button>
      <span>{result}</span>
    </form>
  );
}