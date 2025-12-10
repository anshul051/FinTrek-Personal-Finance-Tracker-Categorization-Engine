import Sidebar from "./components/Sidebar.jsx";
import BalanceCard from "./components/BalanceCard.jsx"; 
import MyActivity from "./components/MyActivity.jsx";
import FastTranfers from "./components/FastTransfers.jsx";

const App = () => {
  return (
    <div className="bg-black h-screen w-full flex">
      <Sidebar />
      <BalanceCard />
      <MyActivity />
      <FastTranfers />
    </div>
  );
};

export default App;