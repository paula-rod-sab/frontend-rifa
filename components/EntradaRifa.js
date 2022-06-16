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

    // Boton para comprar un boleto
    const { runContractFunction: compraBoleto } = useWeb3Contract({
        abi: abi,
        contractAddress: CONTRACT_ADDRESS,
        functionName: "compraBoleto",
        msgValue: "8492449528504679", // dos boletos
        params:{
            _numBoletos: 1,
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
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues()
        }
    }, [isWeb3Enabled])

    return (
        <div>
            <button 
                onClick={async () => {
                    await compraBoleto()
                }}
            >Compra un boleto</button>
            <div>Bote: {recogerBote} boletos</div>
            <div>Bote: {ethers.utils.formatUnits(recogerBoteEth, "ether")} ETH</div>
            <div>Mis boletos: {misBoletosYo} boletos</div>
            <div>Direccion asociacion: {dirAsociacion}</div>
            <div>Numero de ronda: {rondaId}</div>
            <div>Ultimo ganador: {ultGanador}</div>
        </div>
    )

}