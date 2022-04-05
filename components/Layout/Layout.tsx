import {NextComponentType} from "next";
import React from 'react'
import {useTypedSelector} from "../../hook/useTypedSelector";
import Header from "../Header/Header";

const Layout: NextComponentType = ({ children }) => {

  const mobMenu = useTypedSelector(state => state.app.visibleMobileMenu)

  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout