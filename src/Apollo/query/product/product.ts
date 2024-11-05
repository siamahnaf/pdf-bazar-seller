import { gql } from "@/Apollo/types";

export const ADD_PRODUCT = gql(`
mutation addProduct($productDto: ProductDto!) {
  addProduct(productDto: $productDto) {
    message
  }
}
`);


export const PRODUCT_LIST = gql(`
query getOwnProducts($searchDto: SearchDto!) {
  getOwnProducts(searchDto: $searchDto) {
    results {
      id
      slug
      name
      category {
        id
        name
      }
      writer {
        id
        name
      }
      image
      price
      is_approved
      total_price
    }
    meta {
      itemCount
      totalItems
      itemsPerPage
      totalPages
      currentPage
    }
  }
}
`);

export const DELETE_PRODUCT = gql(`
mutation deleteProduct($deleteProductId: Float!) {
  deleteProduct(id: $deleteProductId) {
    message
  }
}
`);

export const GET_PRODUCT = gql(`
query getOwnProduct($slug: String!) {
  getOwnProduct(slug: $slug) {
    id
    name
    en_name
    category {
      id
      name
    }
    writer {
      id
      name
    }
    publisher {
      id
      name
    }
    teacher {
      id
      name
    }
    institution {
      id
      name
    }
    paper {
      id
      name
    }
    keywords
    image
    file
    pages
    edition
    isbn
    flash {
      id
      title
    }
    price
    discount
    discount_unit
    description
    specification {
      key
      value
    }
    visibility
  }
}
`);

export const UPDATE_PRODUCT = gql(`
mutation updateProduct($productDto: ProductDto!, $updateProductId: Float!) {
  updateProduct(productDto: $productDto, id: $updateProductId) {
    message
  }
}
`);
