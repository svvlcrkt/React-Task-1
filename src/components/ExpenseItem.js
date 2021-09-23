import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css"

//React component is a JS function only.
//custom componentler start uppercase latter, and continuous camelCase attribute. 
//React treats components that start with a lowercase letter like DOM tags.
function ExpenseItem({title, amount, date}) {

    //we can write also props instead of{title, amount, date}.
    //If we can write this way, then we write<div>{props.date.toISOString}</div>
    //instead of <div>{date.toISOString}</div>

    //props means properties
    //props is automatically created with object format.
    //so that props has key-value pairs

    // const expenseDate = new Date(2021, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67;

    //shift+alt+f for format document
    //important!!!
    //we have only one root element

   
  return (
    <div className="expense-item">
      <ExpenseDate d={date}/>
      {/* if there is no content between the opening and closing tag, then we can use /> */}
      <div className="expense-item__description">
          {/* if we want to add an element with dynamically, then we should use {}  */}
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
