import { ExpenseTotal } from "./ExpenseTotal";
import { ExpenseList } from "./ExpenseList";
import { ExpenseForm } from "./ExpenseForm";

export const HomePage = () => {

    return (
        <>
          <ExpenseTotal />
          <ExpenseList />
          <ExpenseForm />
        </>
      )
}