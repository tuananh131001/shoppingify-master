import Sidebar from "./components/Sidebar/Sidebar";
import ShoppingList from "./components/ShoppingList/ShoppingList";

function App() {

  return (
    <div className="App flex">
      <Sidebar></Sidebar>
      <ShoppingList></ShoppingList>
    </div>
  );
}

export default App;
