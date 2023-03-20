
export const sortByPriority = (proyects) => {
  const order = proyects
  order.sort((a, b) => {
    const priorities = ['Alta', 'Media', 'Media - Baja', 'Baja', 'Baja Baja'];
    const priorityA = priorities.indexOf(a.PRIORIDAD);
    const priorityB = priorities.indexOf(b.PRIORIDAD);
    return priorityA - priorityB;
  });
  return order;
};

export const sortOldest = (proyects) => {
  let sorted = proyects
  sorted.sort((a, b) => {
    if (a.AÑO < b.AÑO) {
      return -1;
    }
    if (a.AÑO > b.AÑO) {
      return 1;
    }
    return 0;
  });
  return sorted
};

export const sortNewer = (proyects) => {
  let sorted = proyects
  sorted.sort((a, b) => {
    if (a.AÑO > b.AÑO) {
      return -1;
    }
    if (a.AÑO < b.AÑO) {
      return 1;
    }
    return 0;
  });
  return sorted
};

/*  Mobile Filter */
export function filterProyectsByTags(proyects, tags) {
  return proyects.filter((obj) => {
    const allTags = [...obj.CATEGORIA, ...obj.LENGUAJE, ...obj.CARACTERISTICAS];
    return tags.some((tag) => allTags.includes(tag));
  });
}
