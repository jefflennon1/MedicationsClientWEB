export function generateFormattedList(bruteColunmNames, bruteArray) {
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
