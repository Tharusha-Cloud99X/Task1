import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class DataService {
    private readonly dataset = [
        { id: 1, name: 'Tharusha' },
        { id: 2, name: 'Rehan' },
        { id: 3, name: 'Perera' },
        { id: 4, name: 'John' },
        { id: 5, name: 'Amal' },
        { id: 6, name: 'Kamal' },
        { id: 7, name: 'Perera' },
    ]


    getData(id?: number, name?: string,) {
        if (id !== undefined && name !== undefined) {
            const item = this.dataset.find(item => item.name === name && item.id === id);

            if (!item) {
                throw new NotFoundException(`User with ID - ${id} and Name - ${name} not found`);
            }
            return item;
        }
        else if (id !== undefined && name === undefined) {
            const item = this.dataset.find(item => item.id === id);

            if (!item) {
                throw new NotFoundException(`User with ID - ${id} not found`);
            }
            return item;
        }

        return this.dataset;
    }
}