/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: Date; output: Date; }
};

export type AdminInput = {
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  role: Scalars['String']['input'];
};

export type ApplyCouponDto = {
  code: Scalars['String']['input'];
  current_amount: Scalars['Float']['input'];
};

export type BannerDto = {
  name: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type CartDto = {
  product: Scalars['Float']['input'];
};

export type CategoryDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  en_name: Scalars['String']['input'];
  icon?: InputMaybe<Scalars['String']['input']>;
  is_top: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  position: Scalars['Float']['input'];
  vertical_product_style: Scalars['Boolean']['input'];
};

export type ConfirmOrderDto = {
  applied_coupon?: InputMaybe<Scalars['String']['input']>;
  coupon_amount?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type CouponDto = {
  code: Scalars['String']['input'];
  discount: Scalars['Float']['input'];
  discount_unit: Scalars['String']['input'];
  en_name: Scalars['String']['input'];
  expires_on: Scalars['DateTime']['input'];
  minimum_purchase: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  start_on: Scalars['DateTime']['input'];
  uses_limit: Scalars['Float']['input'];
};

export type FacebookInput = {
  accessToken: Scalars['String']['input'];
  userId: Scalars['String']['input'];
};

export type FeedbackDto = {
  description: Scalars['String']['input'];
  image: Scalars['String']['input'];
  name: Scalars['String']['input'];
  rating: Scalars['Float']['input'];
  title: Scalars['String']['input'];
};

export type GoogleInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  idToken?: InputMaybe<Scalars['String']['input']>;
};

export type InstitutionDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  en_name: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type MethodDto = {
  acc_holder_name?: InputMaybe<Scalars['String']['input']>;
  acc_number?: InputMaybe<Scalars['String']['input']>;
  bank_name?: InputMaybe<Scalars['String']['input']>;
  bkash?: InputMaybe<Scalars['String']['input']>;
  branch?: InputMaybe<Scalars['String']['input']>;
  nagad?: InputMaybe<Scalars['String']['input']>;
  rocket?: InputMaybe<Scalars['String']['input']>;
  routing?: InputMaybe<Scalars['String']['input']>;
  upay?: InputMaybe<Scalars['String']['input']>;
};

export type OrderDto = {
  orderId: Scalars['String']['input'];
  products: Array<Scalars['Float']['input']>;
};

export type PaperDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  en_name: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type PlatformDto = {
  charge: Scalars['Float']['input'];
};

export type ProductDto = {
  category: Scalars['String']['input'];
  description: Scalars['String']['input'];
  discount: Scalars['Float']['input'];
  discount_unit: Scalars['String']['input'];
  edition?: InputMaybe<Scalars['String']['input']>;
  en_name: Scalars['String']['input'];
  file: Scalars['String']['input'];
  flash?: InputMaybe<Scalars['String']['input']>;
  image: Scalars['String']['input'];
  institution?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  name: Scalars['String']['input'];
  pages?: InputMaybe<Scalars['Float']['input']>;
  paper?: InputMaybe<Scalars['String']['input']>;
  price: Scalars['Float']['input'];
  publisher?: InputMaybe<Scalars['String']['input']>;
  specification?: InputMaybe<Array<ProductSpecificationDto>>;
  teacher?: InputMaybe<Scalars['String']['input']>;
  visibility?: InputMaybe<Scalars['Boolean']['input']>;
  writer?: InputMaybe<Scalars['String']['input']>;
};

