import { useEffect } from "react";

function useMount(callback:()=>any){
  useEffect(()=>{
    return callback();
  },[]);
}

export default useMount;