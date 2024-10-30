import { useState, useCallback , useEffect,useRef } from "react";


function App() {
    const [length, setlength] = useState(8)
    const [numberallowed, setnumberallowed] = useState(false)
    const [characterallowed, setcharacterallowed] = useState(false)
    const [password,setpassword] = useState("")

    const passwordRef = useRef(null)

    const passwordgen = useCallback(()=>{
   let pass =""
   let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
   if (numberallowed) str += "0123456789"
   if (characterallowed) str += "!@#$%^&*-_+=[]{}~`"

   for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() *  str.length+1)
    pass += str.charAt(char)

   }
   setpassword(pass)

    }, [length,numberallowed,characterallowed,setpassword] )
    const copyPasswordToClipboard = useCallback(() => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 999);
      window.navigator.clipboard.writeText(password)
    }, [password])

    
    useEffect(()=>{
      passwordgen()
    },[length,numberallowed,characterallowed,passwordgen])
  return (
    
      <div className="w-full max-w-md max-auto shadow-md rounded-lg py-3 px-4 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">PASSWORD GENRATOR</h1>

        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="PASSWORD"
            readOnly
            ref={passwordRef}
          />

          <button 
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            {" "}
            COPY
          </button>

          
        </div>
        <div className="flex text-sm gap-x-2">
          <div className='flex items-center gap-x-1'>
            <input 
            
            type="range"
            min={8}
            max={50}
            value={length} 
            className="cursor-pointer"   
            onChange={(e)=>{setlength(e.target.value)}}        
            />

            <lable>Length:{length}</lable>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox"
            defaultChecked={numberallowed}
            id="numberInput"
            onChange={() => {
              setnumberallowed((prev) => !prev);
            }}
            
            />
             <lable htmlFor="numberInput">Numbers</lable>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={characterallowed}
              id="characterInput"
              onChange={() => {
                setcharacterallowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    
  );
}

export default App;
