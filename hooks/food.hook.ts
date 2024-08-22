import { ServiceApi } from "@/api/src/enhanced";

const useFoodHook = () => {

    const [searchFood, {
        data: searchFoodResponse,
        isLoading: searchFoodLoading
    }] = ServiceApi.usePostFoodSearchMutation();
    const searchFoodPrivate = (page: number = 0, pageSize: number = 0) => {
        searchFood({
            searchFoodRequest: {
                page, pageSize
            }
        });
    };

    return {
        searchFood: searchFoodPrivate,
        searchFoodResponse,

        isLoading: searchFoodLoading
    };
};

export default useFoodHook;
