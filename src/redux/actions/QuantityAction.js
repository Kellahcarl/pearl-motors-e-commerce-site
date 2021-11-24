 import { INCREMENT,DECREMENT } from "../types";
export const increment = (id) => {
    return {
        type : INCREMENT,
        id
    };
};

export const decrement = (id) => {
    return {
        type : DECREMENT,
        id
    };
};