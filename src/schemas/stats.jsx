// schemas/pet.js
export default {
     name: 'stats',
     type: 'document',
     title: 'Stats',
     fields: [
       
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
        },
        {
          name: 'stats_no',
          type: 'string',
          title: 'Stats Number'
        },
        {
          name: 'info',
          type: 'string',
          title: 'Info'
        },
     ]
   }