import { nationalQuestions } from './nationalQuestions';

export const cityName = 'João Pessoa';

export const cityPath = '/joao-pessoa';

const questionnaire = [
  nationalQuestions,
  {
    id: 11,
    question: 'João Pessoa Questão 11',
  },
  {
    id: 12,
    question: 'Questão 12',
  },
  {
    id: 13,
    question: 'Questão 13',
  },
  {
    id: 14,
    question: 'Questão 14',
  },
];

export const firebaseConfig = {
  apiKey: 'AIzaSyBYVY-XCJsMtsSkeUNytgk2l7p3BEvPfsY',
  authDomain: 'vota-jampa-dev.firebaseapp.com',
  databaseURL: 'https://vota-jampa-dev.firebaseio.com',
  projectId: 'vota-jampa-dev',
  storageBucket: 'vota-jampa-dev.appspot.com',
  messagingSenderId: '16173311392',
  appId: '1:16173311392:web:e698ffbe4c661b66cdb0c5',
};

export default {
  cityName,
  cityPath,
  questionnaire,
  firebaseConfig,
};