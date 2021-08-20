import React, { useState, useEffect } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

export default function App() {
  
const [allBills, setAllBills] = useState([])

useEffect( () => {
  fetch(API)
  .then((res) => res.json())
  .then((json) => setAllBills(json))


}, [] );



  return (
    <div>
      <BillsCast />
      <BillCollection />
    </div>
  );
}
