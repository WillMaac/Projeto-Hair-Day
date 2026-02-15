import { apiConfig } from "./api-config";

export async function scheduleCancel({id}){
    try{
        const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        if (!response.ok) {
            throw new Error(`Erro ao cancelar: ${response.status}`);
        }

        // Aguarda resposta do servidor
        await response.json()
        alert("Agendamento cancelado com sucesso!")
    }catch(error){
        console.log(error);
        alert("Não foi possível cancelar o agendamento.");
    }
}