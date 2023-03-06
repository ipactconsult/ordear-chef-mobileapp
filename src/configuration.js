export const routes = [
    {
      path: '/',
      component: Login,
      roles: ['Admin','Responsible_Franchise', 'restaurant_responsible', 'Executor_chief','Executor_cashier'],
    },
    {
      path: '/login_as_a_franchise_responsible/:email',
      screen: Add,
      roles: ['Responsible_Franchise'],
    },
    {
      path: '/add_franchise_responsible',
      component: Add, //page qui méne
      roles: ['Admin'], //pour qui accessible
    },
  ];