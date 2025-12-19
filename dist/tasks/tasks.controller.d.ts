import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    findAll(): Promise<import("./task.entity").Task[]>;
    findOne(id: number): Promise<import("./task.entity").Task>;
    create(createTaskDto: CreateTaskDto): Promise<import("./task.entity").Task>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<import("./task.entity").Task>;
    remove(id: number): Promise<void>;
}
