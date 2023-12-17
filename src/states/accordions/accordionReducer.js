import ACCORDION_ACTION_TYPE from './AccordionActionType';

const initialState = [
  {
    title: 'Bagaimana Cara Mengirim Dokumen?',
    description: 'Pengguna harus login terlebih dahulu untuk mengirim dokumen',
    isActive: false,
  },
  {
    title: 'Bagaimana alur setelah dokumen dikirim?',
    description: 'Status dari dokumen yang dikirim akan terlihat pada dashboard pengguna. Jika dokumen sedang diproses, maka pengguna akan melihat statusnya sedang diproses',
    isActive: false,
  },
  {
    title: 'Bagaimana cara login pada aplikasi?',
    description: 'Pengguna harus mendaftar akun terlebih dahulu dengan menekan tombol signup pada pojok kanan atas tampilan aplikasi. Setelah akun berhasil dibuat, pengguna menekan tombol login kemudian mengisi form yang telah pengguna isi sebelumnya',
    isActive: false,
  },
];

const accordionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACCORDION_ACTION_TYPE.toggleAccordion:
      return state.map((accordion, accordionIndex) => {
        if (accordion.isActive && accordionIndex === action.payload.index) {
          return {
            ...accordion,
            isActive: false,
          };
        }
        return {
          ...accordion,
          isActive: accordionIndex === action.payload.index,

        };
      });
    default:
      return state;
  }
};

export default accordionReducer;
