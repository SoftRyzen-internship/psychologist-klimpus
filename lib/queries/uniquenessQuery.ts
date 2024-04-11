export const uniquenessQuery = `
query MyQuery {
  uniqueness {
    cards {
        id
        quantity
        text
      }
    }
  }
`;
