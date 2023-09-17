
export type MappingListObj = {
  searchString: string;
  class: string;
}

export const getDynamicClass = (mappingList: MappingListObj[], searchStr: string): string => {
  const matchingMapping = mappingList.find((obj: MappingListObj) => obj.searchString === searchStr);

  return matchingMapping
    ? matchingMapping.class
    : "";
}