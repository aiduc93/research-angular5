interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}



export class TodoModel implements Todo{
    userId: number;
    id: number;
    title: string;
    completed: boolean;
    constructor(source: Todo) {
        if (source) {
            this.title = source.title;
            this.completed = source.completed;
            // this.title = source.title
        }
        
    }
}
