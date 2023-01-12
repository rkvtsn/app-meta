import Image from "../../../components/Image";
import Images from "../../../components/Image/Images";
import "./styles.css";

const Jambo = () => {
  const handleOnReserveTable = () => {
    console.log("go to reserve");
  };

  return (
    <article className="jambo">
      <div className="jambo-content panel-layout rows-layout">
        <div className="jambo-content__info">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button onClick={handleOnReserveTable}>Reserve a Table</button>
        </div>
        <Image src={Images.Restauranfood} />
      </div>
    </article>
  );
};

export default Jambo;
