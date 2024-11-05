/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\nmutation signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    message\n  }\n}\n": types.SignupDocument,
    "\nmutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {\n  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {\n    message\n    token\n  }\n}\n": types.VerifyPhoneDocument,
    "\nmutation resendOtp($phone: String!) {\n  resendOtp(phone: $phone) {\n    message\n  }\n}\n": types.ResendOtpDocument,
    "\nquery getProfile {\n  getProfile {\n    id\n    name\n    phone\n    email\n    avatar\n    is_verified\n    role\n    seller {\n      id\n      type\n      owner_name\n      contact_number\n      email\n      shop_name\n      slug\n      address\n      organization_name\n      trade_license\n      tin\n      logo\n      banner\n      need_review\n      method {\n        id\n        bank_name\n        acc_number\n        routing\n        branch\n        acc_holder_name\n        bkash\n        nagad\n        upay\n        rocket\n        updated_at\n        created_at\n      }\n    }\n  }\n}\n": types.GetProfileDocument,
    "\nmutation updateSeller($updateSellerDto: UpdateSellerDto!) {\n  updateSeller(updateSellerDto: $updateSellerDto) {\n    message\n  }\n}\n": types.UpdateSellerDocument,
    "\nmutation addPaymentMethod($methodDto: MethodDto!) {\n  addSellerPaymentMethod(methodDto: $methodDto) {\n    message\n  }\n}\n": types.AddPaymentMethodDocument,
    "\nquery getAnalytics {\n  getSellerAnalytics {\n    totalIncome\n    totalIncomeWithoutCharge\n    totalDue\n    totalWithdraw\n    totalProduct\n    totalSale\n    totalOrder\n    totalReview\n  }\n}\n": types.GetAnalyticsDocument,
    "\nquery getCategories($searchDto: SearchDto!) {\n  getCategories(searchDto: $searchDto) {\n    results {\n      id\n      name\n      icon\n      slug\n      position\n      is_top\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetCategoriesDocument,
    "\nquery getInstitutions($searchDto: SearchDto!) {\n  getInstitutions(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetInstitutionsDocument,
    "\nquery getSellerOrders($searchDto: SearchDto!) {\n  getSellerOrders(searchDto: $searchDto) {\n    results {\n      id\n      orderId\n      products {\n        id\n        name\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        seller {\n          id\n          shop_name\n        }\n        total_price\n        image\n      }\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetSellerOrdersDocument,
    "\nquery getPapers($searchDto: SearchDto!) {\n  getPapers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetPapersDocument,
    "\nmutation addProduct($productDto: ProductDto!) {\n  addProduct(productDto: $productDto) {\n    message\n  }\n}\n": types.AddProductDocument,
    "\nquery getOwnProducts($searchDto: SearchDto!) {\n  getOwnProducts(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      category {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      image\n      price\n      is_approved\n      total_price\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetOwnProductsDocument,
    "\nmutation deleteProduct($deleteProductId: Float!) {\n  deleteProduct(id: $deleteProductId) {\n    message\n  }\n}\n": types.DeleteProductDocument,
    "\nquery getOwnProduct($slug: String!) {\n  getOwnProduct(slug: $slug) {\n    id\n    name\n    en_name\n    category {\n      id\n      name\n    }\n    writer {\n      id\n      name\n    }\n    publisher {\n      id\n      name\n    }\n    teacher {\n      id\n      name\n    }\n    institution {\n      id\n      name\n    }\n    paper {\n      id\n      name\n    }\n    keywords\n    image\n    file\n    pages\n    edition\n    isbn\n    flash {\n      id\n      title\n    }\n    price\n    discount\n    discount_unit\n    description\n    specification {\n      key\n      value\n    }\n    visibility\n  }\n}\n": types.GetOwnProductDocument,
    "\nmutation updateProduct($productDto: ProductDto!, $updateProductId: Float!) {\n  updateProduct(productDto: $productDto, id: $updateProductId) {\n    message\n  }\n}\n": types.UpdateProductDocument,
    "\nquery getPublishers($searchDto: SearchDto!) {\n  getPublishers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetPublishersDocument,
    "\nquery getReviewBySeller($searchDto: SearchDto!) {\n  getReviewBySeller(searchDto: $searchDto) {\n    results {\n      id\n      user {\n        id\n        name\n        phone\n        email\n      }\n      product {\n        id\n        name\n        slug\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        image\n        total_price\n        publisher {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        institution {\n          id\n          name\n        }\n        paper {\n          id\n          name\n        }\n      }\n      comment\n      reply\n      rating\n      publish\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetReviewBySellerDocument,
    "\nmutation replyReview($reviewReplyDto: ReviewReplyDto!) {\n  replyReview(reviewReplyDto: $reviewReplyDto) {\n    message\n  }\n}\n": types.ReplyReviewDocument,
    "\nquery getSales($searchDto: SearchDto!) {\n  getSales(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      title\n      image\n      start_on\n      expires_on\n      discount\n      discount_unit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetSalesDocument,
    "\nquery getRunningSale($searchDto: SearchDto!) {\n  getRunningSales(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      title\n      image\n      start_on\n      expires_on\n      discount\n      discount_unit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetRunningSaleDocument,
    "\nquery getTeachers($searchDto: SearchDto!) {\n  getTeachers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      description\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetTeachersDocument,
    "\nmutation addWithdrawRequest($withdrawDto: WithdrawDto!) {\n  addWithdrawRequest(withdrawDto: $withdrawDto) {\n    message\n  }\n}\n": types.AddWithdrawRequestDocument,
    "\nmutation confirmWithdraw($confirmPaymentId: Float!) {\n  confirmPayment(id: $confirmPaymentId) {\n    message\n  }\n}\n": types.ConfirmWithdrawDocument,
    "\nquery getWithdrawBySeller($searchDto: SearchDto!) {\n  getWithdrawBySeller(searchDto: $searchDto) {\n    results {\n      id\n      amount\n      released_by {\n        id\n        name\n      }\n      method\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetWithdrawBySellerDocument,
    "\nquery getWriters($searchDto: SearchDto!) {\n  getWriters(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n      level\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n": types.GetWritersDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation signup($signupInput: SignupInput!) {\n  signup(signupInput: $signupInput) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {\n  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {\n    message\n    token\n  }\n}\n"): (typeof documents)["\nmutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {\n  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {\n    message\n    token\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation resendOtp($phone: String!) {\n  resendOtp(phone: $phone) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation resendOtp($phone: String!) {\n  resendOtp(phone: $phone) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getProfile {\n  getProfile {\n    id\n    name\n    phone\n    email\n    avatar\n    is_verified\n    role\n    seller {\n      id\n      type\n      owner_name\n      contact_number\n      email\n      shop_name\n      slug\n      address\n      organization_name\n      trade_license\n      tin\n      logo\n      banner\n      need_review\n      method {\n        id\n        bank_name\n        acc_number\n        routing\n        branch\n        acc_holder_name\n        bkash\n        nagad\n        upay\n        rocket\n        updated_at\n        created_at\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery getProfile {\n  getProfile {\n    id\n    name\n    phone\n    email\n    avatar\n    is_verified\n    role\n    seller {\n      id\n      type\n      owner_name\n      contact_number\n      email\n      shop_name\n      slug\n      address\n      organization_name\n      trade_license\n      tin\n      logo\n      banner\n      need_review\n      method {\n        id\n        bank_name\n        acc_number\n        routing\n        branch\n        acc_holder_name\n        bkash\n        nagad\n        upay\n        rocket\n        updated_at\n        created_at\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateSeller($updateSellerDto: UpdateSellerDto!) {\n  updateSeller(updateSellerDto: $updateSellerDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateSeller($updateSellerDto: UpdateSellerDto!) {\n  updateSeller(updateSellerDto: $updateSellerDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addPaymentMethod($methodDto: MethodDto!) {\n  addSellerPaymentMethod(methodDto: $methodDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addPaymentMethod($methodDto: MethodDto!) {\n  addSellerPaymentMethod(methodDto: $methodDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getAnalytics {\n  getSellerAnalytics {\n    totalIncome\n    totalIncomeWithoutCharge\n    totalDue\n    totalWithdraw\n    totalProduct\n    totalSale\n    totalOrder\n    totalReview\n  }\n}\n"): (typeof documents)["\nquery getAnalytics {\n  getSellerAnalytics {\n    totalIncome\n    totalIncomeWithoutCharge\n    totalDue\n    totalWithdraw\n    totalProduct\n    totalSale\n    totalOrder\n    totalReview\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getCategories($searchDto: SearchDto!) {\n  getCategories(searchDto: $searchDto) {\n    results {\n      id\n      name\n      icon\n      slug\n      position\n      is_top\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getCategories($searchDto: SearchDto!) {\n  getCategories(searchDto: $searchDto) {\n    results {\n      id\n      name\n      icon\n      slug\n      position\n      is_top\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getInstitutions($searchDto: SearchDto!) {\n  getInstitutions(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getInstitutions($searchDto: SearchDto!) {\n  getInstitutions(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getSellerOrders($searchDto: SearchDto!) {\n  getSellerOrders(searchDto: $searchDto) {\n    results {\n      id\n      orderId\n      products {\n        id\n        name\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        seller {\n          id\n          shop_name\n        }\n        total_price\n        image\n      }\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getSellerOrders($searchDto: SearchDto!) {\n  getSellerOrders(searchDto: $searchDto) {\n    results {\n      id\n      orderId\n      products {\n        id\n        name\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        seller {\n          id\n          shop_name\n        }\n        total_price\n        image\n      }\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getPapers($searchDto: SearchDto!) {\n  getPapers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getPapers($searchDto: SearchDto!) {\n  getPapers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addProduct($productDto: ProductDto!) {\n  addProduct(productDto: $productDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addProduct($productDto: ProductDto!) {\n  addProduct(productDto: $productDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getOwnProducts($searchDto: SearchDto!) {\n  getOwnProducts(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      category {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      image\n      price\n      is_approved\n      total_price\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getOwnProducts($searchDto: SearchDto!) {\n  getOwnProducts(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      category {\n        id\n        name\n      }\n      writer {\n        id\n        name\n      }\n      image\n      price\n      is_approved\n      total_price\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation deleteProduct($deleteProductId: Float!) {\n  deleteProduct(id: $deleteProductId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation deleteProduct($deleteProductId: Float!) {\n  deleteProduct(id: $deleteProductId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getOwnProduct($slug: String!) {\n  getOwnProduct(slug: $slug) {\n    id\n    name\n    en_name\n    category {\n      id\n      name\n    }\n    writer {\n      id\n      name\n    }\n    publisher {\n      id\n      name\n    }\n    teacher {\n      id\n      name\n    }\n    institution {\n      id\n      name\n    }\n    paper {\n      id\n      name\n    }\n    keywords\n    image\n    file\n    pages\n    edition\n    isbn\n    flash {\n      id\n      title\n    }\n    price\n    discount\n    discount_unit\n    description\n    specification {\n      key\n      value\n    }\n    visibility\n  }\n}\n"): (typeof documents)["\nquery getOwnProduct($slug: String!) {\n  getOwnProduct(slug: $slug) {\n    id\n    name\n    en_name\n    category {\n      id\n      name\n    }\n    writer {\n      id\n      name\n    }\n    publisher {\n      id\n      name\n    }\n    teacher {\n      id\n      name\n    }\n    institution {\n      id\n      name\n    }\n    paper {\n      id\n      name\n    }\n    keywords\n    image\n    file\n    pages\n    edition\n    isbn\n    flash {\n      id\n      title\n    }\n    price\n    discount\n    discount_unit\n    description\n    specification {\n      key\n      value\n    }\n    visibility\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation updateProduct($productDto: ProductDto!, $updateProductId: Float!) {\n  updateProduct(productDto: $productDto, id: $updateProductId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation updateProduct($productDto: ProductDto!, $updateProductId: Float!) {\n  updateProduct(productDto: $productDto, id: $updateProductId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getPublishers($searchDto: SearchDto!) {\n  getPublishers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getPublishers($searchDto: SearchDto!) {\n  getPublishers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getReviewBySeller($searchDto: SearchDto!) {\n  getReviewBySeller(searchDto: $searchDto) {\n    results {\n      id\n      user {\n        id\n        name\n        phone\n        email\n      }\n      product {\n        id\n        name\n        slug\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        image\n        total_price\n        publisher {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        institution {\n          id\n          name\n        }\n        paper {\n          id\n          name\n        }\n      }\n      comment\n      reply\n      rating\n      publish\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getReviewBySeller($searchDto: SearchDto!) {\n  getReviewBySeller(searchDto: $searchDto) {\n    results {\n      id\n      user {\n        id\n        name\n        phone\n        email\n      }\n      product {\n        id\n        name\n        slug\n        category {\n          id\n          name\n        }\n        writer {\n          id\n          name\n        }\n        image\n        total_price\n        publisher {\n          id\n          name\n        }\n        teacher {\n          id\n          name\n        }\n        institution {\n          id\n          name\n        }\n        paper {\n          id\n          name\n        }\n      }\n      comment\n      reply\n      rating\n      publish\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation replyReview($reviewReplyDto: ReviewReplyDto!) {\n  replyReview(reviewReplyDto: $reviewReplyDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation replyReview($reviewReplyDto: ReviewReplyDto!) {\n  replyReview(reviewReplyDto: $reviewReplyDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getSales($searchDto: SearchDto!) {\n  getSales(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      title\n      image\n      start_on\n      expires_on\n      discount\n      discount_unit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getSales($searchDto: SearchDto!) {\n  getSales(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      title\n      image\n      start_on\n      expires_on\n      discount\n      discount_unit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getRunningSale($searchDto: SearchDto!) {\n  getRunningSales(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      title\n      image\n      start_on\n      expires_on\n      discount\n      discount_unit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getRunningSale($searchDto: SearchDto!) {\n  getRunningSales(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      title\n      image\n      start_on\n      expires_on\n      discount\n      discount_unit\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getTeachers($searchDto: SearchDto!) {\n  getTeachers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      description\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getTeachers($searchDto: SearchDto!) {\n  getTeachers(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      description\n      image\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation addWithdrawRequest($withdrawDto: WithdrawDto!) {\n  addWithdrawRequest(withdrawDto: $withdrawDto) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation addWithdrawRequest($withdrawDto: WithdrawDto!) {\n  addWithdrawRequest(withdrawDto: $withdrawDto) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation confirmWithdraw($confirmPaymentId: Float!) {\n  confirmPayment(id: $confirmPaymentId) {\n    message\n  }\n}\n"): (typeof documents)["\nmutation confirmWithdraw($confirmPaymentId: Float!) {\n  confirmPayment(id: $confirmPaymentId) {\n    message\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getWithdrawBySeller($searchDto: SearchDto!) {\n  getWithdrawBySeller(searchDto: $searchDto) {\n    results {\n      id\n      amount\n      released_by {\n        id\n        name\n      }\n      method\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getWithdrawBySeller($searchDto: SearchDto!) {\n  getWithdrawBySeller(searchDto: $searchDto) {\n    results {\n      id\n      amount\n      released_by {\n        id\n        name\n      }\n      method\n      status\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery getWriters($searchDto: SearchDto!) {\n  getWriters(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n      level\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"): (typeof documents)["\nquery getWriters($searchDto: SearchDto!) {\n  getWriters(searchDto: $searchDto) {\n    results {\n      id\n      slug\n      name\n      image\n      level\n    }\n    meta {\n      itemCount\n      totalItems\n      itemsPerPage\n      totalPages\n      currentPage\n    }\n  }\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;