export type ProductSearchDto = {
  category?: InputMaybe<Array<Scalars['String']['input']>>;
  institution?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Float']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Float']['input']>;
  paper?: InputMaybe<Array<Scalars['String']['input']>>;
  price?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<Array<Scalars['String']['input']>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sortBy?: InputMaybe<Scalars['String']['input']>;
  teacher?: InputMaybe<Array<Scalars['String']['input']>>;
  writer?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type ProductSpecificationDto = {
  key?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type PublisherDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  en_name: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type RequestDto = {
  email: Scalars['String']['input'];
  message: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type ReviewDto = {
  comment: Scalars['String']['input'];
  product: Scalars['Float']['input'];
  rating: Scalars['Float']['input'];
  seller: Scalars['Float']['input'];
};

export type ReviewReplyDto = {
  reply: Scalars['String']['input'];
  reviewId: Scalars['Float']['input'];
};

export type SalesDto = {
  discount: Scalars['Float']['input'];
  discount_unit: Scalars['String']['input'];
  en_title: Scalars['String']['input'];
  expires_on: Scalars['DateTime']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  start_on: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
};

export type SearchDto = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
};

export type SectionDto = {
  category?: InputMaybe<Scalars['String']['input']>;
  icon: Scalars['String']['input'];
  institution?: InputMaybe<Scalars['String']['input']>;
  paper?: InputMaybe<Scalars['String']['input']>;
  position: Scalars['Float']['input'];
  products: Array<Scalars['String']['input']>;
  publisher?: InputMaybe<Scalars['String']['input']>;
  teacher?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  writer?: InputMaybe<Scalars['String']['input']>;
};

export type SellerDto = {
  address: Scalars['String']['input'];
  banner?: InputMaybe<Scalars['String']['input']>;
  contact_number: Scalars['String']['input'];
  email: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['String']['input']>;
  organization_name?: InputMaybe<Scalars['String']['input']>;
  owner_name: Scalars['String']['input'];
  shop_name: Scalars['String']['input'];
  tin?: InputMaybe<Scalars['String']['input']>;
  trade_license?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export type SettingsDto = {
  facebook?: InputMaybe<Scalars['String']['input']>;
  footer_note?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  instagram?: InputMaybe<Scalars['String']['input']>;
  keywords?: InputMaybe<Array<Scalars['String']['input']>>;
  logo?: InputMaybe<Scalars['String']['input']>;
  meta_description?: InputMaybe<Scalars['String']['input']>;
  meta_title?: InputMaybe<Scalars['String']['input']>;
  og_description?: InputMaybe<Scalars['String']['input']>;
  og_image?: InputMaybe<Scalars['String']['input']>;
  og_title?: InputMaybe<Scalars['String']['input']>;
  site_title?: InputMaybe<Scalars['String']['input']>;
  slogan?: InputMaybe<Scalars['String']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
  youtube?: InputMaybe<Scalars['String']['input']>;
};

export type SignupInput = {
  as: Array<Scalars['String']['input']>;
  phone: Scalars['String']['input'];
};

export type TeacherDto = {
  description?: InputMaybe<Scalars['String']['input']>;
  en_name: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type TermsDto = {
  privacy_policy?: InputMaybe<Scalars['String']['input']>;
  terms_and_condition?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateSellerDto = {
  address: Scalars['String']['input'];
  banner?: InputMaybe<Scalars['String']['input']>;
  contact_number: Scalars['String']['input'];
  logo?: InputMaybe<Scalars['String']['input']>;
  shop_name: Scalars['String']['input'];
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type VerifyPhoneInput = {
  otp: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type WishlistDto = {
  product: Scalars['Float']['input'];
};

export type WithdrawDto = {
  amount: Scalars['Float']['input'];
  method: Scalars['String']['input'];
};

export type WriterDto = {
  bio?: InputMaybe<Scalars['String']['input']>;
  en_name: Scalars['String']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type SignupMutationVariables = Exact<{
  signupInput: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'SuccessInfo', message: string } };

export type VerifyPhoneMutationVariables = Exact<{
  verifyPhoneInput: VerifyPhoneInput;
}>;


export type VerifyPhoneMutation = { __typename?: 'Mutation', verifyPhone: { __typename?: 'LoginSuccess', message: string, token: string } };

export type ResendOtpMutationVariables = Exact<{
  phone: Scalars['String']['input'];
}>;


export type ResendOtpMutation = { __typename?: 'Mutation', resendOtp: { __typename?: 'SuccessInfo', message: string } };

export type GetProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProfileQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', id: string, name?: string | null, phone?: string | null, email?: string | null, avatar?: string | null, is_verified: boolean, role: string, seller?: { __typename?: 'Seller', id: number, type: string, owner_name: string, contact_number: string, email: string, shop_name: string, slug: string, address: string, organization_name?: string | null, trade_license?: string | null, tin?: string | null, logo?: string | null, banner?: string | null, need_review: boolean, method?: { __typename?: 'Method', id: number, bank_name?: string | null, acc_number?: string | null, routing?: string | null, branch?: string | null, acc_holder_name?: string | null, bkash?: string | null, nagad?: string | null, upay?: string | null, rocket?: string | null, updated_at: Date, created_at: Date } | null } | null } };

export type UpdateSellerMutationVariables = Exact<{
  updateSellerDto: UpdateSellerDto;
}>;


export type UpdateSellerMutation = { __typename?: 'Mutation', updateSeller: { __typename?: 'SuccessInfo', message: string } };

export type AddPaymentMethodMutationVariables = Exact<{
  methodDto: MethodDto;
}>;


export type AddPaymentMethodMutation = { __typename?: 'Mutation', addSellerPaymentMethod: { __typename?: 'SuccessInfo', message: string } };

export type GetAnalyticsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnalyticsQuery = { __typename?: 'Query', getSellerAnalytics: { __typename?: 'SellerAnalytics', totalIncome?: number | null, totalIncomeWithoutCharge?: number | null, totalDue?: number | null, totalWithdraw?: number | null, totalProduct?: number | null, totalSale?: number | null, totalOrder?: number | null, totalReview?: number | null } };

export type GetCategoriesQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetCategoriesQuery = { __typename?: 'Query', getCategories: { __typename?: 'Categories', results?: Array<{ __typename?: 'Category', id: number, name: string, icon?: string | null, slug: string, position: number, is_top: boolean }> | null, meta?: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } | null } };

export type GetInstitutionsQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetInstitutionsQuery = { __typename?: 'Query', getInstitutions: { __typename?: 'Institutions', results?: Array<{ __typename?: 'Institution', id: number, slug: string, name: string, image?: string | null }> | null, meta?: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } | null } };

export type GetSellerOrdersQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetSellerOrdersQuery = { __typename?: 'Query', getSellerOrders: { __typename?: 'Orders', results: Array<{ __typename?: 'Order', id: number, orderId: string, status: string, products?: Array<{ __typename?: 'Product', id: number, name: string, total_price: number, image: string, category?: { __typename?: 'Category', id: number, name: string } | null, writer?: { __typename?: 'Writer', id: number, name: string } | null, teacher?: { __typename?: 'Teacher', id: number, name: string } | null, seller?: { __typename?: 'Seller', id: number, shop_name: string } | null }> | null }>, meta: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } } };

export type GetPapersQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetPapersQuery = { __typename?: 'Query', getPapers: { __typename?: 'Papers', results?: Array<{ __typename?: 'Paper', id: number, slug: string, name: string, image?: string | null }> | null, meta?: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } | null } };

export type AddProductMutationVariables = Exact<{
  productDto: ProductDto;
}>;


export type AddProductMutation = { __typename?: 'Mutation', addProduct: { __typename?: 'SuccessInfo', message: string } };

export type GetOwnProductsQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetOwnProductsQuery = { __typename?: 'Query', getOwnProducts: { __typename?: 'Products', results: Array<{ __typename?: 'Product', id: number, slug: string, name: string, image: string, price: number, is_approved: boolean, total_price: number, category?: { __typename?: 'Category', id: number, name: string } | null, writer?: { __typename?: 'Writer', id: number, name: string } | null }>, meta: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } } };

export type DeleteProductMutationVariables = Exact<{
  deleteProductId: Scalars['Float']['input'];
}>;


export type DeleteProductMutation = { __typename?: 'Mutation', deleteProduct: { __typename?: 'SuccessInfo', message: string } };

export type GetOwnProductQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetOwnProductQuery = { __typename?: 'Query', getOwnProduct: { __typename?: 'Product', id: number, name: string, en_name: string, keywords?: Array<string> | null, image: string, file?: string | null, pages?: number | null, edition?: string | null, isbn?: string | null, price: number, discount: number, discount_unit: string, description: string, visibility: boolean, category?: { __typename?: 'Category', id: number, name: string } | null, writer?: { __typename?: 'Writer', id: number, name: string } | null, publisher?: { __typename?: 'Publisher', id: number, name: string } | null, teacher?: { __typename?: 'Teacher', id: number, name: string } | null, institution?: { __typename?: 'Institution', id: number, name: string } | null, paper?: { __typename?: 'Paper', id: number, name: string } | null, flash?: { __typename?: 'Sale', id: number, title: string } | null, specification?: Array<{ __typename?: 'ProductSpecification', key?: string | null, value?: string | null }> | null } };

export type UpdateProductMutationVariables = Exact<{
  productDto: ProductDto;
  updateProductId: Scalars['Float']['input'];
}>;


export type UpdateProductMutation = { __typename?: 'Mutation', updateProduct: { __typename?: 'SuccessInfo', message: string } };

export type GetPublishersQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetPublishersQuery = { __typename?: 'Query', getPublishers: { __typename?: 'Publishers', results?: Array<{ __typename?: 'Publisher', id: number, slug: string, name: string, image?: string | null }> | null, meta?: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } | null } };

