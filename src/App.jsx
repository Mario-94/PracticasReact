import CartExample from "./CartExample/CartExample";
import { FilteProvider } from "./CartExample/context/filters";
function App() {
  return (
    <>
      <FilteProvider>
        <CartExample />
      </FilteProvider>
    </>
  );
}

export default App;
