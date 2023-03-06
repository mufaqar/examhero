export default {
  name: "whyus",
  type: "document",
  title: "Why Us",
  fields: [
    {
      title: "Logo",
      name: "logo",
      type: "image",
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Caption",
          options: {
            isHighlighted: true, // <-- make this field easily accessible
          },
        },
      ],
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
     name: "description",
     type: "text",
     title: "Description",
   },
  ],
};
