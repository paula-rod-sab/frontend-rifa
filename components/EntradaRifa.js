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


    /* Actualizar estado */

    async function updateUIValues() {
        const recogerBoteFromCall = (await bote()).toString()
        const recogerBoteEthFromCall = (await boteEnWei()).toString()
        const misBoletosFromCall = (await misBoletos()).toString()
        const dirAsociacionFromCall = (await getDir_asociacion()).toString()
        const rondaIdFromCall = (await getRondaId()).toString()
        const ultGanadorFromCall = (await getUltimoGanador()).toString()
        setRecogerBote(recogerBoteFromCall)
        setRecogerBoteEth(recogerBoteEthFromCall)
        setMisBoletos(misBoletosFromCall)
        setDirAsociacion(dirAsociacionFromCall)
        setRondaId(rondaIdFromCall)
        setUltimoGanador(ultGanadorFromCall)
        
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

    const prueba = (search) => {
        return search.toString();
    }

    return (
        <div>
            <button 
                onClick={async () => {
                    await compraBoletoUno()
                }}
            >Compra un boleto</button>
            <button 
                onClick={async () => {
                    await compraBoletoDos()
                }}
            >Compra dos boletos</button>
            <button 
                onClick={async () => {
                    await compraBoletoTres()
                }}
            >Compra tres boletos</button>
            <button 
                onClick={async () => {
                    await compraBoletoCuatro()
                }}
            >Compra cuatro boletos</button>
            <button 
                onClick={async () => {
                    await compraBoletoCinco()
                }}
            >Compra cinco boletos</button>


            <div>Bote: {recogerBote} boletos</div>
            <div>Bote: {ethers.utils.formatUnits(recogerBoteEth, "ether")} ETH</div>
            <div>Mis boletos: {misBoletosYo} boletos</div>
            <div>Direccion asociacion: {dirAsociacion}</div>
            <div>Numero de ronda: {rondaId}</div>
            <div>Ultimo ganador: {ultGanador}</div>
            <div>Precio un boleto: {ethers.utils.formatUnits(precioBoletosUno, "ether")} ETH</div>
            <div>Precio dos boletos: {ethers.utils.formatUnits(precioBoletosDos, "ether")} ETH</div>
            <div>Precio tres boletos: {ethers.utils.formatUnits(precioBoletosTres, "ether")} ETH</div>
            <div>Precio cuatro boletos: {ethers.utils.formatUnits(precioBoletosCuatro, "ether")} ETH</div>
            <div>Precio cinco boletos: {ethers.utils.formatUnits(precioBoletosCinco, "ether")} ETH</div>
        </div>
    )

}