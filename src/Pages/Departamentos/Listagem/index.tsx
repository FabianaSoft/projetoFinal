import { DataTable } from 'primereact/datatable'
import { Column } from 'primereact/column'
import { Button } from 'primereact/button'
import { useNavigate } from 'react-router-dom';

const Departamentos = () => {
    const navigate = useNavigate()


    const departamentos = [

        {

            id_departamento: 1,
            nome: 'Recursos Humanos',
            sigla: 'RH'
        },
        {
            id_departamento: 2,
            nome: 'Tecnologia da Informação',
            sigla: 'TI'
        },
    ]
    const bodyAcao = () => {
        return (
            <>
                <Button icon="pi pi-pencil" rounded severity='warning' className='mr-2' />
                <Button icon="pi pi-trash" rounded severity='danger' />
            </>
        )
    }

    return (
        <>
            <div className="col-span-12 flex justify-between items-center">
                <h1>Listagem de Departamentos</h1>
                <Button label="novo" icon="pi pi-plus" rounded onClick={()=>navigate("/departamentos/new")} />
            </div>

            <div className="col-span-12">
                <DataTable value={departamentos}>
                    <Column field="sigla" header="Sigla" />
                    <Column field="nome" header="Nome" />
                    <Column header="Ação" body={bodyAcao} />

                </DataTable>
            </div>
        </>
    )
};

export default Departamentos;
