import { useState } from "react";

function Email() {
  //   const [to, setTo] = useState("");
  //   const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  //   function handleToChange(event) {
  //     setTo(event.target.value);
  //   }

  //   function handleSubjectChange(event) {
  //     setSubject(event.target.value);
  //   }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    // event.preventDefault();
    // Here you can handle the email submission logic
  }

  return (
    <div className="flex flex-col items-baseline justify-center max-w-[500px] mt-6">
      <h1 className="text-2xl font-bold mb-4">Reach out to us</h1>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col"
        method="POST"
        action="mailto:vivekcode2@gmail.com"
        enctype="multipart/form-data"
      >
        <label htmlFor="to" className="text-sm mb-2 block font-medium">
          To:
        </label>
        <input
          type="email"
          id="to"
          className="ml-2 w-4/5 py-2 px-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={"vivekcode2@gmail.com"}
          disabled
          //   onChange={handleToChange}
        />
        <label htmlFor="subject" className="text-sm mb-2 block font-medium">
          Subject:
        </label>
        <input
          type="text"
          id="subject"
          className="ml-2 w-4/5 py-2 px-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          value={"Query from The Hindi Buddy"}
          disabled
          //   onChange={handleSubjectChange}
        />

        <label htmlFor="message" className="text-sm mb-2 block font-medium">
          Message:
        </label>
        <textarea
          id="message"
          className="ml-2 w-4/5 py-2 px-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows="6"
          value={message}
          onChange={handleMessageChange}
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 w-4/5 ml-2 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Email;
