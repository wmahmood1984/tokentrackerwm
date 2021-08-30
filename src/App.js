import React, { useState,useEffect } from 'react'
import axios from 'axios'
import './App.css';
import Main from './components/main';
import { useSelector,useDispatch } from 'react-redux';
import { setData} from './state/ui/index'
function App() {
  const dispatch = useDispatch();

  const [ data1,setData] = useState(null)
  
  
  const addressSelected = useSelector((state)=>{
    const result =  state.adoptReducer.addressSelected; 
   return result
   });


  useEffect(() => {
    axios.get(`https://api.ethplorer.io/getAddressInfo/${addressSelected}?apiKey=freekey`)
    //   // Handle a successful response from the server
       .then(response => {
    //           // Getting a data object from response that contains the necessary data from the server
               const data = response.data;
               dispatch(setData(data))
    //           // Save the unique id that the server gives to our object
              
       })
    //   // Catch and print errors if any
       .catch(error => console.error('On fetching data', error));
//        return () => {}
}, [addressSelected,data1])


  return (
    <div className="App">
     <Main data={data1}></Main>
    </div>
  );
}

export default App;
