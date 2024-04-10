export const consultancyPlatesQuery = `
query MyQuery {
  allPlates(orderBy: _createdAt_ASC) {
    id
    format
    frequency
    time
  }
}
`;
