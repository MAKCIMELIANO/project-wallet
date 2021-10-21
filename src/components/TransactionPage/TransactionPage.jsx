import TransactionForm from "../TransactionForm/TransactionForm";
import GoBackHeader from "../_share/GoBackHeader/GoBackHeader";

const TransactionPage = () => {
  return (
    <>
      <GoBackHeader title={"Расходы"} />
      <TransactionForm />
    </>
  );
};

export default TransactionPage;
