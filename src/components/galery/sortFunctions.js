/*  shufflejs sort functions */
export const sortByPriority = (element) => {
  const priority = element.dataset.priority;
  const priorityOrder = {
    Alta: 1,
    Media: 2,
    "Media - Baja": 3,
    Baja: 4,
    "Baja Baja": 5,
  };
  // Compare the priorities
  return priorityOrder[priority] || 999;
};

export const sortByDate = (element) => {
  return element.dataset.created;
};

export const sortHandlerOptions = (value) => {
  let options = {};
  switch (value) {
    case "newer":
      options = {
        reverse: true,
        by: sortByDate,
      };
      break;
    case "older":
      options = {
        reverse: false,
        by: sortByDate,
      };
      break;
    case "relevant":
      options = {
        by: sortByPriority,
      };
      break;

    default:
      options = {};
  }

  return options;
};

/*  Mobile Filter */
export function filterProyectsByTags(proyects, tags) {
  return proyects.filter((obj) => {
    const allTags = [...obj.CATEGORIA, ...obj.LENGUAJE, ...obj.CARACTERISTICAS];
    return tags.some((tag) => allTags.includes(tag));
  });
}
