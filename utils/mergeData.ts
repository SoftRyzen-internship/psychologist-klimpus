export const mergeData = (datoData: any, staticData: any) => {
  const result = staticData.map((staticItem: any) =>
    Object.assign(
      staticItem,
      datoData.find((datoItem: any) => datoItem.text === staticItem.text),
    ),
  );

  return result;
};
