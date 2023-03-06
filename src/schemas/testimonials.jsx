// schemas/pet.js
export default {
     name: 'testimonials',
     type: 'document',
     title: 'Testimonials',
     fields: [
       {
         name: 'rating',
         type: 'string',
         title: 'Rating',
         options: {
          list: [
            { title: '1', value: '1' },
            { title: '2', value: '2' },
            { title: '3', value: '3' },
            { title: '4', value: '4' },
            { title: '5', value: '5' },
          ],
        },
       },
       {
          title: 'Profile Image',
          name: 'profile',
          type: 'image',
          options: {
            hotspot: true // <-- Defaults to false
          },
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Name',
            },
            {
               name: 'designation',
               type: 'string',
               title: 'Designation',
             }
            
          ]
        },
        {
          
          name: 'review',
          type: 'text',
          title: 'Review',
             
        }
     ]
   }