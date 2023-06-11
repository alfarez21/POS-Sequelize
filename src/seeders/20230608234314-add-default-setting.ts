import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    // Menambahkan data ke dalam tabel
    await queryInterface.bulkInsert('setting', [
      {
        app: 'MyApp',
        store: 'MyStore',
        address_one: 'Address 1',
        address_two: 'Address 2',
        contact: '123456789',
        tax: '10%',
        currency_symbol: '$',
        percentage: 20,
        footer: 'Footer text',
        image: 'image.png',
        token_balance: 100,
        token_cut_balance: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    // Menghapus data dari tabel
    await queryInterface.bulkDelete('setting', {});
  },
};
