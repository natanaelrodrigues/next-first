import type { NextPage } from 'next'
import { useRouter } from 'next/router'


const Home: NextPage = () => {
  const router = useRouter();
  return (
      <div>
        <p>Pathname: {router.pathname}</p>
        <p>isFallback: {router.isFallback.toString()}</p>
        
        <button onClick={()=>{
          router.push('/todoV2')
        }}>Ir para algum lugar...</button>
     </div>
  )
}

export default Home
