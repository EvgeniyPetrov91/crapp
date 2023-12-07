const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivanov@mail.io",
  id: "1",
  about: "Рассказ о себе длинный и важный",
  avatar: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=300&q=70"
};

const users = {
	0: { name: 'Марина', lastname: 'Яблочкова' },
	1: { name: 'Степан', lastname: 'Ябловский' },
	2: { name: 'Николай', lastname: 'Кириленко' },
	3: { name: 'Ирина', lastname: 'Панкова' },
}

export function getUser () {
  return user;
}
export function getUsers() {
  return users;
}