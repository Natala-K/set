// src/Team.test.js
import Team from './Team';

class Character {
  constructor(name) {
    this.name = name; // Имя персонажа
  }
}

describe('Класс Team', () => {
  let team;
  let char1;
  let char2;
  let char3;

  beforeEach(() => {
    team = new Team();
    char1 = new Character('Персонаж 1');
    char2 = new Character('Персонаж 2');
    char3 = new Character('Персонаж 3');
  });

  test('должен добавить персонажа в команду', () => {
    team.add(char1);
    expect(team.toArray()).toContain(char1); // Ожидаем, что персонаж будет в команде
  });

  test('не должен добавлять дублирующихся персонажей в команду', () => {
    team.add(char1);
    expect(() => team.add(char1)).toThrow('Персонаж уже в команде'); // Ожидаем ошибку при добавлении дублирующегося персонажа
  });

  test('должен добавить нескольких персонажей в команду с использованием addAll', () => {
    team.addAll(char1, char2, char3);
    expect(team.toArray()).toEqual(expect.arrayContaining([char1, char2, char3])); // Ожидаем, что все персонажи будут в команде
  });

  test('не должен вызывать ошибку при добавлении дублирующихся персонажей с использованием addAll', () => {
    team.addAll(char1, char2);
    team.addAll(char1, char3);
    expect(team.toArray()).toEqual(expect.arrayContaining([char1, char2, char3])); // Ожидаем, что все уникальные персонажи будут в команде
  });

  test('должен конвертировать участников команды в массив', () => {
    team.addAll(char1, char2, char3);
    expect(team.toArray()).toBeInstanceOf(Array); // Ожидаем, что результат будет массивом
  });
});
