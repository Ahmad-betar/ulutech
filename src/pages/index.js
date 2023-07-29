import { Inter } from 'next/font/google'
import Homee from '../../components/Home/Home';

const inter = Inter({ subsets: ['latin'] })

export default function Home({team}) {



  return (
    <>
      <Homee team = {team}/>
    </>
  )
}



export const getStaticProps = async () => {
  const res = await fetch('https://ulutech-935c3-default-rtdb.firebaseio.com/team.json')
  const data = await res.json();

  const team = [];

  for(const key in data){
    team.push({
      id : key,
      name : data[key].name,
      job : data[key].job,
      url : data[key].pic,
    })
  }


  return { props: { team } }
}