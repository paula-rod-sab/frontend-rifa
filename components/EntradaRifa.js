import { useWeb3Contract } from "react-moralis"
import abi from "../constants/abi.json"
import { useEffect, useState } from "react"
import { useMoralis } from "react-moralis"
import { ethers } from "ethers"

const CONTRACT_ADDRESS = "0xC53E4e86e6a73e32e64531489361640f83435d2c"

export default function EntradaRifa(){
    const { isWeb3Enabled } = useMoralis() 
    const [recogerBote, setRecogerBote] = useState("0")
    const [recogerBoteEth, setRecogerBoteEth] = useState("0")
    const [misBoletosYo, setMisBoletos] = useState("0")
    const [dirAsociacion, setDirAsociacion] = useState("0")
    const [rondaId, setRondaId] = useState("0")
    const [ultGanador, setUltimoGanador] = useState("0")
    const [precioBoletoEuro, setPrecioBoletoEuro] = useState("0")

    // Gestion compra boletos
    const [precioBoletosUno, setPrecioBoletosUno] = useState("0")
    const [precioBoletosDos, setPrecioBoletosDos] = useState("0")
    const [precioBoletosTres, setPrecioBoletosTres] = useState("0")
    const [precioBoletosCuatro, setPrecioBoletosCuatro] = useState("0")
    const [precioBoletosCinco, setPrecioBoletosCinco] = useState("0")


    // Gestion compra 1 boleto
    const { runContractFunction: compraBoletoUno } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "compraBoleto",
        msgValue: precioBoletosUno, 
        params:{
            _numBoletos: 1,
        },
    })

    const { runContractFunction: getPrecioBoletosUno } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "getPrecioBoletos",
        params: {
            _numBoletos: 1,
        },
    })

    // Gestion compra 2 boletos
    const { runContractFunction: compraBoletoDos } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "compraBoleto",
        msgValue: precioBoletosDos, 
        params:{
            _numBoletos: 2,
        },
    })

    const { runContractFunction: getPrecioBoletosDos } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "getPrecioBoletos",
        params: {
            _numBoletos: 2,
        },
    })

    // Gestion compra 3 boletos
    const { runContractFunction: compraBoletoTres } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "compraBoleto",
        msgValue: precioBoletosTres, 
        params:{
            _numBoletos: 3,
        },
    })

    const { runContractFunction: getPrecioBoletosTres } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "getPrecioBoletos",
        params: {
            _numBoletos: 3,
        },
    })

    // Gestion compra 4 boletos
    const { runContractFunction: compraBoletoCuatro } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "compraBoleto",
        msgValue: precioBoletosCuatro, 
        params:{
            _numBoletos: 4,
        },
    })

    const { runContractFunction: getPrecioBoletosCuatro } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "getPrecioBoletos",
        params: {
            _numBoletos: 4,
        },
    })

    // Gestion compra 5 boletos
    const { runContractFunction: compraBoletoCinco } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "compraBoleto",
        msgValue: precioBoletosCinco, 
        params:{
            _numBoletos: 5,
        },
    })

    const { runContractFunction: getPrecioBoletosCinco } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "getPrecioBoletos",
        params: {
            _numBoletos: 5,
        },
    })


    /* Funciones view */

    const { runContractFunction: bote } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS, 
        functionName: "bote",
        params: {},
    })

    const { runContractFunction: boteEnWei } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS, 
        functionName: "boteEnWei",
        params: {},
    })

    const { runContractFunction: misBoletos } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS, 
        functionName: "misBoletos",
        params: {},
    })

    const { runContractFunction: getDir_asociacion } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "getDir_asociacion",
        params: {},
    })

    const { runContractFunction: getRondaId } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "getRondaId",
        params: {},
    })

    const { runContractFunction: getUltimoGanador } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "getUltimoGanador",
        params: {},
    })

    const { runContractFunction: getPrecioUnBoletoEur } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "getPrecioUnBoletoEur",
        params: {},
    })


    /* Actualizar estado */

    async function updateUIValues() {
        const recogerBoteFromCall = (await bote()).toString()
        const recogerBoteEthFromCall = (await boteEnWei()).toString()
        const misBoletosFromCall = (await misBoletos()).toString()
        const dirAsociacionFromCall = (await getDir_asociacion()).toString()
        const rondaIdFromCall = (await getRondaId()).toString()
        const ultGanadorFromCall = (await getUltimoGanador()).toString()
        const precioBoletoEuroFromCall = (await getPrecioUnBoletoEur()).toString()
        setRecogerBote(recogerBoteFromCall)
        setRecogerBoteEth(recogerBoteEthFromCall)
        setMisBoletos(misBoletosFromCall)
        setDirAsociacion(dirAsociacionFromCall)
        setRondaId(rondaIdFromCall)
        setUltimoGanador(ultGanadorFromCall)
        setPrecioBoletoEuro(precioBoletoEuroFromCall)
        
        // Gestion compra boletos
        const precioBoletosUnoIntroFromCall = (await getPrecioBoletosUno()).toString()
        setPrecioBoletosUno(precioBoletosUnoIntroFromCall)
        const precioBoletosDosIntroFromCall = (await getPrecioBoletosDos()).toString()
        setPrecioBoletosDos(precioBoletosDosIntroFromCall)
        const precioBoletosTresIntroFromCall = (await getPrecioBoletosTres()).toString()
        setPrecioBoletosTres(precioBoletosTresIntroFromCall)
        const precioBoletosCuatroIntroFromCall = (await getPrecioBoletosCuatro()).toString()
        setPrecioBoletosCuatro(precioBoletosCuatroIntroFromCall)
        const precioBoletosCincoIntroFromCall = (await getPrecioBoletosCinco()).toString()
        setPrecioBoletosCinco(precioBoletosCincoIntroFromCall)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues()
        }
    }, [isWeb3Enabled])



    return (
        <div className="container">
            <div className="is-size-2 has-text-centered">Rifa benéfica</div>
            <div className="is-size-4 has-text-centered mt-3">¡Bienvenido! ¿Cuántos boletos quieres comprar?</div>
            <section className="container mt-2 has-text-centered">
                <button 
                    onClick={async () => { await compraBoletoUno() }}
                    className="button is-link is-light is-large"    
                >1</button>
                <button 
                    onClick={async () => { await compraBoletoDos() }}
                    className="button is-link is-light ml-2 is-large"  
                >2</button>
                <button 
                    onClick={async () => { await compraBoletoTres() }}
                    className="button is-link is-light ml-2 is-large"  
                >3</button>
                <button 
                    onClick={async () => { await compraBoletoCuatro() }}
                    className="button is-link is-light ml-2 is-large"
                >4</button>
                <button 
                    onClick={async () => { await compraBoletoCinco() }}
                    className="button is-link is-light ml-2 is-large"
                >5</button>
            </section>
            <section className="container mt-5">
                <div className="columns">
                    <div className="column is-half mx-6">
                        <p className="is-size-4 has-text-centered mb-5">Tablón recuento</p>
                        <div className="columns">
                            <div className="column mx-4">
                                <article class="message mt-2 is-success">    
                                    <div class="message-body">
                                        <div className="is-size-5" ><strong>Boletos vendidos: </strong></div>
                                        <div>{recogerBote} boletos</div>
                                    </div>
                                </article>
                                <article class="message mt-3 is-success">    
                                    <div class="message-body">
                                        <div className="is-size-5" ><strong>Bote: </strong></div>
                                        <div>{ethers.utils.formatUnits(recogerBoteEth, "ether")} ETH</div>
                                    </div>
                                </article>
                            </div>
                            <div className="column mx-4">
                                <article class="message mt-2 is-success">    
                                    <div class="message-body">
                                        <div className="is-size-5" ><strong>Numero de ronda: </strong></div>
                                        <div>{rondaId}</div>
                                    </div>
                                </article>
                                <article class="message mt-3 is-success">    
                                    <div class="message-body">
                                        <div className="is-size-5" ><strong>Mis boletos: </strong></div>
                                        <div>{misBoletosYo}</div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <p className="is-size-4 has-text-centered">Informacion rifa</p>
                        <div class="card mt-2">
                            <div class="card-content">
                                <div class="content">
                                    <div className="is-size-5">Precio por boleto: {precioBoletoEuro} euros</div>
                                    <div>Precio por boleto en ethers: {ethers.utils.formatUnits(precioBoletosUno, "ether")} ETH</div>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-2">
                            <div class="card-content">
                                <div class="content">
                                    <div className="is-size-5">Último ganador:</div>
                                    <a href={`https://rinkeby.etherscan.io/address/${ultGanador}`} target="_blank">{ultGanador}</a>
                                </div>
                            </div>
                        </div>
                        <div class="card mt-2">
                            <div class="card-content">
                                <div class="content">
                                    <div className="is-size-5">Dirección asociación:</div>
                                    <a href={`https://rinkeby.etherscan.io/address/${dirAsociacion}`} target="_blank">{dirAsociacion}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className="container mt-6">
                <div className="is-size-4 mb-5 is-italic">FUNDACIÓN SIEMPRE FUERTES</div>
                <div className="columns">
                    <div class="column is-three-fifths">
                        
                        <div class="content has-text-justified mr-5 ">
                            <h3>¿Quiénes somos?</h3>
                            <p>La Fundación Siempre Fuertes nace desde lo más profundo del corazón, a raíz de la historia de María Sánchez, una niña de diecisiete años que no sobrevivió al Sarcoma de Ewing. Su familia reunió fuerzas para seguir luchando contra el cáncer infantil, y poder aportar su ayuda en esta causa tan necesaria, con el objeto de algún día encontrar el tratamiento que salve a muchos niños.</p>
                            <h3>¿Qué hacemos?</h3>
                            <p>Entre nuestras funciones se encuentra el ofrecer asesoramiento médico, nutricional y deportivo, facilitar el traslado a hospitales, clínicas y derivados, del paciente y sus tutores legales o familiares. También podemos ayudarte a buscar un tratamiento óptimo o especialista para la enfermedad, valorando tu caso en particular y tus necesidades.</p>   
                            <p>Además del apoyo material, conocemos la importancia del apoyo psicológico y emocional, y por ello ofrecemos actividades lúdicas durante el ingreso y en el domicilio, durante todo el proceso de la enfermedad.</p>
                            <h3>¿Cómo lo hacemos?</h3>
                            <p>Nos encargamos de fomentar, impulsar y apoyar la investigación contra el cáncer infantil con la aportación de fondos económicos y gracias la realización de jornadas benéficas, mercadillos solidarios, donaciones y patrocinios, para contribuir de todas las maneras posibles a que el conocimiento sobre esta enfermedad llegue a la población en general.</p>
                            <p>Accede <a href={`https://fundacionsiemprefuertes.org/`} target="_blank">aquí</a> para obtener más información.</p>
                        </div>
                    </div>
                    <div class="column">
                        <img src="https://fundacionsiemprefuertes.org/wp-content/uploads/2022/03/imagen-maria_FSF.png" />
                        <img src="https://fundacionsiemprefuertes.org/wp-content/uploads/2022/02/imagen_como-lo-hacemos.png" />
                    </div>
                </div>
                
            </section>
            
        </div>
    )

}