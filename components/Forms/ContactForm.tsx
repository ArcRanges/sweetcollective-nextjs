import Button from "components/Button";
import React from "react";

export default function ContactForm() {
  return (
    <div className="mb-5">
      <form>
        <div className="flex flex-col mb-4">
          <label htmlFor="#first_name">First Name:</label>
          <input
            name="first_name"
            type="text"
            placeholder="John Doe"
            className="p-3 bg-gray-200 mt-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="#last_name">Last Name:</label>
          <input
            name="last_name"
            type="text"
            placeholder="John Doe"
            className="p-3 bg-gray-200 mt-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="#email">Email:</label>
          <input
            name="email"
            type="text"
            placeholder="johndoe@example.com"
            className="p-3 bg-gray-200 mt-2"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="#message">Message:</label>
          <textarea
            rows={4}
            name="message"
            placeholder="johndoe@example.com"
            className="p-3 bg-gray-200 mt-2"
          />
        </div>
        <Button>Submit Message</Button>
      </form>
    </div>
  );
}
