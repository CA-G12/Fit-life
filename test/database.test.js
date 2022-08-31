const connection = require('../src/database/config/connection')
const { ClassesQueries } = require('../src/database/queries')
const dbbulit = require('../src/database/config/dbbuild')
const classQuery = new ClassesQueries();

  beforeAll(() => dbbulit());
  afterAll(() => connection.end());
  test('all classes', ()=>{
   return classQuery.showAllClasses().then(data=>expect(data.rows[1]).toEqual(  {
    name: 'Fitness',
    description: 'Description Content 2',
    price: '50',
    image: 'https://cdn.mos.cms.futurecdn.net/KLZwUWe4JwyyXY7pV7CpaU.jpg'
  })); 
})
test(' get class by id', ()=>{
    return classQuery.showClassById(2).then(data=>expect(data.rows[0]).toEqual(  {
     name: 'Fitness',
     description: 'Description Content 2',
     price: '50',
     image: 'https://cdn.mos.cms.futurecdn.net/KLZwUWe4JwyyXY7pV7CpaU.jpg'
   })); 
 })

 test('sort price', ()=>{
    return classQuery.showClassByPrice('descending').then(data=>expect(data.rows).toEqual( 
        [
            {
              name: 'Fitness',
              description: 'Description Content 3',
              price: '100',
              image: 'https://img.etimg.com/photo/91740413/91740413.jpg?v=3'
            },
            {
              name: 'Fitness',
              description: 'Description Content 2',
              price: '50',
              image: 'https://cdn.mos.cms.futurecdn.net/KLZwUWe4JwyyXY7pV7CpaU.jpg'
            },
            {
              name: 'Fitness',
              description: 'Description Content 1',
              price: '40.5',
              image: 'https://images.healthshots.com/healthshots/en/uploads/2022/03/20121414/fitness-woman-770x433.jpg'
            }
          ]
    )); 
 })