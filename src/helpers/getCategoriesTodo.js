export const getCategoriesTodo = (todoList) => {
  const categoryArray = [];
  todoList?.forEach((item, index) => {
    const existingCategory = categoryArray.find(
      (category) => category.category === item.category
    );

    if (existingCategory) {
      existingCategory.allTodos.push({ ...item, index });
    } else {
      categoryArray.push({
        category: item.category,
        allTodos: [{ ...item, index }],
      });
    }
  });

  return categoryArray;
};
