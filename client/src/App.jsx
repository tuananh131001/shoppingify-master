import Sidebar from "./components/Sidebar/Sidebar";
import ShoppingList from "./pages/ShoppingList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <div className="App flex">
      <BrowserRouter>
        {" "}
        <Sidebar></Sidebar>
        <main className=" flex flex-col flex-1 px-4 py-5 gap-5">
          <Routes>
            <Route path="/" element={<ShoppingList></ShoppingList>}></Route>
            <Route path="/list" element={<Banner></Banner>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
