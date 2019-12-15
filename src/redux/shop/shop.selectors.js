import { createSelector } from "reselect";

// For an array
// const COLLECTION_ID_MAP = {
//   hats: 1,
//   sneakers: 2,
//   jackets: 3,
//   womens: 4,
//   mens: 5
// };

export const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shopCollections => shopCollections.collections
);

export const selectCollectionsForPreviewArray = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

//For an array
// export const selectCollection = collectionUrlParam =>
//   createSelector([selectCollections], collections =>
//     collections.find(item => item.id === COLLECTION_ID_MAP[collectionUrlParam])
//   );

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => (collections ? collections[collectionUrlParam] : null)
  );

  export const selectIsCollectionFetching = createSelector(
    [selectShop],
    isCollectionsFetching => isCollectionsFetching.isFetching
  )

  export const selectIsCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
  );
