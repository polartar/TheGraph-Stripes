/**
 * Helper function to generate a className. You can either supply a list
 * of names and we will filter out those that are not strings, or you can
 * provide a hash with boolean values and we will build a className out of
 * the hash keys.
 * 
 * Usage:
 * 
 *    <div className={classes('some-base-class', classNameFromVariable)}>
 * 
 *    <div className={classes('base-class', {'variable-class': shouldApplyVariableClass})}>
 * 
 */
 const classes = (...list: any[]): string => {
  if (list.length === 1 && Object(list[0]) === list[0]) {
    return Object
      .keys(list[0])
      .filter(key => {
        return list[0][key] === true;
      })
      .join(' ');
  }

  return list
    .map(item => {
      if (Object(item) === item) {
        return classes(item);
      }
      return item;
    })
    .filter(item => typeof(item) === 'string')
    .filter(item => item.length > 0)
    .join(' ');
}

export default classes;
