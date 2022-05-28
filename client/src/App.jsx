import Sidebar from "./components/Sidebar/Sidebar";
import ShoppingList from "./pages/ShoppingList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner/Banner";
import AddItem from "./components/AddItem/AddItem";
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
            <Route path="/add" element={<AddItem></AddItem>}></Route>
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
