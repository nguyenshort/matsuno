/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategories
// ====================================================

export interface GetCategories_categories {
  __typename: "Category";
  id: string;
  content: string | null;
  avatar: string;
  name: string;
  slug: string;
  primary: boolean;
}

export interface GetCategories {
  categories: GetCategories_categories[];
}
