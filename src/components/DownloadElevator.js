import React from 'react'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
import Pdf from "react-to-pdf";
import Table from '@mui/joy/Table';
import ReactDOM from "react-dom";
import { PDFDownloadLink } from '@react-pdf/renderer';






const styles = StyleSheet.create({
  
    table: { 
      display: "table", 
      borderStyle: "solid", 
      borderRightWidth: 0, 
      borderBottomWidth: 0 ,
      borderTopWidth: 0 ,
      borderLeftWidth: 0 ,
      width:'auto',
      margin:'30px',
      backgroundColor:'white',
      fontSize:'20px',
      fontWeight:'bold'
      
    }, 
    tableRow: { 
      margin: "auto", 
      flexDirection: "row" 
    }, 
    tableRow1: { 
      margin: "auto", 
      flexDirection: "row",
      backgroundColor:"#18227c",
      color:"white"
    }, 
    tableCol: { 
      width: "25%", 
      borderStyle: "solid", 
      borderWidth: 1, 
      
    }, 
    tableCell: { 
      margin: "auto", 
      marginTop: 5, 
      fontSize: 10 
    }
  });
  













const DownloadElevator = ({elevator}) => {
return(
<Document>
   <Page style={styles.body}>
     {elevator.map(item => (

<View style={styles.table}> 
        <View style={styles.tableRow1}> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Feature Name</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Feature Value</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Price</Text> 
          </View> 
        </View>
        <View style={styles.tableRow}> 
        
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Model</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{item.name} </Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>$</Text> 
          </View>
          
        </View> 
        <View style={styles.tableRow}> 

          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Cabin Type</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{item['Cabin Type']} </Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>$</Text> 
          </View>
          
        </View> 
        <View style={styles.tableRow}> 

          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Horizontal Distance (In ft)</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{item['Horizontal Distance (In ft)']}</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>$</Text> 
          </View>
          
        </View> 
        <View style={styles.tableRow}> 

          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Vertical Distance (In ft)</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{item['Vertical Distance (In ft)']}</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>$</Text> 
          </View>
          
        </View> 
        <View style={styles.tableRow}> 

          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Number of Stops</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{item['Number of Stops']}</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>$</Text> 
          </View>
          
        </View> 
        <View style={styles.tableRow}> 

          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Cabin Style</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{item['Cabin Style']}</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>$</Text> 
          </View>
          
        </View> 
        <View style={styles.tableRow}> 

          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Cabin floor Color</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{item['Cabin floor Color'] ? item['Cabin floor Color'] : 'Default:white'}</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>$</Text> 
          </View>
          
        </View> 
        <View style={styles.tableRow}> 

          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Door Color</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{item['Door Color'] ? item['Door Color'] : 'Default:white'}</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>$</Text> 
          </View>
          
        </View> 
        <View style={styles.tableRow}> 

          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>Door Styles</Text> 
          </View> 
          <View style={styles.tableCol}> 
            <Text style={styles.tableCell}>{item['Door Styles']}</Text> 
          </View> 
          <View style={styles.tableCol}>
            <Text style={styles.tableCell}>$</Text> 
          </View>
          
        </View> 
      </View>



))}
      
    </Page>
  </Document>

)














  
}

export default DownloadElevator