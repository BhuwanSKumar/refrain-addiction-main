const express = require("express");
const UserDb = require("../mongo1");
const router = express.Router();
const Model = require("../mongo1")
var fs = require('fs')
const admz = require('adm-zip')
var to_zip = fs.readdirSync(__dirname+'/'+'Extention')



router.get('/',(req,res) => {
   
    // res.sendFile()

    var zp = new admz();
    for(var k=0 ; k<to_zip.length ; k++){
        zp.addLocalFile(__dirname+'/'+'Extention'+'/'+to_zip[k])
    }


    const file_after_download = 'downloaded_file.zip';
  
  
    const data = zp.toBuffer();

  
    res.set('Content-Type','application/octet-stream');
    res.set('Content-Disposition',`attachment; filename=${file_after_download}`);
    res.set('Content-Length',data.length);
    res.send(data);


    
})

router.post('/',async (req,res) => {
   
    try {
        console.log(req.body);
        const data_obj = Model(req.body);
        data_obj.save();
        res.status(201).send(req.body);

        //constructing string 1
        let data_arr = data_obj.web_arr;
        let str1 = "let arr = [";
        for(ele of data_arr)
        {
            str1+='"' + ele +'"'+",";
           
        }
        str1 = str1.slice(0, -1)
        str1+="]"
       
        // constructing string 2
        let str2 = `
        function makeHTML(){
            return \`
            <section class="page_404">
            <div class="container">
                <div class="row">	
                <div class="col-sm-12 ">
                <div class="col-sm-10 col-sm-offset-1  text-center">
                <div class="four_zero_four_bg">
                    <h1 class="text-center ">404</h1>
                
                
                </div>
                
                <div class="contant_box_404">
                <h3 class="h2">
                Look like you're lost
                </h3>
                
                <p>The page you are looking for is not available!</p>
                
                <a href="" class="link_404">Go to Home</a>
            </div>
                </div>
                </div>
                </div>
            </div>
        </section>
            \`
        }
        
        function makeCSS (){
            return \`
            <style>
          
        .page_404{ padding:40px 0; background:#fff; font-family: 'Arvo', serif;
        }
        
        .page_404  img{ width:100%;}
        
        .four_zero_four_bg{
         
         background-image: url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif);
            height: 400px;
            background-position: center;
         }
         
         
         .four_zero_four_bg h1{
         font-size:80px;
         }
         
          .four_zero_four_bg h3{
                     font-size:80px;
                     }
                     
                     .link_404{			 
            color: #fff!important;
            padding: 10px 20px;
            background: #39ac31;
            margin: 20px 0;
            display: inline-block;}
            .contant_box_404{ margin-top:-50px;}
            </style>; 
            \`
        };
        
        
        arr.forEach((ele) => {
            if(window.location.hostname.includes(ele))
            {
                document.body.innerHTML = makeHTML();
                document.head.innerHTML = makeCSS();
            }
        })`

        // constructing string 3
        let str3 = str1+"\n"+str2;
        console.log(str3)
     
        var data = fs.writeFile('./routes/Extention/main.js',str3,'utf8',function(error){
            if(error) throw error;
            console.log('file written')
        });

    } catch (error) {
        console.log("error")
    }
   
})

module.exports = router