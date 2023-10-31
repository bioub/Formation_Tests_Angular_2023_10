import { fetchUsers } from "./fetchUsers";

describe('fetchUsers function', () => {
  // Problème ici, on attend pas la fin du code async
  // it('should respond data from REST API', () => {
  //   fetchUsers().then((users) => {
  //     expect(users[0].name).toBe('Leanne Graham');
  //   });
  // });

  it('should respond data from REST API (done)', (done) => {
    fetchUsers().then((users) => {
      expect(users[0].name).toBe('Leanne Graham');
      done();
    });
  });

  it('should respond data from REST API (return promise)', () => {
    return fetchUsers().then((users) => {
      expect(users[0].name).toBe('Leanne Graham');
    });
  });

  it('should respond data from REST API (return promise)', async () => {
    const users = await fetchUsers();
    expect(users[0].name).toBe('Leanne Graham');
  });
});
