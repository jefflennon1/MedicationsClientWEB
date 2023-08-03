
import './App.css';
import { useState } from 'react';
import * as XLSX from 'xlsx/xlsx.mjs';


function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <p>Upload your file where</p>
        <input type='file'
          onChange={handleUploadFile}
        />

        <input type='button'
          value="CLICK TO UPLOAD"
          onClick={() => postingList(list)} />

        {list && (
          list.map(medicamento => (
            <div className='list' key={medicamento.REGISTRO}>
              <p className='item'> {medicamento.PRODUTO}</p>
              <p className='item'> {medicamento['PRINCÍPIO ATIVO']}</p>
              <p className='item'> {medicamento['LABORATÓRIO']}</p>
            </div>
          ))
        )}
      </header>
    </div>
  );

  function handleUploadFile(event) {
    if (event.target.files) {
      var list;
      const file = event.target.files[0];

      var fileReader = new FileReader();

      fileReader.onload = (event) => {
        const data = event.target.result;

        const workbook = XLSX.read(data, { type: "binary" });

        workbook.SheetNames.forEach(sheet => {
          const rowObject = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheet]
          );

          rowObject.splice(0, 51); // remove to desnecessary text

          var colunmNames = rowObject.shift(); // get colunm names

          list = generateFormattedList(colunmNames, rowObject);

        })

        if (list) {
          setList(list);
        }
      };

      fileReader.readAsArrayBuffer(file);

    }
  }

  function generateFormattedList(bruteColunmNames, bruteArray) {
    const finalList = [];
    const colunmsNotFormated = generateConlunms(bruteColunmNames);
    const colunms = fomatedColunms(colunmsNotFormated);


    bruteArray.map(object => {
      const medicamento = generateConlunms(object);

      const maps = [];

      for (var i = 0; i <= colunms.length; i++) {
        const entrie = [colunms[i], medicamento[i]];
        maps.push(entrie);
      };


      const entries = new Map(maps);
      const obj = Object.fromEntries(entries);
      finalList.push(obj);
    });

    return finalList;
  }

  function generateConlunms(bruteData) {
    return [
      bruteData["Secretaria Executiva - CMED"],
      // bruteData.__EMPTY,
      bruteData.__EMPTY_1,
      //  bruteData.__EMPTY_2,
      bruteData.__EMPTY_3,
      /*  bruteData.__EMPTY_4,
       bruteData.__EMPTY_5,
       bruteData.__EMPTY_6,*/
      bruteData.__EMPTY_7,
      bruteData.__EMPTY_8,
      bruteData.__EMPTY_9,
      /* bruteData.__EMPTY_10,
       bruteData.__EMPTY_11,
       bruteData.__EMPTY_12,
       bruteData.__EMPTY_13,
       bruteData.__EMPTY_14,
       bruteData.__EMPTY_15,
       bruteData.__EMPTY_16,
       bruteData.__EMPTY_17,
       bruteData.__EMPTY_18,
       bruteData.__EMPTY_19,
       bruteData.__EMPTY_20,
       bruteData.__EMPTY_21,
       bruteData.__EMPTY_22,
       bruteData.__EMPTY_23,
       bruteData.__EMPTY_24,
       bruteData.__EMPTY_25,
       bruteData.__EMPTY_26,
       bruteData.__EMPTY_27,
       bruteData.__EMPTY_28,
       bruteData.__EMPTY_29,
       bruteData.__EMPTY_30,
       bruteData.__EMPTY_31,
       bruteData.__EMPTY_32,
       bruteData.__EMPTY_33,
       bruteData.__EMPTY_34,
       bruteData.__EMPTY_35,
       bruteData.__EMPTY_36,
       bruteData.__EMPTY_37,
       bruteData.__EMPTY_38,
       bruteData.__EMPTY_39,
       bruteData.__EMPTY_40,
       bruteData.__EMPTY_41,
       bruteData.__EMPTY_42,
       bruteData.__EMPTY_43,*/
      bruteData.__EMPTY_44,
      bruteData.__EMPTY_45,
    ]
  }

  async function postingList(list) {
    const url = 'http://localhost:8080/medicaments/import'
    const spliced = list.splice(0, 50);

    fetch(url, {
      method: 'POST',
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(spliced),
    })
  }


  function fomatedColunms(colunmsNotFormated) {
    return colunmsNotFormated.map(item => {
      return item
        .replaceAll("Ã", "A")
        .replaceAll("Ç", "C")
        .replaceAll(" ", "_")
        .replaceAll("Í", "I")
        .replaceAll("Ê", "E")
        .replaceAll("Ó", "O");
    })
  }
}

export default App;
