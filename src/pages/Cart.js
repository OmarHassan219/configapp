import * as React  from 'react';
import  {useEffect,useState} from 'react'
import Table from '@mui/joy/Table';
import { CSVLink } from "react-csv";
// import Paper from "@material-ui/core/Paper";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
import {SiMicrosoftexcel} from "react-icons/si"
// import {AiFillCloseCircle} from "react-icons/ai"
// import {MdModeEdit} from "react-icons/md"
import EditElevator from '../components/EditElevator';
import EditComponent from '../components/EditComponent';
import jsPDF from "jspdf";
import "jspdf-autotable";
import img from '../assets/parallel.jpg'
import elevimg from '../assets/elevator.jpg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import { PDFDownloadLink } from '@react-pdf/renderer';
import DownloadElevator from '../components/DownloadElevator';
import DownloadEscalator from '../components/DownloadEscalator';




const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});



const SimpleTable= ({cart,setcart}) => {
    
  const ref = React.createRef();


    const [edit, setedit] = useState(false)
    const [toBeEdit , settoBeEdit] = useState({})
    const [Comparison , setComparison] = useState({})
    const [editesc, seteditesc] = useState()
    // const [exportPDF, setexportPDF] = useState()
    

   const handlecancel =  ((item) => {

   let updatedcart = cart.filter(cartitem => {
  return cartitem !== item
   })

 setcart(updatedcart)
localStorage.setItem('cart' , JSON.stringify(updatedcart))



   })



const exportPDF = () => {



  // ReactPDF.render(<Cart/>, `example.pdf`);

    // const unit = "pt";
    // const size = "A4"; // Use A1, A2, A3 or A4
    // const orientation = "portrait"; // portrait or landscape

    // const marginLeft = 40;
    // const doc = new jsPDF(orientation, unit, size);

    // doc.setFontSize(15);

    // const title = "Cart Product";
    // const headers = [["Order No." , "Type", "Motor" , "Height" , "Width" , "Speed" , "Power"]];

    // const data = escalator.map((item , i)=> [i+1 , item.type, item.motor, item.height , item.width , item.speed, item.power]);

    // let content = {
    //   startY: 50,
    //   head: headers,
    //   body: data
    // };

    // doc.text(title, marginLeft, 40);
    // doc.autoTable(content);
    // doc.save("Cart.pdf")
  }












let headers = [
    
  { label: "type", key: "type" },
  { label: "Motor", key: "motor" },
  { label: "Height", key: "height" },
  { label: "Width", key: "width" },
  { label: "Speed", key: "speed" },
  { label: "Power", key: "power" },
 
];
let headerelev = [
  { label: 'Name', key: 'name' },
  { label: 'Cabin Type', key: 'Cabin Type' },
  { label: 'Horizontal Distance (In ft)', key: 'Horizontal Distance (In ft)' },
  { label: 'Vertical Distance (In ft)', key: 'Vertical Distance (In ft)' },
  { label: 'Number of Stops', key: 'Number of Stops' },
  { label: 'Cabin Style', key: 'Cabin Style' },
  { label: 'Cabin floor Color', key: 'Cabin floor Color' },
  { label: 'Door Color', key: 'Door Color' },
  { label: 'Door Styles', key: 'Door Styles' },
];



    let escalator = cart.filter(item => {
    
    return item.type 

    })

    let elevator = cart.filter(item => {
    
    return item.name

    })

    const handleEditing = (item,i) =>{


  settoBeEdit(item)
  setComparison(item)
setedit(true)

    }

const handleEdit = () =>{
const updatedCartItems = cart.map((cartProduct) => {
        
    

          if(cartProduct.id === toBeEdit.id){
            return toBeEdit
        }  else return cartProduct
    })
    setcart(updatedCartItems)
    localStorage.setItem('cart' , JSON.stringify(updatedCartItems))
    setedit(false)
}
const handleedit = (item) => {

  seteditesc(item)
}
    


const handleesctables=(e) => {
  document.querySelector('.esc-tables .tables-container').classList.toggle('active')
  document.querySelector('.exportescbutton').classList.toggle('active')

}
const handleelevtables =(e) => {
  document.querySelector('.elev-tables .tables-container').classList.toggle('active')
  document.querySelector('.exportelevbutton').classList.toggle('active')

}






// const elevtable = () => {



// <div className='tables-container'>


// {
//                 elevator.map((item , i) => (
//                   <div style={{display:"flex" , flexDirection:'column'}}>

// <Document>
//     <Page size="A4" style={styles.page}>

//       <Table  >
//     {/* <caption  style={{color:'white',fontWeight: 'bold' , backgroundColor:"#18227c"}}
//     >Product Cart (Escalator)</caption> */}
//         <tr>

//         <th style={{color:'white' , backgroundColor:'#18227c' ,textAlign:"center" , border:'none'}}>Feature Name</th>
//         <th style={{color:'white' , backgroundColor:'#18227c' ,textAlign:"center" , border:'none' }}>Feature Value</th>
//         <th style={{color:'white' , backgroundColor:'#18227c' ,textAlign:"center" , border:'none'}}>Price</th>
//         </tr>

//         <tr>
//         <th >Name</th>
//         <td >{item.name}</td>
//         <td >price</td>
//       </tr>
//         <tr>
//         <th>Cabin Type</th>
//         <td >{item['Cabin Type']}</td>
//         <td >price</td>
//       </tr>
//         <tr>
//         <th>Horizontal Distance (In ft)</th>
//         <td >{item['Horizontal Distance (In ft)']}</td>
//         <td >price</td>
//       </tr>
//         <tr>
//         <th>Vertical Distance (In ft</th>
//         <td >{item['Vertical Distance (In ft)']}</td>
//         <td >price</td>
//       </tr>
//         <tr>
//         <th>Number of Stops</th>
//         <td >{item['Number of Stops']}</td>
//         <td >price</td>
//       </tr>
//         <tr>
//         <th>Cabin Style</th>
//         <td >{item['Cabin Style']}</td>
//         <td >price</td>
//       </tr>
//         <tr>
//         <th>Cabin floor Color</th>
//         <td >{item['Cabin floor Color'] ? item['Cabin floor Color'] : 'Default:white'}</td>
//         <td >price</td>
//       </tr>
//         <tr>
//         <th>Door Color</th>
//         <td >{item['Door Color'] ? item['Door Color'] : 'Default:white'}</td>
//         <td >price</td>
//       </tr>
//         <tr>
//         <th>Door Styles</th>
//         <td >{item['Door Styles']}</td>
//         <td >price</td>
//       </tr>
      



       
                
              
      
//       </Table>
//       </Page>
//   </Document>




// <div style={{display:"flex" , alignItems:'center' , marginTop:'10px' , justifyContent:"space-around"}}>

//  <button onClick={() => handlecancel(item)} className='removefrom' >Delete</button>
//  <button onClick={() => handleEditing(item)}  className='edit' >Edit</button>
//  </div>  
//  </div>  
// )) }
// </div>








// }





// const handlehidebuttons = () => {


// document.querySelectorAll('.removefrom').forEach(item => {


//   item.style.visibility = 'hidden'



// })
// document.querySelectorAll('.edit').forEach(item => {


//   item.style.visibility = 'hidden'



// })

// }
// const handleshowbuttons = () => {


// document.querySelectorAll('.removefrom').forEach(item => {


//   item.style.visibility = 'visible'




// })
// document.querySelectorAll('.edit').forEach(item => {


//   item.style.visibility = 'visible'




// })

// }






















  return (
    <>
    { editesc  &&   <EditComponent  item={editesc} cart={cart} setcart={setcart} seteditesc={seteditesc}   /> }
    {edit && <EditElevator handleEdit={handleEdit} toBeEdit={toBeEdit} settoBeEdit={settoBeEdit} setedit={setedit} edit={edit}/>}
      <div className='cart'>



     <div className='esc-tables'>

<div onClick={(e) => handleesctables(e)} className='esc-bar'>
<img src={img} style={{width:'100px'}} alt='escalator'/>
<h3>Escalators</h3>
<p style={{marginRight:'20px'}}>{escalator.length ? escalator.length + ' Items' : "No Items to show"}</p>
<ExpandMoreIcon/>
</div>

      <div className='tables-container'>
      {
        escalator.map((item , i) => (
                  <div style={{display:"flex" , flexDirection:'column'}}>






      <Table >
    {/* <caption  style={{color:'white',fontWeight: 'bold' , backgroundColor:"#18227c"}}
    >Product Cart (Escalator)</caption> */}
        <tr>

        <th style={{color:'white' , backgroundColor:'#18227c' ,textAlign:"center" , border:'none'}}>Feature Name</th>
        <th style={{color:'white' , backgroundColor:'#18227c' ,textAlign:"center" , border:'none' }}>Feature Value</th>
        <th style={{color:'white' , backgroundColor:'#18227c' ,textAlign:"center" , border:'none'}}>Price</th>
        </tr>

        <tr>
        <th >Type</th>
        <td >{item.type}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Height</th>
        <td >{item.height}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Width</th>
        <td >{item.width}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Speed</th>
        <td >{item.speed}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Power</th>
        <td >{item.power}</td>
        <td >price</td>
      </tr>
      



       
                
              
      
      </Table>
<div style={{display:"flex" , alignItems:'center' , marginTop:'10px' , justifyContent:"space-around"}}>
<button onClick={() => handlecancel(item)} className='removefrom' >Delete</button>
<button onClick={() => handleedit(item)}  className='edit' >Edit</button>
</div>

      </div>  )) }
</div>

  
    {escalator.length >= 1 && 
            <div className='exportescbutton'>
 <CSVLink data={escalator}   headers={headers} className='excel' >
  <SiMicrosoftexcel size={20}/> Export Excel sheet
</CSVLink>



<div className='pdf'>
    <PDFDownloadLink document={<DownloadEscalator escalator={escalator} />} fileName="Escalator-Cart.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Download now!'
    }
  </PDFDownloadLink>
</div>

   </div>
}

</div>











<div className='elev-tables'>


<div onClick={(e) => handleelevtables(e)} className='elev-bar'>
<img src={elevimg} style={{width:'100px'}} alt='elevator'/>
<h3>Elevators</h3>
<p style={{marginRight:'20px'}}>{elevator.length ? elevator.length + ' Items' : "No Items to show"} </p>

<ExpandMoreIcon/>
</div>

<div  ref={ref} className='tables-container'>


{
                elevator.map((item , i) => (
                  <div  style={{display:"flex" , flexDirection:'column'}}>



      <Table  >
    {/* <caption  style={{color:'white',fontWeight: 'bold' , backgroundColor:"#18227c"}}
    >Product Cart (Escalator)</caption> */}
        <tr>

        <th style={{color:'white' , backgroundColor:'#18227c' ,textAlign:"center" , border:'none'}}>Feature Name</th>
        <th style={{color:'white' , backgroundColor:'#18227c' ,textAlign:"center" , border:'none' }}>Feature Value</th>
        <th style={{color:'white' , backgroundColor:'#18227c' ,textAlign:"center" , border:'none'}}>Price</th>
        </tr>

        <tr>
        <th >Name</th>
        <td >{item.name}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Cabin Type</th>
        <td >{item['Cabin Type']}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Horizontal Distance (In ft)</th>
        <td >{item['Horizontal Distance (In ft)']}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Vertical Distance (In ft</th>
        <td >{item['Vertical Distance (In ft)']}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Number of Stops</th>
        <td >{item['Number of Stops']}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Cabin Style</th>
        <td >{item['Cabin Style']}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Cabin floor Color</th>
        <td >{item['Cabin floor Color'] ? item['Cabin floor Color'] : 'Default:white'}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Door Color</th>
        <td >{item['Door Color'] ? item['Door Color'] : 'Default:white'}</td>
        <td >price</td>
      </tr>
        <tr>
        <th>Door Styles</th>
        <td >{item['Door Styles']}</td>
        <td >price</td>
      </tr>
      



       
                
              
      
      </Table>
     




<div style={{display:"flex" , alignItems:'center' , marginTop:'10px' , justifyContent:"space-around"}}>

 <button onClick={() => handlecancel(item)} className='removefrom' >Delete</button>
 <button onClick={() => handleEditing(item)}  className='edit' >Edit</button>
 </div>  
 </div>  
)) }
</div>


{elevator.length >= 1 &&    
<div className='exportelevbutton'>
      <CSVLink data={elevator}   headers={headerelev} className='excel' >
 <SiMicrosoftexcel size={20}/> Export Excel sheet
</CSVLink>



<div className='pdf'>
    <PDFDownloadLink document={<DownloadElevator elevator={elevator}/>} fileName="Elevator-cart.pdf">
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : 'Export PDF'
    }
  </PDFDownloadLink>
</div>



</div>

}

 
  


</div>
    </div>
    </>
  );
  }




export default SimpleTable;



                // <TableCell onClick={() => handlecancel(item)} className='removefrom' >{<AiFillCloseCircle size={20} color="black"/>}</TableCell>
                // <TableCell onClick={()=>handleEditing(item,i)} className='edit' ><MdModeEdit size={20}/></TableCell>
            