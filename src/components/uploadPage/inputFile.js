import * as XLSX from 'xlsx/xlsx.mjs';
import { useState } from 'react';
import { ButtonUpload } from './buttonUpload';
import './styles/inputfile.css';
import { PacmanLoader } from 'react-spinners';
import { loadingContainerStyle as spinnerStyle } from './styles/spinner';


export function InputFile() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);


    return (
        <>
            <div css={spinnerStyle} className='loading'>
                <PacmanLoader color="#0f6fb8" loading={loading} size={30} placeholder='Loading' />

            </div>

            {!loading && (
                <>
                    <label htmlFor="fileInput" className="custom-file-upload">
                        Choose File
                    </label>
                    <input type='file' onChange={handleUploadFile} id="fileInput" />
                </>
            )}

            {list.length > 0 && !loading && (
                <>
                    <p>FILE LOADED SUCCESSFULY!</p>
                    <ButtonUpload />
                </>
            )
            }
        </>
    )


    function handleUploadFile(event) {
        event.preventDefault();
        setLoading(true);

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
                    setLoading(false)
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

    function fomatedColunms(colunmsNotFormated) {
        return colunmsNotFormated.map(item => {
            if (item)
                return item
                    .replaceAll("Ã", "A")
                    .replaceAll("Ç", "C")
                    .replaceAll(" ", "_")
                    .replaceAll("Í", "I")
                    .replaceAll("Ê", "E")
                    .replaceAll("Ó", "O")
                    .replaceAll("-", "");
        })
    }


}