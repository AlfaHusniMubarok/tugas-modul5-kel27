import React, { useContext } from "react";
import { ListItemsContext } from "./ListItems";

export default function Header() {
    const { listitems } = useContext(ListItemsContext);
  
    return (
      <div>
        <div>
            <center>
            <h1 style={{fontFamily:'Roboto', fontWeight:'bold', color:'black', textShadow:'2px 2px yellow', letterSpacing:'2px'}}>Praktikum RPLBK Kelompok 27</h1>
            </center>
        </div>
        <hr />
        <br></br>
      </div>
    );
  }