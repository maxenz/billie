import { Server, Model } from 'miragejs';

new Server({
    models: {
        company: Model,
    },
    routes() {
        this.namespace = '/api';

        this.patch(
            '/companies/:id',
            (schema, request) => {
                const body = JSON.parse(request.requestBody);
                let id = request.params.id;
                let company = schema.companies.find(id);

                return company.update({ budget: parseFloat(body.budget) });
            },
            { timing: 2000 },
        );

        this.get('/companies', (schema) => schema.companies.all(), {
            timing: 2000,
        });
    },
    seeds(server) {
        server.create('company', {
            id: 1,
            name: 'Apple',
            budget: 15000.1367,
            budget_spent: 4674.23,
            first_purchased_date: '2028-06-07',
        });
        server.create('company', {
            id: 2,
            name: 'Microsoft',
            budget: 32843.42367,
            budget_spent: 1034,
            first_purchased_date: '2018-07-01',
        });
        server.create('company', {
            id: 3,
            name: 'Facebook',
            budget: 89913.42367,
            budget_spent: 6034.56,
            first_purchased_date: '2117-07-07',
        });
        server.create('company', {
            id: 4,
            name: 'Amazon',
            budget: 1046495.42367,
            budget_spent: 120345.33,
            first_purchased_date: '2020-01-03',
        });
        server.create('company', {
            id: 5,
            name: 'Visa',
            budget: 9885.42367,
            budget_spent: 150.11123,
            first_purchased_date: '2019-07-07',
        });
        server.create('company', {
            id: 6,
            name: 'JPMorgan',
            budget: 888221.42367,
            budget_spent: 50334.222,
            first_purchased_date: '2119-07-07',
        });
        server.create('company', {
            id: 7,
            name: 'SpaceX',
            budget: 884112.42367,
            budget_spent: 50334.222,
            first_purchased_date: '2119-07-07',
        });
    },
});
