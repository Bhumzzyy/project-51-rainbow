export const blogTheme = {
  title: "The Sweet Side of Life",
  description:
    "Stories, flavours, memories and little moments that make life sweeter.",
};

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  coverImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-little-happiness-called-ice-cream",
    title: "The Little Happiness Called Ice Cream",
    category: "Sweet Moments",
    excerpt:
      "Happiness doesn't always need a big reason. Sometimes, it's just a scoop of your favourite ice cream on an ordinary day. From the first taste to the last bite, ice cream has a beautiful way of turning simple moments into unforgettable memories.",
  },
  {
    slug: "summer-in-india-one-scoop-at-a-time",
    title: "Summer in India, One Scoop at a Time",
    category: "Sweet Moments",
    excerpt:
      "Indian summers bring sunshine, holidays and the irresistible craving for something cold. Whether it's a refreshing fruit flavour or a rich chocolate treat, ice cream makes those warm afternoons a little more enjoyable.",
  },
  {
    slug: "a-taste-of-childhood",
    title: "A Taste of Childhood: Why Ice Cream Memories Last Forever",
    category: "Sweet Moments",
    excerpt:
      "Remember running towards the ice cream cart after hearing its familiar bell? Some memories are connected to flavours we never forget. Ice cream has always been more than a dessert; it's a little piece of childhood that stays with us.",
  },
  {
    slug: "ice-cream-is-better-together",
    title: "The More, The Merrier: Ice Cream Is Better Together",
    category: "Sweet Moments",
    excerpt:
      "Some things are simply better when shared. A family dessert night, a quick catch-up with friends or a spontaneous evening outing becomes more special with ice cream. Because the sweetest memories are often made together.",
  },
  {
    slug: "when-traditional-meets-trendy",
    title: "When Traditional Meets Trendy: The New Era of Desserts",
    category: "Flavour Stories",
    excerpt:
      "The dessert world is constantly evolving. Traditional ingredients are finding their way into exciting new creations, bringing together familiar tastes and modern presentation. Think crunchy kunafa, creamy pistachio and indulgent brownie combinations.",
  },
  {
    slug: "mango-magic",
    title: "Mango Magic: Celebrating India's Favourite Summer Fruit",
    category: "Flavour Stories",
    excerpt:
      "There is something special about the arrival of mango season. Its natural sweetness, vibrant colour and juicy flavour make it a favourite dessert ingredient. Mango ice cream brings together the nostalgia of summer and the joy of a refreshing treat.",
  },
  {
    slug: "for-the-love-of-chocolate",
    title: "For the Love of Chocolate: A Flavour That Never Gets Old",
    category: "Flavour Stories",
    excerpt:
      "From smooth chocolate scoops to crunchy chocolate-chip combinations, this flavour has a special place in every dessert lover's heart. Rich, comforting and endlessly versatile, chocolate proves that some classics never go out of style.",
  },
  {
    slug: "the-royal-charm-of-rose-falooda",
    title: "The Royal Charm of Rose Falooda",
    category: "Flavour Stories",
    excerpt:
      "Rose falooda is a celebration of textures and flavours. Fragrant rose syrup, silky vermicelli, chilled milk and creamy ice cream come together in a dessert that feels both refreshing and nostalgic. Every spoonful offers a little taste of tradition.",
  },
  {
    slug: "discovering-black-currant",
    title: "Beyond the Ordinary: Discovering Black Currant",
    category: "Flavour Stories",
    excerpt:
      "Not every dessert needs to be chocolate or vanilla. Black currant brings a distinctive fruity flavour and beautiful colour to the dessert experience. It's a refreshing choice for those who love exploring something different.",
  },
  {
    slug: "why-toppings-make-every-scoop-special",
    title: "The Crunch Factor: Why Toppings Make Every Scoop Special",
    category: "Flavour Stories",
    excerpt:
      "Sometimes, the magic is in the little details. Chopped almonds, crunchy pistachios, cashews and chocolate chips can transform a simple scoop into a layered dessert experience. The perfect combination of smoothness and crunch makes every bite interesting.",
  },
  {
    slug: "from-ingredients-to-indulgence",
    title: "From Ingredients to Indulgence: The Journey of Ice Cream",
    category: "Behind the Scoop",
    excerpt:
      "Every delicious ice cream begins with ingredients that come together to create something special. From selecting flavours to blending ingredients and achieving the right creamy texture, the process brings creativity and food craftsmanship together.",
  },
  {
    slug: "what-makes-ice-cream-so-creamy",
    title: "What Makes Ice Cream So Creamy?",
    category: "Behind the Scoop",
    excerpt:
      "That smooth, velvety texture is an important part of the ice cream experience. The balance of ingredients, freezing process and incorporation of air all contribute to its consistency. It's a fascinating combination of food science and dessert-making.",
  },
  {
    slug: "the-art-of-creating-a-new-flavour",
    title: "The Art of Creating a New Ice Cream Flavour",
    category: "Behind the Scoop",
    excerpt:
      "Creating a new flavour is all about experimentation. Different ingredients, textures and combinations are explored until they come together beautifully. Sometimes, the most unexpected combinations become everyone's new favourite.",
  },
  {
    slug: "cone-or-cup",
    title: "Cone or Cup? The Great Ice Cream Debate",
    category: "Behind the Scoop",
    excerpt:
      "Are you team crispy waffle cone or team classic cup? While one gives you that satisfying crunch, the other lets you enjoy every spoonful without distractions. There is no wrong answer when the ice cream is delicious.",
  },
  {
    slug: "surats-love-affair-with-sweet-treats",
    title: "Surat's Love Affair with Sweet Treats",
    category: "Dessert Culture",
    excerpt:
      "Surat is a city that celebrates food with passion. From traditional sweets to modern dessert experiments, its food culture is full of flavour and creativity. Ice cream naturally finds its place in this love for indulgence, bringing people together one scoop at a time.",
  },
  {
    slug: "every-celebration-deserves-a-scoop",
    title: "Every Celebration Deserves a Scoop of Happiness",
    category: "Dessert Culture",
    excerpt:
      "Birthdays, festivals, family gatherings and little achievements deserve something sweet. Ice cream adds a fun and refreshing touch to celebrations, making dessert time something everyone looks forward to.",
  },
  {
    slug: "dessert-trends-everyone-is-talking-about",
    title: "The Dessert Trends Everyone Is Talking About",
    category: "Dessert Culture",
    excerpt:
      "Modern desserts are becoming more creative than ever. From loaded brownies and elaborate milkshakes to fusion flavours and visually exciting combinations, dessert lovers are always looking forward to the next big indulgence.",
  },
  {
    slug: "five-occasions-ice-cream-is-always-a-good-idea",
    title: "Five Occasions When Ice Cream Is Always a Good Idea",
    category: "Dessert Culture",
    excerpt:
      "Movie nights, weekend outings, family dinners, celebrations and unexpected cravings: there is always an occasion for ice cream. Sometimes, you don't even need an occasion. A favourite flavour is reason enough.",
  },
  {
    slug: "eating-with-your-eyes",
    title: "Eating With Your Eyes: The Beauty of a Perfect Dessert",
    category: "Dessert Culture",
    excerpt:
      "Before the first bite, there is always that moment when a dessert catches your eye. Colours, textures, toppings and presentation all contribute to the experience. A beautifully presented dessert makes the anticipation just as enjoyable as the taste.",
  },
  {
    slug: "life-is-short-make-it-sweeter",
    title: "Life Is Short, Make It a Little Sweeter",
    category: "Sweet Moments",
    excerpt:
      "Life is made up of little experiences that deserve to be enjoyed. A spontaneous dessert outing, trying a new flavour or sharing a scoop with someone special can make an ordinary day memorable. So take a moment, pick your favourite flavour and enjoy the sweeter side of life.",
  },
];
