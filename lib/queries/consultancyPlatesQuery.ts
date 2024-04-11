export const consultancyPlatesQuery = `
query MyQuery {
  consultancyPlate {
    plates {
      id
      format
      frequency
      duration
    }
  }
}
`;
