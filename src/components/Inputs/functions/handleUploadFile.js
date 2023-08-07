import * as XLSX from 'xlsx/xlsx.mjs';
import { generateFormattedList } from './generateFormattedList';


export async function handleUploadFile(event, setList, setLoading) {

    event.preventDefault();
    setLoading(true);

    if (event.target.files) {
        var list;
        const file = event.target.files[0];

        var fileReader = new FileReader();

        onload(list, fileReader, setList, setLoading);

        fileReader.readAsArrayBuffer(file);
    }
}

function onload(list, fileReader, setList, setLoading) {
    fileReader.onload = function (event) {
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
            setLoading(false);
        }
    };
}