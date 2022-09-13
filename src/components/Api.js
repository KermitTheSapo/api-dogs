import React, {useState} from "react";
import * as S from "../styles/style.js"
import axios from "axios";

export default function Api() {
    const [data, setData] = useState(null)

    const API = "https://dog.ceo/api/breeds/image/random";

    const DogsApi = () => {
        axios.get(API).then((resposta) => {
            setData(resposta.data.message);
        }).catch((error) => {
        console.log("Error", error);
        });
      };

    return(
        <S.Div>
            <h1>Api Dogs</h1>
            <S.Img src={data} alt="dog" />
            <button onClick={() => {DogsApi()}}>Adote um cachorrinho</button>
        </S.Div>
    )
}