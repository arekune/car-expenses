import { ExpenseTotal } from "../components/ExpenseTotal";
import { ExpenseList } from "../components/ExpenseList";
import { ExpenseForm } from "../components/ExpenseForm";

export const HomePage = () => {

    return (
        <>
          <ExpenseTotal />
          <ExpenseList />
          <ExpenseForm />
        </>
      )
}