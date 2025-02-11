import { useAppContext } from "@/app/appContext";
import Email from "@/app/svgElems/email";
import GitHub from "@/app/svgElems/github";
import LinkedIn from "@/app/svgElems/linkedIn";

import styles from './connectBtn.module.css'

export default function ConnectButton({ type }: { type: string }) {
  
  const {setCursorState} = useAppContext()!;
  return (
    <button onMouseEnter={() => {setCursorState("hover")}} onMouseLeave={()=>{setCursorState("default")}} className={`invisButton ${styles.connectButton}`}>
      {type == "GitHub" && <GitHub optClick={()=>{  window?.open("https://github.com/andrewmillercode", '_blank');}}/>}
      {type == "LinkedIn" && <LinkedIn optClick={()=>{  window?.open("https://www.linkedin.com/in/-andrew-miller/", '_blank');}}/>}
      {type == "Email" && <Email optClick={()=>{  window?.open("mailto:https://github.com/andrewmillercode", '_blank');}}/>}
     
    </button>
  );
}
