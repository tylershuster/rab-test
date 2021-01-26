import Urbit from '@urbit/http-api';

const ship = 'zod';
const url = 'localhost:8080';
const code = 'lidlut-tabwed-pillex-ridrup';
const verbose = true;

Urbit.authenticate({ ship, url, code, verbose });