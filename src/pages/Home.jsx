import React, {useState} from "react";
import axios from "axios";
import fileDownload from "js-file-download";

const Home = ({language}) => {
    const [downloading, setDownloading] = useState(false)
    const handleClickDownload = (url, filename) => {
        setDownloading(true)
        console.log("descargando", downloading)
        axios.get(url, {
            responseType: 'blob',
        }).then((res) => {
            fileDownload(res.data, filename)
            setDownloading(false)
            console.log("Finalizado");
            console.log(downloading)
        })
    }

    return (
        <>
            {downloading ? (<button className="billing-button btn" disabled>...descargando</button>) : (
                <button className="billing-button btn" onClick={() => {
                    handleClickDownload('https://avatars.githubusercontent.com/u/9919?s=280&v=4', 'PruebaDescarga')
                }}>
                    Descargar
                </button>
            )}


        </>);
}
export default Home
