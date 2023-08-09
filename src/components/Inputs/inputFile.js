import './inputfile.css';
import { useState } from 'react';
import { ButtonUpload } from '../Buttons/buttonUpload';
import { FadeLoader } from 'react-spinners';
import { loadingContainerStyle as spinnerStyle } from '../Spinners/spinner';
import { handleUploadFile } from './functions/handleUploadFile';


export function InputFile() {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(false);


    return (
        <>
            <div css={spinnerStyle} className='loading'>
                <FadeLoader color="#0f6fb8" loading={loading} size={30} placeholder='Loading' margin={10} />
            </div>

            {!loading && (
                <>
                    <label htmlFor="fileInput" className="custom-file-upload">
                        Choose File
                    </label>
                    <input type='file' onChange={importFile} id="fileInput" />
                </>
            )}

            {list.length > 0 && !loading && (
                <>
                    <p>FILE LOADED SUCCESSFULY!</p>
                    <ButtonUpload list={list} />
                </>
            )
            }
        </>
    )

    async function importFile(event) {
        handleUploadFile(event, setList, setLoading);
    }
}