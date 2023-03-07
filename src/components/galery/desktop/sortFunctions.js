export const sortByPriority = (element) => {
    // Define the order of priorities
    const priority = element.dataset.priority;
    const priorityOrder = {
      "Alta": 1,
      "Media": 2,
      "Media - Baja": 3,
      "Baja": 4,
      "Baja Baja": 5,
    };
    // Compare the priorities
    return priorityOrder[priority] || 999; // If priority is not defined, sort it last
  }

 export  const sortByDate = (element) => {
    return element.dataset.created;
  };