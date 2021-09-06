const faker = require('faker')

/*
CREATE TABLE IF NOT EXISTS `saigonbrosdb`.`Venues` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description_long` VARCHAR(255) NOT NULL,
  `description_medium` VARCHAR(255),
  `description_short` VARCHAR(255),
  `intro` VARCHAR(255),
  `phone_number` VARCHAR(255),
  `coordinate` POINT NOT NULL,
  SPATIAL INDEX `SPATIAL` (`coordinate`),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

-- seed data
-- Users
INSERT INTO saigonbrosdb.Users (id, email, name) VALUES (1, "cflynn.us@gmail.com", "Casey Flynn");
INSERT INTO saigonbrosdb.Users (id, email, name) VALUES (2, "john@gmail.com", "John Wayne");
INSERT INTO saigonbrosdb.Users (id, email, name) VALUES (3, "eric@gmail.com", "Eric Wayne");

-- Deals
INSERT INTO saigonbrosdb.Deals (id, name, type) VALUES (1, "free massage", "shopping");
INSERT INTO saigonbrosdb.Deals (id, name, type) VALUES (2, "fake massage", "shopping");

-- UsersDeals
INSERT INTO saigonbrosdb.UsersDeals (userId, dealId) VALUES (1, 1);
INSERT INTO saigonbrosdb.UsersDeals (userId, dealId) VALUES (1, 2);

-- Venues
INSERT INTO saigonbrosdb.Venues (id, name, description_long, coordinate) VALUES (1, "Bajoo", "bla bla bla 1", POINT(40.71727401, -74.00898606));
INSERT INTO saigonbrosdb.Venues (id, name, description_long, coordinate) VALUES (2, "FireFest", "bla bla bla 2", POINT(40.71727401, -74.00898606));
INSERT INTO saigonbrosdb.Venues (id, name, description_long, coordinate) VALUES (3, "The Stag", "bla bla bla 3", POINT(40.71727401, -74.00898606));
*/

const venueTypes = ['travel', 'auto', 'food_beverage', 'things_to_do', 'beauty_spas', 'health_fitness']
const venueProperties = 'id, name, type, description_long, description_medium, description_short, phone_number, coordinate'
// seed venues
console.log(`INSERT INTO saigonbrosdb.Venues (${venueProperties}) VALUES`)
for (let i = 1; i < 100; i++) {
  const id = i
  const name = faker.company.companyName()
  const type = venueTypes[Math.floor(Math.random() * 6)]
  const description_long = faker.lorem.sentences(3)
  const description_medium = faker.lorem.sentences(2)
  const description_short = faker.lorem.sentences(1)
  const phone_number = faker.phone.phoneNumber('0165#######')
  const coordinate = `POINT(${faker.address.latitude()}, ${faker.address.longitude()})`
  const values = `${id}, "${name}", "${type}", "${description_long}", "${description_medium}", "${description_short}", "${phone_number}", ${coordinate}`
  console.log(`(${values}),`)
}
