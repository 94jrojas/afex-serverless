import { Test, TestingModule } from '@nestjs/testing';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

describe('StudentsController', () => {
  let controller: StudentsController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController],
      providers: [StudentsService],
    }).compile();
    controller = module.get<StudentsController>(StudentsController);
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
      .spyOn(controller, 'create')
      .mockImplementation(() => Promise.resolve(resultExpected));
    expect(await controller.create(data)).toEqual(resultExpected);
    expect(controller.create).toBeCalledWith(data);
    expect(controller.create).toBeCalledTimes(1);
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
      .spyOn(controller, 'findAll')
      .mockImplementation(() => Promise.resolve(resultExpected));

    expect(await controller.findAll()).toEqual(resultExpected);
    expect(controller.findAll).toBeCalledTimes(1);
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
      .spyOn(controller, 'findOne')
      .mockImplementation(() => Promise.resolve(resultExpected));
    expect(await controller.findOne('1')).toEqual(resultExpected);
    expect(controller.findOne).toBeCalledWith('1');
    expect(controller.findOne).toBeCalledTimes(1);
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
      .spyOn(controller, 'update')
      .mockImplementation(() => Promise.resolve(resultExpected));
    expect(await controller.update('1', data)).toEqual(resultExpected);
    expect(controller.update).toBeCalledWith('1', data);
    expect(controller.update).toBeCalledTimes(1);
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
      .spyOn(controller, 'remove')
      .mockImplementation(() => Promise.resolve(resultExpected));
    expect(await controller.remove('1')).toEqual(resultExpected);
    expect(controller.remove).toBeCalledWith('1');
    expect(controller.remove).toBeCalledTimes(1);
  });
});
