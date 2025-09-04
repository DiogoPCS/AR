export interface Bloqueio {
    data_inicial: string | null;
    data_final: string | null;
    dia_semana: string | null;
    recorrencia: string | null;
    pista: string | null;
}

export interface Bloqueios {
    itens: Bloqueio[]
}