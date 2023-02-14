//https://www.npmjs.com/package/faker

import { faker } from '@faker-js/faker';
export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = { // mentioned as object
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }

  markerContent(): string {
    return `
    <h5>User Name: ${this.name}</h5>
    `;
  }
 }

