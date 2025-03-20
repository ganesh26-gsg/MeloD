import React from 'react'
import Ac from './Ac'
import Beauty from './Beauty'
import Computer from './Computer'
import Fridge from './Fridge'
import Men from './Men'
import Mobile from './Mobile'
import Tv from './Tv'
import Women from './Women'
import Watches from './Watches'
import Footer from './Footer'

const Products = () => {
  return (
    <div>
      <Men />
      <Women />
      <Beauty />
        <Mobile />
        <Ac />
        <Computer />
        <Fridge />
        <Tv />
        <Watches />
        <Footer />
    </div>
  )
}

export default Products