import { ChevronRightIcon } from "@heroicons/react/outline";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Drawer from "../components/Drawer";
import Main from "../components/Main";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [drawer,setDrawer] = useState(false)
  const {data:session} = useSession()
  const router = useRouter()
  useEffect(() => {
    if(!session)router.push('/login')
  },[])
  if(session)
  return (
  <div className="bg-black h-screen overflow-hidden">
    <main className="flex">
      <div className="hidden md:inline-flex"><Sidebar/></div>
      <Main/>
    </main>
    <div className="sticky bottom-0">
      <Player/>
    </div>
    <div className="md:hidden absolute top-0 left-1 bg-black p-1 rounded-full" onClick={()=> setDrawer(!drawer)}><ChevronRightIcon className="h-6 w-6 text-white rounded-full "/></div>
    <Drawer open={drawer} setOpen={setDrawer} component={<Sidebar/>} />
  </div>
  )
  else return null
}


export async function getServerSideProps(context){
  const session = await getSession(context);
  return {
    props:{
      session
    }
  }
}