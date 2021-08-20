import React, { useState, useEffect } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const API = 'http://localhost:8002/bills'

export default function App() {
  
const [allBills, setAllBills] = useState([])

useEffect( () => {
  fetch(API)
  .then((res) => res.json())
  .then((data) => setAllBills(data))
}, [] );


function setEnlisted(enlistedBill) {
  // console.log(`set bill ${enlistedBill} to enlisted`)
  setAllBills(allBills.map((bill) =>
    bill.id === enlistedBill ? { ...bill, enlisted: true } : bill
  ))
}

function setDelisted(DelistedBill) {
  // console.log(`set bill ${DelistedBill} to enlisted`)
  setAllBills(allBills.map((bill) =>
    bill.id === DelistedBill ? { ...bill, enlisted: false } : bill
  ))
}

const myBills = allBills.filter((bill) => bill.enlisted);

function fireBill(billToFire) {
  console.log(`set bill ${billToFire} to Fired`);

  setAllBills(allBills.filter(bill => bill.id !== billToFire));
}


  return (
    <div>
      <BillsCast myBills={myBills} onClickBill={setDelisted} onFireBill={fireBill}/>
      <BillCollection allBills={allBills} onClickBill={setEnlisted} onFireBill={fireBill}/>
    </div>
  );
}
