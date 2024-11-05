export interface ProductInput {
    name: string;
    en_name: string;
    category: string;
    writer: string;
    publisher: string;
    teacher: string;
    institution: string;
    paper: string;
    keywords: string[];
    image: string;
    file: string;
    pages: string;
    edition: string;
    isbn: string;
    flash: string;
    price: string;
    discount: string;
    discount_unit: string;
    description: string;
    specification: {
        key: string;
        value: string;
    }[];
    visibility: boolean;
}

export interface UpdateSellerInput {
    shop_name: string;
    address: string;
    contact_number: string;
    logo: string;
    banner: string;
}


export interface PaymentMethodInput {
    bank_name: string;
    acc_number: string;
    routing: string;
    branch: string;
    acc_holder_name: string;
    nagad: string;
    bkash: string;
    upay: string;
    rocket: string;
}

export interface WithdrawInput {
    amount: string;
    method: string;
}