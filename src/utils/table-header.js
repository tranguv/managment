export const userColumns = [
  {
    dataField: 'stt',
    caption: 'STT',
    width: '15%',
  },
  {
    dataField: 'name',
    caption: 'Full Name',
    width: '20%',
    requiredRule: true,
  },
  {
    dataField: 'username',
    caption: 'Username',
    width: '20%',
    requiredRule: true,
  },
  {
    dataField: 'dob',
    caption: 'Date of birth',
    width: '20%',
    requiredRule: true,
  },
  {
    dataField: 'role',
    caption: 'Role',
    width: '15%',
    requiredRule: true,
  },
];

export const productColumns = [
  {
    dataField: 'id',
    caption: 'ID',
    width: '10%',
    requiredRule: true,
  },
  {
    dataField: 'name',
    caption: 'Product Name',
    width: '20%',
    requiredRule: true,
  },
  {
    dataField: 'createdDate',
    caption: 'Created Date',
    width: '20%',
    allowEditing: false,
  },
  {
    dataField: 'updatedDate',
    caption: 'Updated Date',
    width: '20%',
    allowEditing: false,
  },
  {
    dataField: 'createUserID',
    caption: 'Create User ID',
    width: '20%',
    allowEditing: false,
  },
];

export const roleColumns = [
  {
    dataField: 'id',
    caption: 'ID',
    width: '30%',
    requiredRule: true,
  },
  {
    dataField: 'name',
    caption: 'Role Name',
    width: '60%',
    requiredRule: true,
  },
];

export const categoryColumns = [
  {
    dataField: 'id',
    caption: 'ID',
    width: '30%',
    requiredRule: true,
  },
  {
    dataField: 'name',
    caption: 'Category Name',
    width: '60%',
    requiredRule: true,
  },
];
