export interface OrderI {
    id: number;
    restaurantName: string;
    restaurantAddress: string;
    items: {
        name: string;
        quantity: number;
        price: number;
        image: string;
    };
}