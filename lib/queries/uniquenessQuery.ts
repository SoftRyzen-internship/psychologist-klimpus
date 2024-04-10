export const uniquenessQuery = `
query MyQuery {
  allUniquenesses(orderBy: _createdAt_ASC) {
    id
    quantity
    text
  }
}
`;
