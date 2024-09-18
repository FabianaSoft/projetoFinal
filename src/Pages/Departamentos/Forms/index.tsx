import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { useState } from "react"
import { insereDepartamento } from "../../../Services/Departamentos/insereDepartamento"
import {useNavigate} from "react-router-dom"


function Forms() {
    const navigate = useNavigate()
    const [nome, setNome] = useState("")
    const [sigla, setSigla] = useState("")
    const [nomeError, setNomeError] = useState(false)
    const [siglaError, setSiglaError] = useState(false)

    
    async function inserir() {
        if (nome === "" || sigla === "") {
            setNomeError(nome === "")
            setSiglaError(sigla === "")
        }
        const departamento = { sigla, nome }
        const result = await insereDepartamento(departamento)
        console.log(result)
        setNomeError(false)
        setSiglaError(false)

    }
    return (
        <>
            <div className="col-span-12 flex justify-between items-center">
                <h1>Cadastro de Departamentos</h1>
                <Button label="voltar" icon="pi pi-arrow-left" rounded onClick={() => navigate("/departamentos")} />
            </div>
            <div className="col-span-12">
                <div className="flex w-full gap-2">
                    <div className="w-2/3">
                        <InputText placeholder="Nome" className="w-full" onChange={e => setNome(e.target.value)} />
                        {nomeError && <small className="text-red-600">
                            Nome inválido
                        </small>}
                    </div>
                    <div className="w-1/3">
                        <InputText placeholder="Sigla" className="w-full" onChange={e => setSigla(e.target.value)} />
                        {siglaError && <small className="text-red-600">
                            Sigla inválida
                        </small>}
                    </div>

                </div>
                <Button label="Salvar" icon="pi pi-save" className="mt-2" onClick={inserir} />

            </div>
        </>
    )
}

export default Forms 