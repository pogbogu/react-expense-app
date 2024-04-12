import "./App.css";
import AddTransaction from "./components/AddTransaction";
import Balance from "./components/Balance";
import Board from "./components/Board";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import store from "./services/store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Balance />
        <Board />
        <TransactionList />
        <AddTransaction />
      </div>
    </Provider>
  );
}

export default App;
