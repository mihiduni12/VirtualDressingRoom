import React from "react";
import { Page, Text, Document, StyleSheet, View, Image, Font  } from "@react-pdf/renderer";

Font.register({
  family: 'Spirax',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/spirax/v21/buE3poKgYNLy0F3cXktt-Csn-Q.ttf' },
    ,
    {
      src: 'https://fonts.gstatic.com/s/spirax/v21/buE3poKgYNLy0F3cXktt-Csn-Q.ttf',
      fontWeight: 'bold',
    },
    {
      src: 'https://fonts.gstatic.com/s/spirax/v21/buE3poKgYNLy0F3cXktt-Csn-Q.ttf',
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ]
});
Font.register({
  family: 'Chivo',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/chivo/v18/va9b4kzIxd1KFppkaRKvDRPJVDf_vB_ul2DSFXjQiQ.ttf' },
    ,
    
    {
      src: 'https://fonts.gstatic.com/s/chivo/v18/va9Z4kzIxd1KFrBtW-13ZHhT-jDqdFwG1GrWN33AiasJ.ttf',
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  ]
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#dddad1",
  },
  logo: {
    marginTop: 20,
    marginLeft: 80,
    padding: 5,
    position: "absolute",
    fontFamily: "Spirax",
    fontSize: 21,
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  report: {
    paddingTop: 30,
    paddingLeft: 590,
    position: "absolute",
    fontFamily: "Chivo",
    fontSize: 14,
  },
  period: {
    paddingTop: 50,
    paddingLeft: 550,
    position: "absolute",
    fontFamily: "Chivo",
    fontSize: 12,
  },

  title: {
    fontSize: 16,
    textAlign: "center",
    paddingTop: 73,
    marginBottom: 10,
    fontFamily: "Chivo",
  },
  table: {
    tableLayout: "fixed",
    marginHorizontal: "auto",
    marginTop: 10,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",// This makes the row act like a grid container
  },
  tableHeader: {
    marginLeft: "2px",
    marginBottom: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    padding: 5,
    fontSize: 12,
    width: "120px",
    height: "32px",
    backgroundColor: "#F6F193",
    color: "#000",
    textAlign: "center",
    fontFamily: "Chivo",
  },
  cell: {
    marginLeft: "2px",
    marginBottom: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    padding: 5,
    fontSize: 12,
    width: "120px",
    height: "100px",
    backgroundColor: "#FBF3D5",
  },
  image: {
    marginLeft: "2px",
    marginBottom: "2px",
    borderStyle: "solid",
    borderColor: "#000000",
    backgroundColor: "#FBF3D5",
    padding: 5,
    fontSize: 12,
    width: "170px",
    height: "100px",
    paddingHorizontal: "55px",
    paddingVertical: "10px",
  },
});

const PDFFile = ({ items }) => {
  // Function to split items into chunks of 4
  const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  // Split items into chunks of 4
  const itemChunks = chunk(items, 4);

  return (
    <Document>
      {itemChunks.map((items, index) => (
        <Page key={index} size="A4" orientation="landscape" style={styles.page}>
          <Text style={styles.logo}>CeylonVibes</Text>
          <Text style={styles.report}>Monthly Report</Text>
          <Text style={styles.period}>For the period ended {new Date().toLocaleDateString()}</Text>
          <Text style={styles.title}>Product Table</Text>
          <View style={styles.table}>
            <View style={styles.row}>
              <Text style={styles.tableHeader}>ID</Text>
              <Text style={styles.tableHeader}>UserID</Text>              
              <Text style={styles.tableHeader}>Date</Text>
              <Text style={styles.tableHeader}>Start Time</Text>
              <Text style={styles.tableHeader}>End Time</Text>
              <Text style={styles.tableHeader}>Price</Text>
            </View>
        Status
            {items.map((item) => (
              <View key={item._id} style={styles.row}>
                <Text style={styles.cell}>{item._id}</Text>
                <Text style={styles.cell}>{item.User_ID}</Text>        
                <Text style={styles.cell}>{item.date}</Text>
                <Text style={styles.cell}>{item.starttime}</Text>
                <Text style={styles.cell}>{item.endtime}</Text>
                <Text style={styles.cell}>{item.price}</Text>
              </View>
            ))}
          </View>
        </Page>
      ))}
    </Document>
  );
};


export default PDFFile;
