import { useState, cloneElement } from "react";
import { useAppContext } from "@/app/appContext";
import Email from "@/app/svgElems/email";
import GitHub from "@/app/svgElems/github";
import LinkedIn from "@/app/svgElems/linkedIn";

export default function ContactCarousel() {
  const [index, setIndex] = useState(0);
  const {setCursorState} = useAppContext()!;
  const contactIcons = [
    {
      iconName: "GitHub",
      icon: <GitHub />,
      link: "https://github.com/andrewmillercode",
    },
    {
      iconName: "LinkedIn",
      icon: <LinkedIn />,
      link: "https://www.linkedin.com/in/-andrew-miller/",
    },
    { iconName: "Email", icon: <Email />, link: "mailto:andrewmillercode@gmail.com" },
  ];
  const openLinkNewTab = () => {
    window?.open(contactIcons[index].link, '_blank');
  }
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) newIndex = contactIcons.length - 1;
    if (newIndex > contactIcons.length - 1) newIndex = 0;
    setIndex(newIndex);
  };
  const leftIndex = () => {
    let leftIndex = index - 1;
    if (leftIndex < 0) leftIndex = contactIcons.length - 1;
    return leftIndex;
  };
  const rightIndex = () => {
    let rightIndex = index + 1;
    if (rightIndex > contactIcons.length - 1) rightIndex = 0;
    return rightIndex;
  };
  return (
   
    <div className="contactCarousel">
        <>
      <button className="plainWhiteChevron"
        onClick={() => {
          updateIndex(index - 1);
        }}
      >
        <svg
          style={{ transform: "rotate(-180deg)" }}
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </button>
     
      {cloneElement(contactIcons[leftIndex()].icon, {
        optStyle: {width:'2rem',height:'2rem',fill:'rgba(255,255,255,0.2)'},
      })}
      {cloneElement(contactIcons[index].icon, {
        optStyle: { marginBottom:'2rem',width:'4rem',height:'4rem',fill:'rgba(255,255,255,1)'},
        optCursor : setCursorState,
        optClick : openLinkNewTab
      })}
       {cloneElement(contactIcons[rightIndex()].icon, {
        optStyle: {width:'2rem',height:'2rem',fill:'rgba(255,255,255,0.2)'},
      })}
     
      <button className="plainWhiteChevron"
        onClick={() => {
          updateIndex(index + 1);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#5f6368"
        >
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </button>
      </>
      <h1 className="carouselIdentifier">{contactIcons[index].iconName}</h1>
    </div>
  );
}
