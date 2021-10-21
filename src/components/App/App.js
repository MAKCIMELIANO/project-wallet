import CategoryListPage from "../CategoryListPage/CategoryListPage";
import MainPage from "../MainPage/MainPage";
import TransactionPage from "../TransactionPage/TransactionPage";
import TransactionsHistoryPage from "../TransactionsHistoryPage/TransactionsHistoryPage";

const App = () => {
  return (
    <>
      <MainPage />
      <TransactionPage />
      <CategoryListPage />
      <TransactionsHistoryPage />
    </>
  );
};

export default App;
