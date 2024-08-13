import { api } from "./api";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getLookupStatus: build.query<
      GetLookupStatusApiResponse,
      GetLookupStatusApiRequest
    >({
      query: () => ({ url: `/Lookup/Status` }),
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
export type GetLookupStatusApiResponse =
  /** status 200 Success */ LookupDtoRead[];
export type GetLookupStatusApiRequest = void;
export type PutOrderUpsertApiResponse = /** status 200 Success */ ResponseDto;
export type PutOrderUpsertApiRequest = {
  upsertOrderRequest: UpsertOrderRequest;
};
export type PostOrderSearchApiResponse =
  /** status 200 Success */ SearchOrderResponse;
export type PostOrderSearchApiRequest = {
  searchOrderRequest: SearchOrderRequest;
};
export type GetOrderGetByIdApiResponse = /** status 200 Success */ OrderDto;
export type GetOrderGetByIdApiRequest = {
  id: string;
};
export type DeleteOrderDeleteByIdApiResponse =
  /** status 200 Success */ ResponseDto;
export type DeleteOrderDeleteByIdApiRequest = {
  id: string;
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
export type ResponseDto = {
  status?: boolean;
  detail?: string | null;
};
export type UpsertOrderRequest = {
  id?: string | null;
};
export type OrderDto = {
  code?: string;
  status?: string | null;
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
export type SearchOrderRequest = {
  page?: number;
  pageSize?: number;
  deleted?: boolean | null;
};
export const {
  useGetLookupStatusQuery,
  useLazyGetLookupStatusQuery,
  usePutOrderUpsertMutation,
  usePostOrderSearchMutation,
  useGetOrderGetByIdQuery,
  useLazyGetOrderGetByIdQuery,
  useDeleteOrderDeleteByIdMutation,
} = injectedRtkApi;
