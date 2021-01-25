import * as Urbit from '@urbit/http-api';

console.log(Urbit);
const ship = 'zod';
const url = 'http://localhost:8080';
const code = 'lidlut-tabwed-pillex-ridrup';
const verbose = true;

Urbit.authenticate({ ship, url, code, verbose });