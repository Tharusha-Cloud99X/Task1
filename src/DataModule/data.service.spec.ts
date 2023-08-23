import { Test, TestingModule } from "@nestjs/testing";
import { DataService } from "./data.service"

describe('DataService', () => {
    let service: DataService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DataService]
        }).compile()

        service = module.get(DataService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    describe('getDataset', () => {
        it('should return an array', () => {
            const result = service.getData()
            expect(result).toHaveLength(7)
            expect(result).toEqual([
                { id: 1, name: 'Tharusha' },
                { id: 2, name: 'Rehan' },
                { id: 3, name: 'Perera' },
                { id: 4, name: 'John' },
                { id: 5, name: 'Amal' },
                { id: 6, name: 'Kamal' },
                { id: 7, name: 'Perera' },
            ])


        });
    })
})