export type GetReviewBySellerQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetReviewBySellerQuery = { __typename?: 'Query', getReviewBySeller: { __typename?: 'Reviews', results: Array<{ __typename?: 'Review', id: number, comment: string, reply?: string | null, rating: number, publish: boolean, user?: { __typename?: 'User', id: string, name?: string | null, phone?: string | null, email?: string | null } | null, product?: { __typename?: 'Product', id: number, name: string, slug: string, image: string, total_price: number, category?: { __typename?: 'Category', id: number, name: string } | null, writer?: { __typename?: 'Writer', id: number, name: string } | null, publisher?: { __typename?: 'Publisher', id: number, name: string } | null, teacher?: { __typename?: 'Teacher', id: number, name: string } | null, institution?: { __typename?: 'Institution', id: number, name: string } | null, paper?: { __typename?: 'Paper', id: number, name: string } | null } | null }>, meta: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } } };

export type ReplyReviewMutationVariables = Exact<{
  reviewReplyDto: ReviewReplyDto;
}>;


export type ReplyReviewMutation = { __typename?: 'Mutation', replyReview: { __typename?: 'SuccessInfo', message: string } };

export type GetSalesQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetSalesQuery = { __typename?: 'Query', getSales: { __typename?: 'Sales', results?: Array<{ __typename?: 'Sale', id: number, slug: string, title: string, image?: string | null, start_on: Date, expires_on: Date, discount: number, discount_unit: string }> | null, meta?: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } | null } };

