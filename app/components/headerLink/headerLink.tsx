import { RefObject } from "react";
import { useAppContext } from "@/app/appContext";

import styles from './headerLink.module.css'

export default function HeaderLink({content, sectionReference} : {content : string; sectionReference: RefObject<HTMLElement | null>
}) {
    const {setCursorState} = useAppContext()!;
    function scrollToReference() {
        console.log(sectionReference)
        if (!sectionReference.current) return;
        sectionReference.current?.scrollIntoView({behavior:"smooth"})
      
    }
    return (                  
        <button onMouseEnter={() => {setCursorState("hover")}} onMouseLeave={()=>{setCursorState("default")}} className={styles.headerButton} onClick={scrollToReference}>
            {content}
        </button>
    );
}