import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();

  const gotohome = () => {
    navigate("/");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div>
        <section>
          <h1>Contact Page</h1>

          <button onClick={gotohome}>Go to home page</button>

          <button onClick={() => goBack()}> go Back</button>
        </section>
        <div className="con">
          <div class="container" />
          <h2>Contact Us</h2>
          <form action="/form/submit" method="post" />
          <label for="fname">First Name:</label>
          <input type="text" id="fname" name="fname" required />
          <label for="lname">Last Name:</label>
          <input type="text" id="lname" name="lname" required />
          <label for="mail">Email:</label>
          <input type="text" id="mail" name="mail" required />
          <label for="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
          <input type="submit" value="Submit" />
          <form />
        </div>
        <div />
      </div>
    </>
  );
};

export default Contact;