export type GetRunningSaleQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetRunningSaleQuery = { __typename?: 'Query', getRunningSales: { __typename?: 'Sales', results?: Array<{ __typename?: 'Sale', id: number, slug: string, title: string, image?: string | null, start_on: Date, expires_on: Date, discount: number, discount_unit: string }> | null, meta?: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } | null } };

export type GetTeachersQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetTeachersQuery = { __typename?: 'Query', getTeachers: { __typename?: 'Teachers', results?: Array<{ __typename?: 'Teacher', id: number, slug: string, name: string, description?: string | null, image?: string | null }> | null, meta?: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } | null } };

export type AddWithdrawRequestMutationVariables = Exact<{
  withdrawDto: WithdrawDto;
}>;


export type AddWithdrawRequestMutation = { __typename?: 'Mutation', addWithdrawRequest: { __typename?: 'SuccessInfo', message: string } };

export type ConfirmWithdrawMutationVariables = Exact<{
  confirmPaymentId: Scalars['Float']['input'];
}>;


export type ConfirmWithdrawMutation = { __typename?: 'Mutation', confirmPayment: { __typename?: 'SuccessInfo', message: string } };

export type GetWithdrawBySellerQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetWithdrawBySellerQuery = { __typename?: 'Query', getWithdrawBySeller: { __typename?: 'Withdraws', results: Array<{ __typename?: 'Withdraw', id: number, amount: number, method: string, status: string, released_by?: { __typename?: 'User', id: string, name?: string | null } | null }>, meta: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } } };

