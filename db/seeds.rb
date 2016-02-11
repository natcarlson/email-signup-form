# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


Email.create({
  first_name: 'Nat',
  last_name: 'Carlson',
  email: 'naca@natcarlson.com',
  city: 'Ridgewood',
  state: 'New York',
  country: 'United States'
  });
