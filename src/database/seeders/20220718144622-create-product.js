"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("Products", [
      {
        product_name: "jam dinding",

        description: "jam mahal terbuat dari emas warna putih",

        stock: 10,

        available: true,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        product_name: "jam weker",

        description: "jam pembangun tidur terbuat dari plastik warna pink",

        stock: 55,

        available: false,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        product_name: "jam tangan",

        description: "jam trendy untuk gaya terbuat dari baja warna silver",

        stock: 99,

        available: true,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        product_name: "jam mainan",

        description: "jam mainan anak-anak terbuat dari plastik warna hitam",

        stock: 48,

        available: false,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
      {
        product_name: "jam digital",

        description: "jam dinding tanpa baterai. warna kuning",

        stock: 46,

        available: true,

        createdAt: new Date(),

        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
