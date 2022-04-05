import {NextComponentType} from "next";
import React, { ReactChildren} from 'react'
import {useTypedSelector} from "../../hook/useTypedSelector";
import Header from "../Header/Header";
import {ICategory} from "../../types/data-types";

const Layout: NextComponentType<{},{}, { menuArray:Array<ICategory> }> =
  ({ children,menuArray}) => {

  const mobMenu = useTypedSelector(state => state.app.visibleMobileMenu)

  return (
    <>
      <Header menuArray={menuArray}/>
      <main>
        {children}
      </main>
    </>
  )
}

export default Layout