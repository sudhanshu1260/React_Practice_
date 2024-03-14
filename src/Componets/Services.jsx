import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const gotopub = () => {
    navigate("/");
  };
  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <section>
        <h1>Services Page😥</h1>

        <button onClick={gotopub}>Go to About page</button>

        <button onClick={() => goBack()}> go Back</button>
      </section>
    </>
  );
};

export default Services;
