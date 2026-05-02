"use client"

import Image from 'next/image'
 

const page = () => {
  return (
    <div> 
           <div>
             <p className='text-5xl ml-15 mb-15 mt-15 font-bold'>Top Contributors</p>
           <span className='flex flex-col '>
               <div className='ml-15 flex relative flex-row mb-15 rounded-2xl p-6 hover:bg-amber-50' onClick={()=>""}>
                <Image src="/andreawise.png" alt="user" quality={75} width={150} height={150}  />
                <span className='mt-10 ml-10 flex flex-col '>
                  <p className='text-2xl'>Andrea Wise</p>
                  <p className='opacity-17 mt-3' >135 articles</p>
                </span>

               </div>

               <div className='ml-15 flex relative flex-row mb-15 rounded-2xl p-6 hover:bg-amber-50'>
                <Image src="/karensmith.png" alt="user" quality={75} width={150} height={150} />
                <span className='mt-10 ml-10 flex flex-col '>
                  <p className='text-2xl'>Karen Smith</p>
                  <p className='opacity-17 mt-3' >135 articles</p>
                </span>
               </div>

               <div className='ml-15 flex relative flex-row mb-15 rounded-2xl p-6 hover:bg-amber-50'>
                <Image src="/samantha.png" alt="user" quality={75} width={150} height={150} />
                <span className='mt-10 ml-10 flex flex-col '>
                  <p className='text-2xl'>Samantha Williams</p>
                  <p className='opacity-17 mt-3' >135 articles</p>
                </span>
               </div>

               <div className='ml-15 flex relative flex-row mb-15 rounded-2xl p-6 hover:bg-amber-50'>
                 <Image src="/retana.png" alt="user" quality={75} width={150} height={150} />
                 <span className='mt-10 ml-10 flex flex-col '>
                  <p className='text-2xl'>Retana Hope</p>
                  <p className='opacity-17 mt-3' >135 articles</p>
                </span>
               </div>

               <div className='ml-15 flex relative flex-row mb-15 rounded-2xl p-6 hover:bg-amber-50'>
                 <Image src="/angelasmith.png" alt="user" quality={75} width={150} height={150} />
                 <span className='mt-10 ml-10 flex flex-col '>
                  <p className='text-2xl'>Angela Smith</p>
                  <p className='opacity-17 mt-3' >135 articles</p>
                </span>
               </div>
           </span>
           </div>
    </div>
  )
}

export default page




/*import { useState, CSSProperties } from "react";
import { ClipLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default App;*/