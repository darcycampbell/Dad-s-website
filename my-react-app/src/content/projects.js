const projects = [
  {
    id: 1,
    title: "Building 2",
    image: "https://picsum.photos/350/250",
    alt: "This is an image",
    category: "renovation",
    text: "This is a building that has been built",
    gallery: [
      { id: 1, image: "https://picsum.photos/3500/2000", alt: "image" },
      { id: 2, image: "https://picsum.photos/3500/2001", alt: "image" },
      { id: 3, image: "https://picsum.photos/3500/2002", alt: "image" },
    ],
    galleryText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam utplacerat massa, ut pharetra orci. Morbi ultricies iaculis eros, avestibulum nibh suscipit non. In hac habitasse platea dictumst. Fusceinterdum lectus lobortis nisi scelerisque, sed dignissim velit molestie. Aenean in lacus in tortor pharetra pretium vel a ligula. Duis.",
  },
  {
    id: 2,
    title: "Building Amazing",
    image: "https://picsum.photos/350/250",
    alt: "This is not actually an image",
    category: "renovation",
    text: "This is a building that will be built someday if I am lucky, maybe, hopefully. Please!",
    gallery: [
      { id: 1, image: "https://picsum.photos/3500/2000", alt: "image" },
      { id: 2, image: "https://picsum.photos/3500/2001", alt: "image" },
      { id: 3, image: "https://picsum.photos/3500/2002", alt: "image" },
    ],
    galleryText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam utplacerat massa, ut pharetra orci. Morbi ultricies iaculis eros, avestibulum nibh suscipit non. In hac habitasse platea dictumst. Fusceinterdum lectus lobortis nisi scelerisque, sed dignissim velit molestie. Aenean in lacus in tortor pharetra pretium vel a ligula. Duis.",
  },
  {
    id: 3,
    title: "Next  building",
    image: "https://picsum.photos/350/250",
    alt: "This is not actually an image",
    category: "renovation",
    text: "This is the third building in this list",
    gallery: [
      { id: 1, image: "https://picsum.photos/3500/2000", alt: "image" },
      { id: 2, image: "https://picsum.photos/3500/2001", alt: "image" },
      { id: 3, image: "https://picsum.photos/3500/2002", alt: "image" },
    ],
    galleryText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam utplacerat massa, ut pharetra orci. Morbi ultricies iaculis eros, avestibulum nibh suscipit non. In hac habitasse platea dictumst. Fusceinterdum lectus lobortis nisi scelerisque, sed dignissim velit molestie. Aenean in lacus in tortor pharetra pretium vel a ligula. Duis.",
  },
  {
    id: 4,
    title: "Building Invisible",
    image: "https://picsum.photos/350/250",
    alt: "This is not actually an image",
    category: "renovation",
    text: "I should not be able to see this",
    gallery: [
      { id: 1, image: "https://picsum.photos/3500/2000", alt: "image" },
      { id: 2, image: "https://picsum.photos/3500/2001", alt: "image" },
      { id: 3, image: "https://picsum.photos/3500/2002", alt: "image" },
    ],
    galleryText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam utplacerat massa, ut pharetra orci. Morbi ultricies iaculis eros, avestibulum nibh suscipit non. In hac habitasse platea dictumst. Fusceinterdum lectus lobortis nisi scelerisque, sed dignissim velit molestie. Aenean in lacus in tortor pharetra pretium vel a ligula. Duis.",
  },
  {
    id: 5,
    title: "Building Invisible",
    image: "https://picsum.photos/350/250",
    alt: "This is not actually an image",
    category: "residential",
    text: "I should not be able to see this",
    gallery: [
      { id: 1, image: "https://picsum.photos/3500/2000", alt: "image" },
      { id: 2, image: "https://picsum.photos/3500/2001", alt: "image" },
      { id: 3, image: "https://picsum.photos/3500/2002", alt: "image" },
    ],
    galleryText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam utplacerat massa, ut pharetra orci. Morbi ultricies iaculis eros, avestibulum nibh suscipit non. In hac habitasse platea dictumst. Fusceinterdum lectus lobortis nisi scelerisque, sed dignissim velit molestie. Aenean in lacus in tortor pharetra pretium vel a ligula. Duis.",
  },
  {
    id: 6,
    title: "Building Invisible",
    image: "https://picsum.photos/350/250",
    alt: "This is not actually an image",
    category: "residential",
    text: "I should not be able to see this",
    gallery: [
      { id: 1, image: "https://picsum.photos/3500/2000", alt: "image" },
      { id: 2, image: "https://picsum.photos/3500/2001", alt: "image" },
      { id: 3, image: "https://picsum.photos/3500/2002", alt: "image" },
    ],
    galleryText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam utplacerat massa, ut pharetra orci. Morbi ultricies iaculis eros, avestibulum nibh suscipit non. In hac habitasse platea dictumst. Fusceinterdum lectus lobortis nisi scelerisque, sed dignissim velit molestie. Aenean in lacus in tortor pharetra pretium vel a ligula. Duis.",
  },
  {
    id: 7,
    title: "Building Invisible",
    image: "https://picsum.photos/350/250",
    alt: "This is not actually an image",
    category: "residential",
    text: "I should not be able to see this",
    gallery: [
      { id: 1, image: "https://picsum.photos/3500/2000", alt: "image" },
      { id: 2, image: "https://picsum.photos/3500/2001", alt: "image" },
      { id: 3, image: "https://picsum.photos/3500/2002", alt: "image" },
    ],
    galleryText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam utplacerat massa, ut pharetra orci. Morbi ultricies iaculis eros, avestibulum nibh suscipit non. In hac habitasse platea dictumst. Fusceinterdum lectus lobortis nisi scelerisque, sed dignissim velit molestie. Aenean in lacus in tortor pharetra pretium vel a ligula. Duis.",
  },
];

export default projects;
