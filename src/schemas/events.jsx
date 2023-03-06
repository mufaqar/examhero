// schemas/pet.js
export default {
  name: "events",
  type: "document",
  title: "Events",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
    },
    {
      name: "excerpt",
      type: "text",
      title: "Excerpt",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200, // will be ignored if slugify is set
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "location",
      type: "string",
      title: "Location",
    },
    {
     title: 'Link',
     name: 'href',
     type: 'url',
     validation: Rule => Rule.uri({
       scheme: ['http', 'https']
     })
   }
  ],
};
