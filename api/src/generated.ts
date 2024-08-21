import { api } from "./api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    putCustomerUpsert: build.mutation<
      PutCustomerUpsertApiResponse,
      PutCustomerUpsertApiRequest
    >({
      query: () => ({ url: `/Customer/Upsert`, method: "PUT" }),
    }),
    postFoodSearch: build.mutation<
      PostFoodSearchApiResponse,
      PostFoodSearchApiRequest
    >({
      query: (queryArg) => ({
        url: `/Food/Search`,
        method: "POST",
        body: queryArg.searchFoodRequest,
      }),
    }),
    getLookupStatus: build.query<
      GetLookupStatusApiResponse,
      GetLookupStatusApiRequest
    >({
      query: () => ({ url: `/Lookup/Status` }),
    }),
    getLookupFoodType: build.query<
      GetLookupFoodTypeApiResponse,
      GetLookupFoodTypeApiRequest
    >({
      query: () => ({ url: `/Lookup/FoodType` }),
    }),
    getLookupIngredient: build.query<
      GetLookupIngredientApiResponse,
      GetLookupIngredientApiRequest
    >({
      query: () => ({ url: `/Lookup/Ingredient` }),
    }),
    putOrderUpsert: build.mutation<
      PutOrderUpsertApiResponse,
      PutOrderUpsertApiRequest
    >({
      query: (queryArg) => ({
        url: `/Order/Upsert`,
        method: "PUT",
        body: queryArg.upsertOrderRequest,
      }),
    }),
    postOrderSearch: build.mutation<
      PostOrderSearchApiResponse,
      PostOrderSearchApiRequest
    >({
      query: (queryArg) => ({
        url: `/Order/Search`,
        method: "POST",
        body: queryArg.searchOrderRequest,
      }),
    }),
    getOrderGetById: build.query<
      GetOrderGetByIdApiResponse,
      GetOrderGetByIdApiRequest
    >({
      query: (queryArg) => ({ url: `/Order/Get/${queryArg.id}` }),
    }),
    deleteOrderDeleteById: build.mutation<
      DeleteOrderDeleteByIdApiResponse,
      DeleteOrderDeleteByIdApiRequest
    >({
      query: (queryArg) => ({
        url: `/Order/Delete/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as ServiceApiBase };
export type PutCustomerUpsertApiResponse =
  /** status 200 Success */ ResponseDto;
export type PutCustomerUpsertApiRequest = void;
export type PostFoodSearchApiResponse =
  /** status 200 Success */ SearchFoodResponseRead;
export type PostFoodSearchApiRequest = {
  searchFoodRequest: SearchFoodRequest;
};
export type GetLookupStatusApiResponse =
  /** status 200 Success */ LookupDtoRead[];
export type GetLookupStatusApiRequest = void;
export type GetLookupFoodTypeApiResponse =
  /** status 200 Success */ LookupDtoRead[];
export type GetLookupFoodTypeApiRequest = void;
export type GetLookupIngredientApiResponse =
  /** status 200 Success */ LookupDtoRead[];
export type GetLookupIngredientApiRequest = void;
export type PutOrderUpsertApiResponse = /** status 200 Success */ ResponseDto;
export type PutOrderUpsertApiRequest = {
  upsertOrderRequest: UpsertOrderRequest;
};
export type PostOrderSearchApiResponse =
  /** status 200 Success */ SearchOrderResponseRead;
export type PostOrderSearchApiRequest = {
  searchOrderRequest: SearchOrderRequest;
};
export type GetOrderGetByIdApiResponse = /** status 200 Success */ OrderDtoRead;
export type GetOrderGetByIdApiRequest = {
  id: string;
};
export type DeleteOrderDeleteByIdApiResponse =
  /** status 200 Success */ ResponseDto;
export type DeleteOrderDeleteByIdApiRequest = {
  id: string;
};
export type ResponseDto = {
  status?: boolean;
  detail?: string | null;
};
export type LookupDto = {
  code?: string | null;
  description?: string | null;
};
export type LookupDtoRead = {
  code?: string | null;
  description?: string | null;
  codeAndDescription?: string | null;
};
export type FoodDto = {
  code?: string;
  type?: string | null;
  name?: string | null;
  description?: string | null;
  price?: number;
  ingredients?: LookupDto[] | null;
};
export type FoodDtoRead = {
  code?: string;
  type?: string | null;
  name?: string | null;
  description?: string | null;
  price?: number;
  ingredients?: LookupDtoRead[] | null;
};
export type SearchFoodResponse = {
  page?: number;
  pageSize?: number;
  totalItems?: number;
  foods?: FoodDto[] | null;
};
export type SearchFoodResponseRead = {
  page?: number;
  pageSize?: number;
  totalItems?: number;
  foods?: FoodDtoRead[] | null;
};
export type SearchFoodRequest = {
  page?: number;
  pageSize?: number;
};
export type UpsertOrderRequest = {
  id?: string | null;
  status?: string | null;
};
export type OrderFoodDto = {
  food?: FoodDto;
  amount?: number;
};
export type OrderFoodDtoRead = {
  food?: FoodDtoRead;
  amount?: number;
};
export type OrderDto = {
  code?: string;
  status?: string | null;
  foods?: OrderFoodDto[] | null;
  creationUser?: string | null;
  creationDate?: string;
  modificationDate?: string | null;
  modificationUser?: string | null;
  deletionDate?: string | null;
  deletionUser?: string | null;
  deleted?: boolean;
};
export type OrderDtoRead = {
  code?: string;
  status?: string | null;
  foods?: OrderFoodDtoRead[] | null;
  creationUser?: string | null;
  creationDate?: string;
  modificationDate?: string | null;
  modificationUser?: string | null;
  deletionDate?: string | null;
  deletionUser?: string | null;
  deleted?: boolean;
};
export type SearchOrderResponse = {
  page?: number;
  pageSize?: number;
  totalItems?: number;
  orders?: OrderDto[] | null;
};
export type SearchOrderResponseRead = {
  page?: number;
  pageSize?: number;
  totalItems?: number;
  orders?: OrderDtoRead[] | null;
};
export type SearchOrderRequest = {
  page?: number;
  pageSize?: number;
  status?: string | null;
  deleted?: boolean | null;
};
export const {
  usePutCustomerUpsertMutation,
  usePostFoodSearchMutation,
  useGetLookupStatusQuery,
  useLazyGetLookupStatusQuery,
  useGetLookupFoodTypeQuery,
  useLazyGetLookupFoodTypeQuery,
  useGetLookupIngredientQuery,
  useLazyGetLookupIngredientQuery,
  usePutOrderUpsertMutation,
  usePostOrderSearchMutation,
  useGetOrderGetByIdQuery,
  useLazyGetOrderGetByIdQuery,
  useDeleteOrderDeleteByIdMutation,
} = injectedRtkApi;
