import axios from "axios";

export async function insereDepartamento (departamento:any) {

    const response = axios.post("http://localhost:3030/departamentos", departamento)
    return response 
    
}