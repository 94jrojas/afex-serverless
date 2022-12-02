import { Test, TestingModule } from '@nestjs/testing';
import { StudentsService } from './students.service';

describe('StudentsService', () => {
  let service: StudentsService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StudentsService],
    }).compile();
    service = module.get<StudentsService>(StudentsService);
  });

  it('POST /students', async () => {
    const resultExpected = {
      firstName: 'John',
      lastName: 'Doe',
      age: 12,
      grade: 'A',
      level: '1',
      section: 'A',
    };
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      age: 12,
      grade: 'A',
      level: '1',
      section: 'A',
    };

    jest
      .spyOn(service, 'create')
      .mockImplementation(() => Promise.resolve(resultExpected));
    expect(await service.create(data)).toEqual(resultExpected);
    expect(service.create).toBeCalledWith(data);
    expect(service.create).toBeCalledTimes(1);
  });

  it('GET /students', async () => {
    const resultExpected = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 12,
        grade: 'A',
        level: '1',
        section: 'A',
      },
    ];

    jest
      .spyOn(service, 'findAll')
      .mockImplementation(() => Promise.resolve(resultExpected));

    expect(await service.findAll()).toEqual(resultExpected);
    expect(service.findAll).toBeCalledTimes(1);
  });

  it('GET /students/:id', async () => {
    const resultExpected = {
      firstName: 'John',
      lastName: 'Doe',
      age: 12,
      grade: 'A',
      level: '1',
      section: 'A',
    };

    jest
      .spyOn(service, 'findOne')
      .mockImplementation(() => Promise.resolve(resultExpected));

    expect(await service.findOne('1')).toEqual(resultExpected);
    expect(service.findOne).toBeCalledWith('1');
    expect(service.findOne).toBeCalledTimes(1);
  });

  it('PUT /students/:id', async () => {
    const resultExpected = {
      firstName: 'John',
      lastName: 'Doe',
      age: 12,
      grade: 'A',
      level: '1',
      section: 'A',
    };
    const data = {
      firstName: 'John',
      lastName: 'Doe',
      age: 12,
      grade: 'A',
      level: '1',
      section: 'A',
    };

    jest
      .spyOn(service, 'update')
      .mockImplementation(() => Promise.resolve(resultExpected));
    expect(await service.update('1', data)).toEqual(resultExpected);
    expect(service.update).toBeCalledWith('1', data);
    expect(service.update).toBeCalledTimes(1);
  });

  it('DELETE /students/:id', async () => {
    const resultExpected = {
      firstName: 'John',
      lastName: 'Doe',
      age: 12,
      grade: 'A',
      level: '1',
      section: 'A',
    };

    jest
      .spyOn(service, 'remove')
      .mockImplementation(() => Promise.resolve(resultExpected));

    expect(await service.remove('1')).toEqual(resultExpected);
    expect(service.remove).toBeCalledWith('1');
    expect(service.remove).toBeCalledTimes(1);
  });
});
