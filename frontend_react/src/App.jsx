import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/Homepage"
import DefaultLayout from "./layouts/DefaultLayout"
import Corsi from "./pages/Corsi"

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/corsi" element={<Corsi />} />
          {/* <Route path="/corsi/:id" element={<DetailCorsi />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
