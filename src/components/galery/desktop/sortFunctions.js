export const sortByPriority = (element) => {
    const priority = element.dataset.priority;
    const priorityOrder = {
      "Alta": 1,
      "Media": 2,
      "Media - Baja": 3,
      "Baja": 4,
      "Baja Baja": 5,
    };
    // Compare the priorities
    return priorityOrder[priority] || 999; 
  }

 export  const sortByDate = (element) => {
    return element.dataset.created;
  };

export const sortHandlerOptions = (value) => {
  let options = {}
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

  return options
}

export const filterProyects = (proyects, filters ) => {
  let filteredProyects= []
  console.log("filters -->", filters);
    proyects.forEach((item)=> {
      filters.forEach(filter => {
        if(item.CATEGORIA.includes(filter)) filteredProyects.push(item)
        if(item.CARACTERISTICAS.includes(filter)) filteredProyects.push(item)
        if(item.LENGUAJE.includes(filter)) filteredProyects.push(item)
      })
    });
    return filteredProyects
}
