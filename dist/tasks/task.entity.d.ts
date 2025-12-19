export declare enum TaskStatus {
    ABERTO = "aberto",
    FAZENDO = "fazendo",
    FINALIZADO = "finalizado"
}
export declare class Task {
    id: number;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: Date;
    updatedAt: Date;
}
