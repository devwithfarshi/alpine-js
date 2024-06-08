import Alpine from "alpinejs";

Alpine.data("dropdown", () => ({
  open: false,

  toggle() {
    this.open = !this.open;
  },
}));

Alpine.data("modal", () => ({
  isModalOpen: false,

  modalToggle() {
    this.isModalOpen = !this.isModalOpen;
  },
}));

Alpine.store("users", {
  users: [
    {
      id: "1",
      name: "John",
      email: "john.com",
    },
    {
      id: "2",
      name: "Jane",
      email: "jane.com",
    },
    {
      id: "3",
      name: "Jack",
      email: "jack.com",
    },
  ],
  addUser({ name, email }) {
    const id = Date.now().toString();
    const newUser = { id, name, email };
    this.users.push(newUser);
    console.log(newUser);
  },
  deleteUser(id) {
    this.users = this.users.filter((user) => user.id !== id);
  },
  updateUser({ id, updatedName, updateEmail }) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users.splice(index, 1, {
      id: id,
      name: updatedName,
      email: updateEmail,
    });
    console.log(this.users);
  },
});
