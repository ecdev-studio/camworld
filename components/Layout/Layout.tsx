import {NextComponentType} from "next";
import React, {ReactChildren, useEffect} from 'react'
import {useTypedSelector} from "../../hook/useTypedSelector";
import Header from "../Header/Header";
import {ICategory} from "../../types/data-types";
import MobileMenu from "../Header/MobileMenu";
import Footer from "../Footer/Footer";

const Layout: NextComponentType<{},{}, { menuArray:Array<ICategory> }> =
  ({ children,menuArray}) => {

  const mobMenu = useTypedSelector(state => state.app.visibleMobileMenu)
    useEffect(() => {
      if (mobMenu) {
        document.body.classList.add("no-scroll")
      } else {
        document.body.classList.remove("no-scroll")
      }
    }, [mobMenu])
  return (
    <>
      <Header menuArray={menuArray}/>
      <main>
        <MobileMenu menuArray={menuArray}/>
        {children}
      </main>
      <Footer/>
    </>
  )
}

export default Layout