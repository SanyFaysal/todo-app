export const getCategoriesTodo = (todoList) => {
  const categoryArray = [];
  todoList?.forEach((item) => {
    const existingCategory = categoryArray.find(
      (category) => category.category === item.category
    );

    if (existingCategory) {
      existingCategory.allTodos.push(item);
    } else {
      categoryArray.push({ category: item.category, allTodos: [item] });
    }
  });

  return categoryArray;
};
