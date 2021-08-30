import React, { useState,useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { setaddressSelected} from '../state/ui/index'
export default function Main({data}) {
    const dispatch = useDispatch();
    const [ address, setAddress] = useState("0x32Be343B94f860124dC4fEe278FDCBD38C102D88")
    const [tokenSelected, settokenSelected] = useState(0)
     
    
    
    const addressSelected = useSelector((state)=>{
        const result =  state.adoptReducer.addressSelected; 
       return result
       });

      

    
    console.log("data",data)   




    return (
        <div>
            <div style={{fontSize:"40px", position:"absolute", top:"200px", left:"400px", textAlign:"left"}} >
                Token identifier with live charts
            </div>
            <div style={{fontSize:"20px", color: "blue",position:"absolute", top:"250px", left:"400px", textAlign:"left"}}>
                your Selected Address is : {addressSelected}<br/>
                Your Token Selected is : {data &&  data.tokens[tokenSelected].tokenInfo.name}
            </div>
            <div>
            <input style={{top:"300px", left:"400px", position:"absolute", width:"600px",color:"black",fontWeight:"bold", textAlign:"left", fontSize:"20px"}}
                    value={address} type="value"
                    placeholder="Please enter the address of your erc 20 token"            
                    onChange={({ target }) => {setAddress(target.value)}}/>
                    <button onClick={()=>{dispatch(setaddressSelected(address))}} style={{top:"300px", left:"1010px", position:"absolute", width:"200px",color:"black",fontWeight:"bold", textAlign:"center", fontSize:"20px"}}>Submit</button>
            </div>
            <div style={{fontSize:"20px", position:"absolute", top:"400px", left:"400px"}}>
                 <select className="Main-DropDown" value= {tokenSelected} onChange = {(e)=>{settokenSelected(e.target.value)}}>
                  {data && data.tokens.map((entry,index)=><option key={index} value={index}>{entry.tokenInfo.name}</option>)}
                  </select>
            </div>
        </div>
    )
}
