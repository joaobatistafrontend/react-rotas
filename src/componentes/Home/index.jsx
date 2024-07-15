import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home(){
    const [produtos, setProdutos] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        //fazendo a  requisicao get 
        
          .then((response) => response.json())
          //aqui eu pego as informalçoes e tranformo em json
          .then((data) => setProdutos(data))
          //pegnado os dados e salvando dentro de uma variavel 
      },[])
    
    return(
        <div className="bg-red-700">
            <h1>Produtos</h1>
            {produtos.map((produto)=>(
            <div key={produto.id}>
                <h2>{produto.title}</h2>
                <img src={produto.image} alt={produto.title} />
                <p>{produto.price}</p>
                {/* a rota de cada produto  */}
                <Link to={`/produto/${produto.id}`}>
                    <button className='bg-blue-600'>Detalhes</button>
                </Link>
            
            </div>
            ))}
        </div>
    )
}