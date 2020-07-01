const baseClasses = ['position', 'className', 'display'];

export const classObjToString = (obj: Record<string, string | boolean | undefined>) => {
  let classes = '';
  Object.keys(obj).forEach((className) => {
    if (baseClasses.includes(className) && obj[className]) {
      classes += `${obj[className]} `;
    } else if (typeof obj[className] === 'string') {
      classes += `${className}-${obj[className]} `;
    } else if (typeof obj[className] === 'boolean' && obj[className]) {
      classes += `${className} `;
    }
  });

  return classes;
};

export default {};
