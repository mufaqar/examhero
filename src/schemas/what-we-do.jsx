// schemas/pet.js
export default {
     name: 'what_we_do',
     type: 'document',
     title: 'What we do',
     fields: [
       
       {
          title: 'Image',
          name: 'image',
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
          name: 'title',
          type: 'string',
          title: 'Title'
        },
        {
          name: 'description',
          type: 'text',
          title: 'Description'
        },
        {
          name: 'link',
          type: 'string',
          title: 'Link'
        },
     ]
   }