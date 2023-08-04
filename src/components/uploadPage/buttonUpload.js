
export function ButtonUpload(list) {
    return (
        <>
            <input type='button'
                value="CLICK TO UPLOAD"
                onClick={() => postingList(list)} />
        </>
    )

    async function postingList(list) {
        const url = 'http://localhost:8080/medicaments/importXls';
        const medicaments = JSON.stringify(list);

        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Access-Control-Allow-Origin": "*",
            },
            body: medicaments
        });
    }
}