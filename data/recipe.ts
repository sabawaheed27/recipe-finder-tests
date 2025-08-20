export type Recipe = {
  id: number;
  name: string;
  description?: string;
  ingredients: string[];
  instructions: string;
};

export const recipes: Recipe[] = [
  { id: 1, name: 'Spaghetti Bolognese', description: 'Classic Italian pasta', ingredients: ['pasta', 'tomato', 'beef', 'onion', 'garlic'], instructions: 'Cook pasta. Simmer sauce with beef, tomato, and spices. Combine and serve.'

   },
  { id: 2, name: 'Chicken Curry', description: 'Warm & spicy', ingredients: ['chicken', 'curry powder', 'coconut milk', 'onion'], instructions: 'Brown chicken with onion. Add spices and coconut milk. Simmer until cooked.' 

  },
  { id: 3, name: 'Avocado Toast', description: 'Quick breakfast', ingredients: ['bread', 'avocado', 'lemon juice', 'salt', 'pepper'], instructions: 'Toast bread. Smash avocado with lemon juice, salt, and pepper. Spread on toast.'

   },
  { id: 4, name: 'Pancakes', description: 'Fluffy pancakes', ingredients: ['flour', 'milk', 'egg', 'butter', 'sugar'], instructions: 'Mix batter. Fry on a buttered pan until golden on both sides.' 

  },
  { id: 5, name: 'Caesar Salad', description: 'Fresh & crunchy', ingredients: ['lettuce', 'croutons', 'parmesan', 'Caesar dressing'], instructions: 'Toss lettuce, croutons, and parmesan with dressing.'
    
  },
  { id: 6, name: 'Beef Tacos', description: 'Mexican street style', ingredients: ['tortillas', 'beef', 'onion', 'cilantro', 'lime'], instructions: 'Cook beef with spices. Fill tortillas and top with onion, cilantro, and lime.' 

  },
  { id: 7, name: 'Vegetable Stir Fry', description: 'Healthy & colorful', ingredients: ['broccoli', 'carrot', 'bell pepper', 'soy sauce', 'ginger'], instructions: 'Stir fry vegetables with soy sauce and ginger until crisp-tender.'

   },
  { id: 8, name: 'Margarita Pizza', description: 'Italian classic', ingredients: ['pizza dough', 'tomato sauce', 'mozzarella', 'basil'], instructions: 'Spread sauce on dough. Add cheese and basil. Bake until golden.'

   },
  { id: 9, name: 'Lentil Soup', description: 'Comforting & hearty', ingredients: ['lentils', 'carrot', 'celery', 'onion', 'spices'], instructions: 'Simmer lentils with vegetables and spices until soft.' 
    
  },
  { id: 10, name: 'Berry Smoothie', description: 'Refreshing drink', ingredients: ['berries', 'banana', 'yogurt', 'honey'], instructions: 'Blend all ingredients until smooth and serve chilled.' }
];