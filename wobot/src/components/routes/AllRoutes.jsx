import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Wobotpage from '../Wobotpage'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Wobotpage />} />
    </Routes>
  )
}

export default AllRoutes