export type GetWritersQueryVariables = Exact<{
  searchDto: SearchDto;
}>;


export type GetWritersQuery = { __typename?: 'Query', getWriters: { __typename?: 'Writers', results?: Array<{ __typename?: 'Writer', id: number, slug: string, name: string, image?: string | null, level: string }> | null, meta?: { __typename?: 'Meta', itemCount?: number | null, totalItems?: number | null, itemsPerPage?: number | null, totalPages?: number | null, currentPage?: number | null } | null } };


export const SignupDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"signup"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"signupInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SignupInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"signup"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"signupInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"signupInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<SignupMutation, SignupMutationVariables>;
export const VerifyPhoneDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"verifyPhone"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"verifyPhoneInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"VerifyPhoneInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifyPhone"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"verifyPhoneInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"verifyPhoneInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<VerifyPhoneMutation, VerifyPhoneMutationVariables>;
export const ResendOtpDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resendOtp"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"phone"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendOtp"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"phone"},"value":{"kind":"Variable","name":{"kind":"Name","value":"phone"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ResendOtpMutation, ResendOtpMutationVariables>;
export const GetProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"is_verified"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"seller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"owner_name"}},{"kind":"Field","name":{"kind":"Name","value":"contact_number"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"shop_name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"organization_name"}},{"kind":"Field","name":{"kind":"Name","value":"trade_license"}},{"kind":"Field","name":{"kind":"Name","value":"tin"}},{"kind":"Field","name":{"kind":"Name","value":"logo"}},{"kind":"Field","name":{"kind":"Name","value":"banner"}},{"kind":"Field","name":{"kind":"Name","value":"need_review"}},{"kind":"Field","name":{"kind":"Name","value":"method"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"bank_name"}},{"kind":"Field","name":{"kind":"Name","value":"acc_number"}},{"kind":"Field","name":{"kind":"Name","value":"routing"}},{"kind":"Field","name":{"kind":"Name","value":"branch"}},{"kind":"Field","name":{"kind":"Name","value":"acc_holder_name"}},{"kind":"Field","name":{"kind":"Name","value":"bkash"}},{"kind":"Field","name":{"kind":"Name","value":"nagad"}},{"kind":"Field","name":{"kind":"Name","value":"upay"}},{"kind":"Field","name":{"kind":"Name","value":"rocket"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetProfileQuery, GetProfileQueryVariables>;
export const UpdateSellerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateSeller"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateSellerDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateSellerDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateSeller"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"updateSellerDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateSellerDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UpdateSellerMutation, UpdateSellerMutationVariables>;
export const AddPaymentMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addPaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"methodDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MethodDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addSellerPaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"methodDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"methodDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<AddPaymentMethodMutation, AddPaymentMethodMutationVariables>;
export const GetAnalyticsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAnalytics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSellerAnalytics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalIncome"}},{"kind":"Field","name":{"kind":"Name","value":"totalIncomeWithoutCharge"}},{"kind":"Field","name":{"kind":"Name","value":"totalDue"}},{"kind":"Field","name":{"kind":"Name","value":"totalWithdraw"}},{"kind":"Field","name":{"kind":"Name","value":"totalProduct"}},{"kind":"Field","name":{"kind":"Name","value":"totalSale"}},{"kind":"Field","name":{"kind":"Name","value":"totalOrder"}},{"kind":"Field","name":{"kind":"Name","value":"totalReview"}}]}}]}}]} as unknown as DocumentNode<GetAnalyticsQuery, GetAnalyticsQueryVariables>;
export const GetCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCategories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCategories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"icon"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"position"}},{"kind":"Field","name":{"kind":"Name","value":"is_top"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetInstitutionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getInstitutions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getInstitutions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetInstitutionsQuery, GetInstitutionsQueryVariables>;
export const GetSellerOrdersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSellerOrders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSellerOrders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"orderId"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"writer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seller"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"shop_name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"total_price"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetSellerOrdersQuery, GetSellerOrdersQueryVariables>;
export const GetPapersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPapers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPapers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetPapersQuery, GetPapersQueryVariables>;
export const AddProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<AddProductMutation, AddProductMutationVariables>;
export const GetOwnProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOwnProducts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOwnProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"writer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"is_approved"}},{"kind":"Field","name":{"kind":"Name","value":"total_price"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetOwnProductsQuery, GetOwnProductsQueryVariables>;
export const DeleteProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"deleteProductId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<DeleteProductMutation, DeleteProductMutationVariables>;
export const GetOwnProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getOwnProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getOwnProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"en_name"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"writer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"institution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paper"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"keywords"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"file"}},{"kind":"Field","name":{"kind":"Name","value":"pages"}},{"kind":"Field","name":{"kind":"Name","value":"edition"}},{"kind":"Field","name":{"kind":"Name","value":"isbn"}},{"kind":"Field","name":{"kind":"Name","value":"flash"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_unit"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"specification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}}]}}]}}]} as unknown as DocumentNode<GetOwnProductQuery, GetOwnProductQueryVariables>;
export const UpdateProductDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateProduct"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ProductDto"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"updateProductId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateProduct"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productDto"}}},{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"updateProductId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<UpdateProductMutation, UpdateProductMutationVariables>;
export const GetPublishersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getPublishers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPublishers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetPublishersQuery, GetPublishersQueryVariables>;
export const GetReviewBySellerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getReviewBySeller"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getReviewBySeller"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"product"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"category"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"writer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"total_price"}},{"kind":"Field","name":{"kind":"Name","value":"publisher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"teacher"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"institution"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paper"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"comment"}},{"kind":"Field","name":{"kind":"Name","value":"reply"}},{"kind":"Field","name":{"kind":"Name","value":"rating"}},{"kind":"Field","name":{"kind":"Name","value":"publish"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetReviewBySellerQuery, GetReviewBySellerQueryVariables>;
export const ReplyReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"replyReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reviewReplyDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ReviewReplyDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"replyReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"reviewReplyDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reviewReplyDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ReplyReviewMutation, ReplyReviewMutationVariables>;
export const GetSalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getSales"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getSales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"start_on"}},{"kind":"Field","name":{"kind":"Name","value":"expires_on"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_unit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetSalesQuery, GetSalesQueryVariables>;
export const GetRunningSaleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRunningSale"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getRunningSales"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"start_on"}},{"kind":"Field","name":{"kind":"Name","value":"expires_on"}},{"kind":"Field","name":{"kind":"Name","value":"discount"}},{"kind":"Field","name":{"kind":"Name","value":"discount_unit"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetRunningSaleQuery, GetRunningSaleQueryVariables>;
export const GetTeachersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTeachers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTeachers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetTeachersQuery, GetTeachersQueryVariables>;
export const AddWithdrawRequestDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addWithdrawRequest"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"withdrawDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WithdrawDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addWithdrawRequest"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"withdrawDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"withdrawDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<AddWithdrawRequestMutation, AddWithdrawRequestMutationVariables>;
export const ConfirmWithdrawDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"confirmWithdraw"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"confirmPaymentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmPayment"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"confirmPaymentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<ConfirmWithdrawMutation, ConfirmWithdrawMutationVariables>;
export const GetWithdrawBySellerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWithdrawBySeller"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWithdrawBySeller"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"released_by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"method"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetWithdrawBySellerQuery, GetWithdrawBySellerQueryVariables>;
export const GetWritersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getWriters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SearchDto"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getWriters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"searchDto"},"value":{"kind":"Variable","name":{"kind":"Name","value":"searchDto"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"results"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"level"}}]}},{"kind":"Field","name":{"kind":"Name","value":"meta"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"itemCount"}},{"kind":"Field","name":{"kind":"Name","value":"totalItems"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPerPage"}},{"kind":"Field","name":{"kind":"Name","value":"totalPages"}},{"kind":"Field","name":{"kind":"Name","value":"currentPage"}}]}}]}}]}}]} as unknown as DocumentNode<GetWritersQuery, GetWritersQueryVariables>;