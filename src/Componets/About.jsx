import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const gotocontact = () => {
    navigate("/Contact");
  };
  return (
    <>
      <section>
        <h1>About Page</h1>
        <button onClick={() => gotocontact()}>Go to Contact Page</button>
      </section>
    </>
  );
};

export default About;
