const fill = (coll, value, start = 0, end = coll.length) => {
  const actualEnd = Math.min(end, coll.length);
  for (let i = start; i < actualEnd; i++) {
    coll[i] = value;
  }
  return coll;
};
export default fill;
