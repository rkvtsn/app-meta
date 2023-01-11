import Images from "../../components/Image/Images";
import Jambo from "./Jambo";
import Specials from "./Specials";
import "./styles.css";

const SPECIALS = [
  {
    id: 1,
    name: "Greek salad",
    img: Images.GreekSalad,
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary crutons.",
  },
  {
    id: 2,
    name: "Bruchetta",
    img: Images.Bruchetta,
    price: "5.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary crutons.",
  },
  {
    id: 3,
    name: "Lemon Dessert",
    img: Images.LemonDessert,
    price: "5.00",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives, and our Chicago style feta cheese, garnished with crunchy garlic and rosemary crutons.",
  },
];

const Home = () => {
  return (
    <section className="home">
      <Jambo />
      <Specials products={SPECIALS} />
    </section>
  );
};

export default Home;
