import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WelcomeView from '@/views/WelcomeView.vue';
import LoginView from '@/views/LoginView.vue';
import SignUpView from '@/views/SignUpView.vue';
import TransferView from '@/views/TransferView.vue';
import AccountView from '@/views/AccountView.vue';
import SplashView from '@/views/SplashView.vue';
import SendView from '@/views/SendView.vue';
import RequestView from '@/views/RequestView.vue';
import ProfileView from '@/views/ProfileView.vue';
import DebitView from '@/views/Accounts/DebitView.vue';
import EnterAdress from '@/components/Forms/sendFunds/EnterAddress.vue';
import EnterAmount from '@/components/Forms/sendFunds/EnterAmount.vue';
import ConfirmTransfer from '@/components/Forms/sendFunds/ConfirmTransfer.vue';
import ConfirmationBanner from '@/components/Splash/ConfirmationBanner.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/',
      name: 'splash',
      component: SplashView,
      meta: { transition: 'fade-out' },
    },

    {
      path: '/welcome',
      name: 'welcome',
      component: WelcomeView,
      meta: { transition: 'fade-in' },
    },

    {
      path: '/transfer',
      name: 'transfer',
      component: TransferView,
    },

    {
      path: '/transfer/send',
      name: 'send',
      component: SendView,
      children: [
        {
          path: 'enterAddress',
          name: 'enterAddress',
          component: EnterAdress,
        },
        {
          path: 'enterAmount',
          name: 'enterAmount',
          component: EnterAmount,
        },

        {
          path: 'confirm',
          name: 'confirm',
          component: ConfirmTransfer,
        },

        {
          path: 'success',
          name: 'success',
          component: ConfirmationBanner,
        },
      ],
    },

    {
      path: '/accounts',
      name: 'accounts',
      component: AccountView,
    },

    {
      path: '/accounts/debit',
      name: 'debit',
      component: DebitView,
    },

    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
    },

    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView,
    },
  ],
});

export default router;
