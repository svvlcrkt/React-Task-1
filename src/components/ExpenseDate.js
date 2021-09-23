import "./ExpenseDate.css"

function ExpenseDate({d}){
    const month = d.toLocaleString('en-US',{month:'long'});
    const day = d.toLocaleString('en-US',{day:'2-digit'});
    const year = d.getFullYear();
return (
<div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
</div>)
}

export default ExpenseDate;