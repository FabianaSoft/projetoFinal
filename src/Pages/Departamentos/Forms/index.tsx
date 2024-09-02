import { InputText } from "primereact/inputtext"
import { Button } from "primereact/button"

function Forms() {
    return (
        <div className="col-span-12">
            <div className="flex w-full gap-2">
                <div className="w-2/3">
                    <InputText placeholder="Nome" className="w-full" />
                </div>
                <div className="w-1/3">
                    <InputText placeholder="Sigla" className="w-full" />
                </div>

            </div>
            <Button label="Salvar" icon="pi pi-save" className="mt-2" />
        </div>
    )
}

export default Forms 