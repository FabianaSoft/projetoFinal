import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"
import { useState } from "react"
import { insereDepartamento } from "../../../Services/Departamentos/insereDepartamento"


function Forms() {
    const [nome, setNome] = useState("")
    const [sigla, setSigla] = useState("")

    async function inserir(){
        const departamento = {sigla, nome}
        const result = await insereDepartamento(departamento)
        console.log(result)

    } 
    return (
        <div className="col-span-12">
            <div className="flex w-full gap-2">
                <div className="w-2/3">
                    <InputText placeholder="Nome" className="w-full" onChange={e => setNome(e.target.value)} />
                </div>
                <div className="w-1/3">
                    <InputText placeholder="Sigla" className="w-full" onChange={e => setSigla(e.target.value)} />
                </div>

            </div>
            <Button label="Salvar" icon="pi pi-save" className="mt-2" onClick={inserir} />
            <small className="text-red-600">
                Nome inválido
            </small>
        </div>
    )
}

export default Forms 