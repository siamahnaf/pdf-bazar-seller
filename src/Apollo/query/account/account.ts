import { gql } from "@/Apollo/types";


export const LOGIN_ACCOUNT = gql(`
mutation signup($signupInput: SignupInput!) {
  signup(signupInput: $signupInput) {
    message
  }
}
`);

export const VERIFY_OTP = gql(`
mutation verifyPhone($verifyPhoneInput: VerifyPhoneInput!) {
  verifyPhone(verifyPhoneInput: $verifyPhoneInput) {
    message
    token
  }
}
`);

export const RESEND_OTP = gql(`
mutation resendOtp($phone: String!) {
  resendOtp(phone: $phone) {
    message
  }
}
`);



export const GET_PROFILE = gql(`
query getProfile {
  getProfile {
    id
    name
    phone
    email
    avatar
    is_verified
    role
    seller {
      id
      type
      owner_name
      contact_number
      email
      shop_name
      slug
      address
      organization_name
      trade_license
      tin
      logo
      banner
      need_review
      method {
        id
        bank_name
        acc_number
        routing
        branch
        acc_holder_name
        bkash
        nagad
        upay
        rocket
        updated_at
        created_at
      }
    }
  }
}
`);


export const UPDATE_SELLER = gql(`
mutation updateSeller($updateSellerDto: UpdateSellerDto!) {
  updateSeller(updateSellerDto: $updateSellerDto) {
    message
  }
}
`);

export const UPDATE_METHOD = gql(`
mutation addPaymentMethod($methodDto: MethodDto!) {
  addSellerPaymentMethod(methodDto: $methodDto) {
    message
  }
}
`);