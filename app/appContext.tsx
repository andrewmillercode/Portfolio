"use client";
import React, {createContext, useState, useContext, useEffect } from "react";


interface AppContextType {
    setCursorState: React.Dispatch<React.SetStateAction<"hover" | "default">>;
    cursorState : "hover" | "default";
    popupState : boolean;
    togglePopupOn : React.Dispatch<React.SetStateAction<boolean>>;
    curGridItem : GridItemType | null;
    setCurGridItem : React.Dispatch<React.SetStateAction<GridItemType | null>>;
}
interface GridItemType {
    Title?: string ;
    subTitle?:string;
    imgLocation? : string;
    date? : string;
    url? : string;
    description? : string;
    
}
const AppContext = createContext<AppContextType | undefined>(undefined);

const AppProvider = ({ children } : {children : any}) => {

  const [cursorState,setCursorState] = useState<AppContextType['cursorState']> ("default");
  const [popupState,togglePopupOn] = useState<AppContextType['popupState']> (false);
  const [curGridItem,setCurGridItem] = useState<AppContextType['curGridItem']> (null);
  
  useEffect(()=>{
    if(!document) return;
    if(!document.body) return;

    document.documentElement.style.overflowY = popupState ? "hidden" : "scroll";
  },[popupState])

  return (
    <AppContext.Provider
      value={{
        cursorState,setCursorState,togglePopupOn,popupState,curGridItem,setCurGridItem
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
const useAppContext = () => useContext(AppContext); //hook
export  { useAppContext, AppProvider };
export type {GridItemType};
