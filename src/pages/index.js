import { Inter } from "next/font/google";
import Homee from "../../components/Home/Home";

const inter = Inter({ subsets: ["latin"] });


export const getStaticProps  = async () => {
  const team = [];
  try {
    const res = await fetch(
      "https://ulutech-935c3-default-rtdb.firebaseio.com/team.json"
    );
    const data = await res.json();
    for (const key in data) {
      team.push({
        id: key,
        name: data[key].name,
        job: data[key].job,
        url: data[key].pic,
      });
    }
  } catch (error) {}

  return { props: { team } };
};



export default function Home({ team }) {

  

  return (
    <>
      <Homee team={team} />
    </>
  );
}

