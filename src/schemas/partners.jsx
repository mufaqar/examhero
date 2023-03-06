// schemas/pet.js
export default {
     name: 'partners',
     type: 'document',
     title: 'Partners',
     fields: [
       {
         name: 'title',
         type: 'string',
         title: 'Title'
       },
       {
          title: 'Logo',
          name: 'logo',
          type: 'image',
          options: {
            hotspot: true // <-- Defaults to false
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              options: {
                isHighlighted: true // <-- make this field easily accessible
              }
            }
            
          ]
        }
     ]
   }