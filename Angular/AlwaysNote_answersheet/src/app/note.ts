export class Note {
    constructor(
        public id: number = 0,
        public content: string = "",
        public important: boolean = false,
        public archived: boolean = false,
        public created_at: Date = new Date(),
        public updated_at: Date = new Date(),
        public editable: boolean = false
    ){}
}