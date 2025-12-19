"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const task_entity_1 = require("./task.entity");
let TasksService = class TasksService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async findAll() {
        return this.taskRepository.find({ order: { id: 'ASC' } });
    }
    async findOne(id) {
        const task = await this.taskRepository.findOneBy({ id });
        if (!task)
            throw new common_1.NotFoundException(`Tarefa com id ${id} não encontrada`);
        return task;
    }
    async create(createTaskDto) {
        var _a;
        const task = this.taskRepository.create({
            title: createTaskDto.title,
            description: createTaskDto.description,
            status: (_a = createTaskDto.status) !== null && _a !== void 0 ? _a : task_entity_1.TaskStatus.ABERTO,
        });
        return this.taskRepository.save(task);
    }
    async update(id, updateTaskDto) {
        const task = await this.findOne(id);
        if (updateTaskDto.title !== undefined)
            task.title = updateTaskDto.title;
        if (updateTaskDto.description !== undefined)
            task.description = updateTaskDto.description;
        if (updateTaskDto.status !== undefined)
            task.status = updateTaskDto.status;
        return this.taskRepository.save(task);
    }
    async remove(id) {
        const task = await this.findOne(id);
        await this.taskRepository.delete(task.id);
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TasksService);
