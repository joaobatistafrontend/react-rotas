import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProdutoDetalhado() {
    // pegadon o http://localhost:5173/produto/1
    const {id} = useParams()
    const [produto, setProdutos] = useState([])
    useEffect(() => {
        // passanfo o parms dentro da url
        fetch(`https://fakestoreapi.com/products/${id}`)
        //fazendo a  requisicao get 
        
          .then((response) => response.json())
          //aqui eu pego as informalçoes e tranformo em json
          .then((data) => setProdutos(data))
          //pegnado os dados e salvando dentro de uma variavel 
      },[])


    return (
        <div className="">
            <h1>{produto.title}</h1>

        </div>
    );
}
