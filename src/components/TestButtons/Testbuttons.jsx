import React ,{useRef, useState} from 'react'
import "./Testbuttons.scss"
import axios from 'axios'
import fileDownload from "js-file-download"
const url = "https://blocking-web-extn.vercel.app/api/routes";
// const url = "http://localhost:8000/api/routes";

  let web_set = new Set();
  let boolArr = [false,false,false,false,false,false,false,false,false];



function Testbuttons() {
  
 const [classname0,setClassname0] = useState("white");
 const [classname1,setClassname1] = useState("white");
 const [classname2,setClassname2] = useState("white");
 const [classname3,setClassname3] = useState("white");
 const [classname4,setClassname4] = useState("white");
 const [classname5,setClassname5] = useState("white");
 const [classname6,setClassname6] = useState("white");
 const [classname7,setClassname7] = useState("white");
 const [classname8,setClassname8] = useState("white");

 const [downloadMessage,setDownloadMessage] = useState("Create and Download File") 
  const websiteAdd = (i,element) =>{
    if(boolArr[i] === false){
      web_set.add(element);
      console.log(web_set);
      console.log(boolArr);
      boolArr[i] = true;
    }
    else{
      web_set.delete(element);
      boolArr[i] = false;
      console.log(web_set)
    }
  }

  function buttonUpdate(i) {

    switch(i) {
      case 0:
        if(classname0 === "white"){
          setClassname0("orange")
        }
        else
          setClassname0("white")
        break;

        case 1:
        if(classname1 === "white"){
          setClassname1("orange")
        }
        else
          setClassname1("white")
        break;

      case 2:
        if(classname2 === "white")
          setClassname2("orange")
        else
          setClassname2("white")
        break;
      case 3:
        if(classname3 === "white")
        setClassname3("orange")
      else
        setClassname3("white")
        break;

      case 4:
        if(classname4 === "white")
        setClassname4("orange")
      else
        setClassname4("white")
        break;

      case 5:
        if(classname5 === "white")
        setClassname5("orange")
      else
        setClassname5("white")
        break;

      case 6:
        if(classname6 === "white")
        setClassname6("orange")
      else
        setClassname6("white")
        break;

      case 7:
        if(classname7 === "white")
        setClassname7("orange")
      else
        setClassname7("white")
        break;

      case 8:
        if(classname8 === "white")
        setClassname8("orange")
      else
        setClassname8("white")
        break;
   
      default:
        console.log("error")
    }

   }

   const add_web = (i,element) =>{
    websiteAdd(i,element);
    buttonUpdate(i);
  }

  

  let inputText = useRef(null);  // provided reference to the input tag in the component

  const addCustomUrl = () =>{
    if(inputText.current.value.includes(".")){
      let url = inputText.current.value;
      let urlArr = url.split("/")
      
      let websiteArr = urlArr[2].split(".")

      if(websiteArr.length === 2){
        web_set.add(websiteArr[0]);
      }
      else 
      web_set.add(websiteArr[1]);
     
      inputText.current.value = "Input Received"
      setTimeout(() => {
        inputText.current.value = ""
       
    }, 2000);
    }
    else{
     web_set.add(inputText.current.value);
     inputText.current.value = "Input Received"
     setTimeout(() => {
      inputText.current.value = ""
      
   }, 2000);
    }
  }


  // function to handle post and get request to and from the backend
  const on_createfile = async (e) => {
    let arr =Array.from(web_set)
    e.preventDefault();
  
    try {
      const resp = await axios.post(url,{web_arr:arr});
      console.log(resp.data);
      web_set.clear();
      setDownloadMessage("Your download will start shortly")

      setTimeout(() => {
        try {
     
          axios.get(url, {
            responseType: 'blob',
          })
          .then((res) => {
            fileDownload(res.data, "download.zip")
          })
        }
       catch (error) {
        console.log("error")
      }
       
      },3000)

      setTimeout(() => {
        setDownloadMessage("Create and Download File")
      }, 3000);
    } catch (error) {
      console.log(error.response);
    }

    setClassname0("white");
    setClassname1("white");
    setClassname2("white");
    setClassname3("white");
    setClassname4("white");
    setClassname5("white");
    setClassname6("white");
    setClassname7("white");
    setClassname8("white");
   
  };

  return (
    <div className='button_page' style={{marginTop:"30px"}} id = "download">
      <div id="button_page_heading">
        <h1 id="buttons_heading">Select Websites to Block</h1>
      </div>
        <div className='buttons'>
        
            <button onClick={() => add_web(0,"youtube")}><p className = {classname0} id="you">Youtube</p></button>
            <button onClick={() => add_web(1,"facebook")}><p className = {classname1} id="face">Facebook</p></button>
            <button onClick={() => add_web(2,"discord")}><p className = {classname2} id="dis">Discord</p></button>
            <button onClick={() => add_web(3,"instagram")}><p className = {classname3} id="insta">Instagram</p></button>
            <button onClick={() => add_web(4,"primevideo")}><p className = {classname4} id="prime">Prime Video</p></button>
            <button onClick={() => add_web(5,"hotstar")}><p className = {classname5} id="hot">Hotstar</p></button>
            <button onClick={() => add_web(6,"netflix")}><p className = {classname6} id="net">Netflix</p></button>
            <button onClick={() => add_web(7,"voot")}><p className = {classname7} id="voo">Voot</p></button>
            <button onClick={() => add_web(8,"sonyliv")}><p className = {classname8} id="sony">Sony Liv</p></button>
            
          </div>
          <div className='custom_url_div'>
          <input type="text" id="custom_url" ref = {inputText} placeholder='Enter website name or url' />
              <button onClick={addCustomUrl} id="custom_url_add_button">Add Website</button>
        </div>
            <div className='candd ' style={{marginRight:"auto",marginLeft:"auto"}}>
              <button onClick={on_createfile} id="create_download">{downloadMessage}</button>
            </div>
    </div>
  )
}
export default Testbuttons