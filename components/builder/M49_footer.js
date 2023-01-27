import Link from "next/link";
//import Image from "next/image";
//import React, { useState } from "react";
//import logo from '../public/sample-logo.png'
//import NavItem from "./NavItem";

const m49_footer_italic = {
  fontStyle: "italic",
  };


const M49_footer = props => (
    <>
        <div className="m49_footer">
          <p>Content hard coded in <span style={m49_footer_italic}>Next.js &gt; M49_footer.js</span></p>

          <div className="m49_footer_bar">
            {props.links.map((menu, idx) => (
              <div className="m49_footer_link">
                <Link href={menu.url}>{menu.caption}</Link>
              </div>
            ))}
          </div>

        </div>
    </>
  )

  export default M49_footer